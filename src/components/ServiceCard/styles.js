import styled, { css } from 'styled-components';

export const CardWrapper = styled.div`
  background-color: #fff;
  border: 1px solid #eee;
  border-radius: 12px;
  padding: 20px;
  text-align: left;
  display: flex;
  flex-direction: column;
  gap: 12px;
  box-shadow: 0 4px 8px rgba(0,0,0,0.05);

  ${(props) => props.$isDisabled && css`
    background-color: #f9f9f9;
    color: #aaa;
    
    h3, span {
      color: #ccc;
    }
  `}
`;

export const Time = styled.span`
  font-weight: bold;
  font-size: 18px;
  color: #333;
`;

export const Name = styled.h3`
  margin: 0;
  font-size: 20px;
  font-weight: bold;
`;

export const InstructorInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 14px;
  color: #666;
`;

export const InstructorIcon = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: #ddd; // Placeholder for an actual icon or image
`;

export const DurationInfo = styled.span`
  font-size: 14px;
  color: #666;
`;

export const CardActions = styled.div`
  margin-top: auto;
  padding-top: 16px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const InfoLink = styled.a`
  color: #8A2BE2;
  text-decoration: none;
  font-size: 14px;
  text-align: center;

  &:hover {
    text-decoration: underline;
  }
`;