import styled, { css } from 'styled-components';

export const CardWrapper = styled.div`
  background-color: #fff;
  border: 1px solid #eee;
  border-radius: 12px;
  padding: 16px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 16px;
  min-height: 180px;

  ${(props) => props.$isDisabled && css`
    background-color: #f9f9f9;
    color: #aaa;
    
    h3 {
      color: #ccc;
    }
  `}
`;

export const CardHeader = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  align-items: start;
  gap: 12px;
`;

export const Time = styled.span`
  font-weight: 700;
  font-size: 16px;
  color: #333;
`;

export const Name = styled.h3`
  margin: 0;
  font-size: 18px;
  font-weight: 700;
  line-height: 1.3;
`;

export const CardActions = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const InfoLink = styled.a`
  color: #8A2BE2;
  text-decoration: none;
  font-size: 14px;
  text-align: center;
  font-weight: 700;

  &:hover {
    text-decoration: underline;
  }
`;