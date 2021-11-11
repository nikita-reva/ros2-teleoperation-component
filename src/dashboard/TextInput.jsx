import React from 'react';
import { useField } from 'formik';
import styled from 'styled-components';

const Input = styled.input`
  width: 100%;
  outline: none;
  padding: 4px 6px;
  border: 1px solid var(--primary-color-light);
  background: var(--primary-color-dark);
  color: var(--primary-color-light);
  letter-spacing: 0.2px;
  font-size: ${({ bigFont }) => (bigFont ? '1rem' : '0.8rem')};
  transition: border 0.2s;

  &::placeholder {
    color: var(--secondary-color);
    transition: color 0.2s;
    letter-spacing: 0.1px;
    font-size: 0.8rem;
  }

  &:focus {
    border: 1px solid var(--primary-color-lighter);
  }

  &:focus::placeholder {
    color: transparent;
  }

  &:invalid {
    border: 1px solid lightcoral;
  }
`;

export const TextInput = ({ ...props }) => {
  const [field] = useField(props);

  return <Input {...field} {...props} type="text" />;
};
