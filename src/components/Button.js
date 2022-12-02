/* eslint-disable operator-linebreak */
/* eslint-disable implicit-arrow-linebreak */
import styled, { css } from 'styled-components';

export default styled.button`
  height: 52px;
  padding: 0 16px;
  background-color: ${({ theme }) => theme.colors.primary.main};
  border: none;
  border-radius: 4px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.04);
  font-size: 16px;
  color: #fff;
  font-weight: bold;
  transition: background 0.2s ease-in;

  &:hover {
    background-color: ${({ theme }) => theme.colors.primary.light};
  }

  &:active {
    background-color: ${({ theme }) => theme.colors.primary.dark};
  }

  &:disabled {
    background-color: #ccc;
    cursor: default;
  }

  ${({ danger, theme }) =>
    danger &&
    css`
      background: ${theme.colors.danger.main};

      &:hover {
        background-color: ${theme.colors.danger.light};
      }

      &:active {
        background-color: ${theme.colors.danger.dark};
      }
    `}
`;
