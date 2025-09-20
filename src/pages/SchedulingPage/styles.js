import styled, { css } from 'styled-components';

export const PageWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
`;

export const CalendarStrip = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 10px;
  margin-bottom: 30px;
  padding: 10px;
  background-color: white;
  border-radius: 12px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.05);
`;

export const DayItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 10px;
  min-width: 60px;
  border: 1px solid #ddd;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: #f0f0f0;
  }

  ${(props) => props.$isActive && css`
    background-color: #8A2BE2;
    color: white;
    border-color: #8A2BE2;
    &:hover {
      background-color: #7B1FA2;
    }
  `}
`;

export const DayLabel = styled.span`
  font-size: 12px;
  font-weight: bold;
`;

export const DayValue = styled.span`
  font-size: 18px;
`;

export const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 20px;
`;