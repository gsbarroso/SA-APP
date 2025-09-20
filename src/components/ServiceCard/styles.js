import styled, { css } from 'styled-components';

export const CardWrapper = styled.div`
  background-color: #fff;
  border: 1px solid #eee;
  border-radius: 12px;
  padding: 16px;
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 8px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.05);

  ${(props) => props.$isDisabled && css`
    background-color: #f9f9f9;
    color: #aaa;
  `}
`;

export const Time = styled.span`
  font-weight: bold;
  font-size: 16px;
`;

export const Name = styled.h3`
  margin: 0;
  font-size: 18px;
`;

export const InstructorInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  font-size: 14px;
  color: #666;
`;

export const CardActions = styled.div`
  margin-top: auto;
  padding-top: 16px;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const InfoLink = styled.a`
  color: #8A2BE2;
  text-decoration: none;
  font-size: 14px;

  &:hover {
    text-decoration: underline;
  }
`;