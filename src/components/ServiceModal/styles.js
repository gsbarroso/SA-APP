import styled from 'styled-components';

export const Overlay = styled.div`
  position: fixed;
  top: 0; left: 0; right: 0; bottom: 0;
  background-color: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

export const Content = styled.div`
  background: white;
  padding: 30px;
  border-radius: 12px;
  width: 90%;
  max-width: 500px;
  position: relative;
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 10px; right: 15px;
  background: none;
  border: none;
  font-size: 24px;
  cursor: pointer;
  color: #888;
`;

export const Details = styled.div`
  margin: 20px 0;
  padding: 15px;
  background-color: #f5f5f5;
  border-radius: 8px;
  line-height: 1.6;
`;

export const Actions = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 20px;
`;