import styled from 'styled-components';

export default styled.input`
  width: 100%;
  background-color: #fff;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.04);
  border: 0;
  height: 52px;
  border-radius: 4px;
  outline: 0;
  padding: 0 16px;
  font-size: 16px;
  border: 2px solid #fff;
  transition: all 0.2s ease-in;

  &:focus {
    border-color: ${({ theme }) => theme.colors.primary.main};
  }
`;
