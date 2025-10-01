import styled, { css } from 'styled-components';

export const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

export const MainContent = styled.main`
  flex: 1;
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  padding: 20px;
`;

export const TopHeaderWrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 5%;
  background-color: white;
  border-bottom: 1px solid #eee;
`;

export const Logo = styled.div`
  font-weight: 900;
  font-size: 20px;
`;

export const UserProfile = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  img {
    width: 40px;
    height: 40px;
    border-radius: 50%;
  }
`;

export const HeaderNavWrapper = styled.div`
  background-color: white;
  padding: 10px 20px;
  border-radius: 12px;
  margin-bottom: 20px;
  border: 1px solid #eee;
`;

export const Navigation = styled.nav`
  display: flex;
  gap: 30px;
  a {
    display: flex;
    align-items: center;
    gap: 8px;
    text-decoration: none;
    color: #888;
    font-weight: 700;
    padding: 10px 0;
    border-bottom: 3px solid transparent;
    &.active {
      color: #333;
      border-bottom-color: #8A2BE2;
    }
  }
`;

export const UnitSelector = styled.div`
  background-color: #F3E6FF;
  padding: 20px;
  border-radius: 12px;
  margin-bottom: 20px;
  font-weight: 700;
`;

export const FilterBar = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
`;

export const FilterButton = styled.button`
  padding: 10px 15px;
  border: 1px solid #ddd;
  background-color: white;
  border-radius: 8px;
  cursor: pointer;
  font-weight: 700;
  color: #555;
`;

export const SearchWrapper = styled.div`
  flex-grow: 1;
  display: flex;
  align-items: center;
  background-color: white;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 0 10px;
  input {
    width: 100%;
    border: none;
    padding: 10px 5px;
    outline: none;
    font-weight: 700;
  }
`;

export const CalendarWrapper = styled.div`
  background-color: white;
  border-radius: 12px;
  padding: 15px;
  margin-bottom: 30px;
  border: 1px solid #eee;
`;

export const CalendarHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 15px;
  font-weight: 700;
  font-size: 16px;
  text-transform: capitalize;
  padding: 0 10px;
`;

export const MonthYearDisplay = styled.span`
  flex-grow: 1;
  text-align: center;
`;

export const ArrowButton = styled.button`
  background: transparent;
  border: 1px solid #ddd;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  font-size: 16px;
  cursor: pointer;
  color: #333;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const WeekDaysGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 10px;
`;

export const DayItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 10px;
  border-radius: 8px;
  cursor: pointer;
  border: 2px solid #F8F9FA;
  background-color: #F8F9FA;
  transition: all 0.2s ease-in-out;
  text-transform: uppercase;
  ${(props) => props.$isActive && css`
    border-color: #8A2BE2;
    background-color: white;
  `}
`;

export const DayNumber = styled.span`
  font-size: 22px;
  font-weight: 900;
`;

export const DayName = styled.span`
  font-size: 14px;
  font-weight: 700;
  color: #888;
`;

export const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 20px;
`;

export const NoServicesMessage = styled.p`
  text-align: center;
  font-size: 16px;
  color: #666;
  padding: 40px;
  background-color: white;
  border-radius: 12px;
  grid-column: 1 / -1;
`;

export const FooterWrapper = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 5%;
  background-color: white;
  border-top: 1px solid #eee;
  color: #888;
  font-weight: 700;
`;

export const CpeLogo = styled.div`
  font-weight: 900;
  border: 1px solid #ddd;
  padding: 5px 10px;
  border-radius: 4px;
`;