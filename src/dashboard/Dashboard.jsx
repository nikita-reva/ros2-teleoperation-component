import React from 'react';
import styled from 'styled-components';

import { useRosConnection } from '../ros/rosService';
import Connection from './Connection';
import Teleoperation from './Teleoperation';
import RobotState from './RobotState';

const Heading = styled.h1`
  align-self: center;
  text-align: center;
  width: 100%;
  color: var(--primary-color-light);
  font-size: 1.8rem;
  font-weight: 700;
  letter-spacing: 0.4px;
  margin: 6px 0;
`;

const ContentContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  max-width: 688px;
  padding: 48px 24px;
  margin: 0 auto;
  background: var(--primary-color-dark-hover);
  color: var(--primary-color-light);
  height: calc(100% - 87px);
`;

export default function Dashboard() {
  const [ros, connected] = useRosConnection();

  return (
    <ContentContainer>
      <Heading pos="c">ROS2 Teleoperation Dashboard</Heading>
      <Connection connected={connected} />
      <Teleoperation ros={ros} connected={connected} />
      <RobotState ros={ros} connected={connected} />
    </ContentContainer>
  );
}
