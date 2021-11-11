import React from 'react';

const Gamepad = () => {
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

        console.log(move_now);
        move(move_now, turn_now);
      } else {
        move(axis1 * moveVel, axis0 * turnVel);
      }
    }
  };

  useEffect(() => {
    let pollingInterval = null;

    const connectedHandler = (e) => {
      console.log(
        'Gamepad connected at index %d: %s. %d buttons, %d axes.',
        e.gamepad.index,
        e.gamepad.id,
        e.gamepad.buttons.length,
        e.gamepad.axes.length
      );

      pollingInterval = setInterval(pollGamepad, 10);
    };

    window.addEventListener('gamepadconnected', (e) => connectedHandler(e));

    return () => {
      window.removeEventListener('gamepadconnected', (e) =>
        connectedHandler(e)
      );
      if (pollingInterval) {
        clearInterval(pollingInterval);
      }
    };
  }, []);

  return <div></div>;
};

export default Gamepad;
