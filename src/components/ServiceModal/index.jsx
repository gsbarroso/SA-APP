import React from 'react';
import Button from '../Button';
import * as S from './styles';

const ServiceModal = ({ service, onClose }) => {
  if (!service) {
    return null;
  }

  const handleContentClick = (e) => e.stopPropagation();

  return (
    <S.Overlay onClick={onClose}>
      <S.Content onClick={handleContentClick}>
        <S.CloseButton onClick={onClose}>&times;</S.CloseButton>
        <h2>Confirmar Reserva</h2>
        <p>Você está prestes a reservar a seguinte aula:</p>
        
        <S.Details>
          <strong>Aula:</strong> {service.name} <br />
          <strong>Horário:</strong> {service.time} <br />
          {service.instructor && <><strong>Instrutor(a):</strong> {service.instructor} <br /></>}
          <strong>Duração:</strong> {service.duration} minutos
        </S.Details>

        <S.Actions>
          <Button onClick={() => { 
            alert(`Aula "${service.name}" reservada com sucesso!`);
            onClose();
          }}>
            Confirmar
          </Button>
        </S.Actions>
      </S.Content>
    </S.Overlay>
  );
};

export default ServiceModal;