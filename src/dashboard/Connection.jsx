import React from 'react';
import styled from 'styled-components';

const ConnectionContainer = styled.div`
  display: flex;
  transition: background 0.4s ease-out;
  background: ${({ connected }) =>
    connected ? 'var(--secondary-color-green)' : 'var(--secondary-color-red)'};
  padding: 12px 0;
  margin: 8px 0;
  width: 100%;
  align-items: center;
  justify-content: center;
`;

const ConnectionText = styled.div`
  color: var(--primary-color-darker);
  font-size: 1.2rem;
  font-weight: 500;
`;

const Connection = ({ connected }) => {
  return (
    <ConnectionContainer connected={connected}>
      <ConnectionText>
        {connected ? 'Robot Connected' : 'Robot Disconnected'}
      </ConnectionText>
    </ConnectionContainer>
  );
};

export default Connection;
