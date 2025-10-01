import styled, { css } from 'styled-components';

export const StyledButton = styled.button`
  padding: 10px 20px;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  font-weight: bold;
  font-size: 14px;
  transition: all 0.2s ease-in-out;
  background-color: #8A2BE2;
  color: white;

  &:hover {
    background-color: #7B1FA2;
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }

  ${(props) => props.disabled && css`
    background-color: #E0E0E0;
    color: #A0A0A0;
    cursor: not-allowed;
    transform: none;
    box-shadow: none;

    &:hover {
      background-color: #E0E0E0;
    }
  `}
`;