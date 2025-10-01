import styled from 'styled-components';

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

export const ModalContent = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 12px;
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
  text-align: center;
  max-width: 400px;
  width: 90%;
`;

export const ModalHeader = styled.h2`
  margin-bottom: 16px;
  font-size: 24px;
`;

export const ServiceDetails = styled.div`
  margin-bottom: 24px;
  font-size: 16px;
  color: #666;
  
  p {
    margin: 4px 0;
  }
`;

export const ModalActions = styled.div`
  display: flex;
  justify-content: center;
  gap: 16px;
`;