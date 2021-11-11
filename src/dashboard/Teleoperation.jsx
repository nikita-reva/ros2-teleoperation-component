import React, { useContext, useState } from 'react';
import { Joystick } from 'react-joystick-component';
import styled, { keyframes } from 'styled-components';
import {
  CgArrowUpR,
  CgArrowTopRightR,
  CgArrowRightR,
  CgArrowBottomRightR,
  CgArrowDownR,
  CgArrowBottomLeftR,
  CgArrowLeftR,
  CgArrowTopLeftR,
} from 'react-icons/cg';
import { GiConsoleController } from 'react-icons/gi';

import { useCmdVelTopic } from '../ros/rosService';
import VelocitiesPanel from './VelocitiesPanel';
import TopicForm from './TopicForm';
import { GamepadContext } from '../contexts/GamepadContext';

const TeleoperationContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 12px 0;
`;

const ControlPanel = styled.div`
  width: max-content;
  align-self: center;
  display: grid;
  grid-gap: 8px;
  grid-template-columns: auto auto auto;
  grid-template-rows: auto;

  grid-template-areas:
    'top-left up top-right'
    'left joystick right'
    'bottom-left down bottom-right';
`;

const JoystickContainer = styled.div`
  grid-area: 'joystick';
  display: grid;
  place-items: center;
  z-index: 1;
  opacity: 0.6;
  transition: opacity 0.2s ease-out;
  touch-action: none;

  @media (hover: hover) and (pointer: fine) {
    &:hover {
      opacity: 1;
    }
  }
`;

const Button = styled.div`
  display: grid;
  place-items: center;
  font-size: 6.6rem;
  opacity: 0.6;
  cursor: pointer;
  transition: opacity 0.2s ease-out;

  @media (hover: hover) and (pointer: fine) {
    &:hover {
      opacity: 1;
    }
  }
`;

const AnimateGamepad = keyframes`
  from {
    color: var(--secondary-color-green);
  }
  to {
    color: var(--secondary-color-blue);
  }
`;

const Gamepad = styled.div`
  margin-top: 6px;
  font-size: 4rem;
  text-align: center;
  cursor: pointer;
  color: ${({ gamepadActivated }) =>
    gamepadActivated
      ? 'var(--secondary-color-green)'
      : 'var(--secondary-color-red)'};
  animation: ${({ gamepadConnected, gamepadActivated }) =>
      gamepadConnected && !gamepadActivated ? AnimateGamepad : 'none'}
    0.6s ease-in-out infinite alternate;
  transition: color 0.2s ease-out;
`;

const TeleoperationText = styled.div`
  width: 100%;
  text-align: center;
  font-size: 0.8rem;
  margin-top: 12px;
