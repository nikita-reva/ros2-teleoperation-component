import React from 'react';
import styled from 'styled-components';
import {
  MdOutlineKeyboardArrowUp,
  MdOutlineKeyboardArrowDown,
} from 'react-icons/md';

const Velocities = styled.div`
  width: 100%;
  margin-bottom: 8px;
`;

const VelocityHeading = styled.h3`
  text-align: center;
  margin-bottom: 4px;
`;

const VelocityPanels = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin-bottom: 12px;
`;

const VelocityPanel = styled.div`
  display: flex;
  align-items: center;
  margin-right: 12px;
`;

const VelocityType = styled.div`
  margin-right: 8px;
`;

const Indicator = styled.span`
  font-size: 1.2rem;
  padding: 4px;
  width: 48px;
  text-align: center;
  margin-right: 4px;
  border: 1px solid var(--primary-color-light);
  border-radius: 4px;
`;

const VelocityButtons = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-content: center;
`;

const VelocityButton = styled.span`
  display: grid;
  place-items: center;
  font-size: 1.2rem;
  margin: 1px;
  cursor: pointer;
  border: 1px solid var(--primary-color-light);
  opacity: 0.6;
  transition: opacity 0.1s ease-out;

  @media (hover: hover) and (pointer: fine) {
    &:hover {
      opacity: 1;
    }
  }
`;

const VelocitiesPanel = ({ moveVel, setMoveVel, turnVel, setTurnVel }) => {
  return (
    <Velocities>
      <VelocityHeading>Velocities</VelocityHeading>
      <VelocityPanels>
        <VelocityPanel>
          <VelocityType>Linear:</VelocityType>
          <Indicator>{moveVel.toFixed(1)}</Indicator>
          <VelocityButtons>
            <VelocityButton
              onClick={() => {
                sessionStorage.setItem('moveVel', (moveVel + 0.2).toFixed(1));
                setMoveVel(moveVel + 0.2);
              }}
            >
              <MdOutlineKeyboardArrowUp />
            </VelocityButton>
            <VelocityButton
              onClick={() => {
                sessionStorage.setItem('moveVel', (moveVel - 0.2).toFixed(1));
                setMoveVel(moveVel - 0.2);
              }}
            >
              <MdOutlineKeyboardArrowDown />
            </VelocityButton>
          </VelocityButtons>
        </VelocityPanel>
        <VelocityPanel>
          <VelocityType>Angular:</VelocityType>
          <Indicator>{turnVel.toFixed(1)}</Indicator>
          <VelocityButtons>
            <VelocityButton
              onClick={() => {
                sessionStorage.setItem('turnVel', (turnVel + 0.2).toFixed(1));
                setTurnVel(turnVel + 0.2);
              }}
            >
              <MdOutlineKeyboardArrowUp />
            </VelocityButton>
            <VelocityButton
              onClick={() => {
                sessionStorage.setItem('turnVel', (turnVel - 0.2).toFixed(1));
                setTurnVel(turnVel - 0.2);
              }}
            >
              <MdOutlineKeyboardArrowDown />
            </VelocityButton>
          </VelocityButtons>
        </VelocityPanel>
      </VelocityPanels>
    </Velocities>
  );
};

export default VelocitiesPanel;