`;

const Teleoperation = ({ ros, connected }) => {
  const [moveVel, setMoveVel] = useState(
    Number(sessionStorage.getItem('moveVel')) || 1.0
  );
  const [turnVel, setTurnVel] = useState(
    Number(sessionStorage.getItem('turnVel')) || 1.0
  );

  let pollInterval = null;
  const [pollIntervalId, setPollIntervalId] = useState(null);

  const [topic, setTopic] = useState(localStorage.getItem('topic') || '');

  const {
    gamepadConnected,
    setGamepadConnected,
    gamepadActivated,
    setGamepadActivated,
  } = useContext(GamepadContext);

  const cmd_vel = useCmdVelTopic(ros, topic);

  let keysPressed = {
    up: false,
    down: false,
    left: false,
    right: false,
  };
  let move_cmd = 0;
  let turn_cmd = 0;

  const move = (lx, az) => {
    const twist = new window.ROSLIB.Message({
      linear: {
        x: lx,
        y: 0,
        z: 0,
      },
      angular: {
        x: 0,
        y: 0,
        z: az,
      },
    });

    if (connected) {
      cmd_vel.publish(twist);
    }
  };

  const keyDownHandler = (event) => {
    if (gamepadActivated) return;

    if (event.code === 'ArrowLeft' && event.shiftKey && event.altKey) {
      keysPressed['left'] = true;
    }
    if (event.code === 'ArrowRight' && event.shiftKey && event.altKey) {
      keysPressed['right'] = true;
    }
    if (event.code === 'ArrowUp' && event.shiftKey && event.altKey) {
      keysPressed['up'] = true;
    }
    if (event.code === 'ArrowDown' && event.shiftKey && event.altKey) {
      keysPressed['down'] = true;
    }

    move_cmd = keysPressed['up'] ? moveVel : keysPressed['down'] ? -moveVel : 0;

    turn_cmd = keysPressed['left']
      ? turnVel
      : keysPressed['right']
      ? -turnVel
      : 0;

    move(move_cmd, turn_cmd);
  };

  const keyUpHandler = (event) => {
    if (gamepadActivated) return;

    if (event.code === 'ArrowLeft') {
      keysPressed['left'] = false;
      turn_cmd = 0;
    }
    if (event.code === 'ArrowRight') {
      keysPressed['right'] = false;
      turn_cmd = 0;
    }
    if (event.code === 'ArrowUp') {
      keysPressed['up'] = false;
      move_cmd = 0;
    }
    if (event.code === 'ArrowDown') {
      keysPressed['down'] = false;
      move_cmd = 0;
    }

    move(move_cmd, turn_cmd);
  };

  window.onkeydown = keyDownHandler;
  window.onkeyup = keyUpHandler;

  const handleMove = (event) => {
    if (gamepadActivated) return;

    move((event.y / 50) * moveVel, (-event.x / 50) * turnVel);
  };

  const handleStop = () => {
    move(0, 0);
  };

  const pollGamepad = () => {
    const gamepads = navigator.getGamepads
      ? navigator.getGamepads()
      : navigator.webkitGetGamepads
      ? navigator.webkitGetGamepads
      : [];
    if (!gamepads) {
      return;
    }

    let axis0;
    let axis1;
    let buttonUp;
    let buttonDown;
    let buttonLeft;
    let buttonRight;
    let move_now;
    let turn_now;

    if (gamepads[0]) {
      axis0 = -gamepads[0].axes[0].toFixed(2);
      axis1 = -gamepads[0].axes[1].toFixed(2);
      buttonUp = gamepads[0].buttons[12];
      buttonDown = gamepads[0].buttons[13];
      buttonLeft = gamepads[0].buttons[14];
      buttonRight = gamepads[0].buttons[15];

      if (
        buttonUp.pressed ||
        buttonDown.pressed ||
        buttonLeft.pressed ||
        buttonRight.pressed
      ) {
        move_now = buttonUp.pressed
          ? moveVel
          : buttonDown.pressed
          ? -moveVel
          : 0;

        turn_now = buttonLeft.pressed
          ? turnVel
          : buttonRight.pressed
          ? -turnVel
          : 0;

        move(move_now, turn_now);
      } else {
        move(axis1 * moveVel, axis0 * turnVel);
      }
    }
  };

  const connectHandler = (e) => {
    setGamepadConnected(true);
  };

  const disconnectHandler = (e) => {
    setGamepadConnected(false);
    setGamepadActivated(false);
    if (pollInterval) {
      clearInterval(pollInterval);
    }
  };

  const startGamepad = () => {
    if (!gamepadConnected) return;
    setGamepadActivated(true);
    pollInterval = setInterval(pollGamepad, 10);
    setPollIntervalId(pollInterval);
  };

  const stopGamepad = () => {
    if (!gamepadConnected) return;
    setGamepadActivated(false);
    clearInterval(pollIntervalId);
    move(0, 0);
  };

  window.addEventListener('gamepadconnected', (e) => connectHandler(e));
  window.addEventListener('gamepaddisconnected', (e) => disconnectHandler(e));

  return (
    <TeleoperationContainer>
      <TopicForm currentTopic={topic} setTopic={setTopic} />
      <VelocitiesPanel
        moveVel={moveVel}
        setMoveVel={setMoveVel}
        turnVel={turnVel}
        setTurnVel={setTurnVel}
      />
      <ControlPanel>
        <JoystickContainer>
          <Joystick
            size={100}
            baseColor="var(--primary-color-light)"
            stickColor="var(--primary-color-dark)"
            move={handleMove}
            stop={handleStop}
          />
        </JoystickContainer>
        <Button
          style={{ gridArea: 'top-left' }}
          onMouseDown={() => move(moveVel, turnVel)}
          onMouseUp={() => move(0, 0)}
        >
          <CgArrowTopLeftR />
        </Button>
        <Button
          style={{ gridArea: 'up' }}
          onMouseDown={() => move(moveVel, 0)}
          onMouseUp={() => move(0, 0)}
        >
          <CgArrowUpR />
        </Button>
        <Button
          style={{ gridArea: 'top-right' }}
          onMouseDown={() => move(moveVel, -turnVel)}
          onMouseUp={() => move(0, 0)}
        >
          <CgArrowTopRightR />
        </Button>
        <Button
          style={{ gridArea: 'right' }}
          onMouseDown={() => move(0, -turnVel)}
          onMouseUp={() => move(0, 0)}
        >
          <CgArrowRightR />
        </Button>
        <Button
          style={{ gridArea: 'bottom-right' }}
          onMouseDown={() => move(-moveVel, turnVel)}
          onMouseUp={() => move(0, 0)}
        >
          <CgArrowBottomRightR />
        </Button>
        <Button
          style={{ gridArea: 'down' }}
          onMouseDown={() => move(-moveVel, 0)}
          onMouseUp={() => move(0, 0)}
        >
          <CgArrowDownR />
        </Button>
        <Button
          style={{ gridArea: 'bottom-left' }}
          onMouseDown={() => move(-moveVel, -turnVel)}
          onMouseUp={() => move(0, 0)}
        >
          <CgArrowBottomLeftR />
        </Button>
        <Button
          style={{ gridArea: 'left' }}
          onMouseDown={() => move(0, turnVel)}
          onMouseUp={() => move(0, 0)}
        >
          <CgArrowLeftR />
        </Button>
      </ControlPanel>
      <Gamepad
        onClick={gamepadActivated ? stopGamepad : startGamepad}
        gamepadConnected={gamepadConnected}
        gamepadActivated={gamepadActivated}
      >
        <GiConsoleController />
      </Gamepad>
      <TeleoperationText>
        Use joystick, buttons, gamepad or press Shift + Alt + Arrow keys to
        control your robot
      </TeleoperationText>
    </TeleoperationContainer>
  );
};

export default Teleoperation;
