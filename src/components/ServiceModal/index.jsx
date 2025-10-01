import React from 'react';
import { format } from 'date-fns';
import Button from '../Button';
import * as S from './styles';

const ServiceModal = ({ service, onClose, onConfirm }) => {
  if (!service) {
    return null;
  }

  return (
    <S.ModalOverlay onClick={onClose}>
      <S.ModalContent onClick={(e) => e.stopPropagation()}>
        <S.ModalHeader>Confirmar Reserva</S.ModalHeader>
        <S.ServiceDetails>
          <p><strong>Serviço:</strong> {service.name}</p>
          <p><strong>Data:</strong> {format(service.dateTime, 'dd/MM/yyyy')}</p>
          <p><strong>Horário:</strong> {format(service.dateTime, 'HH:mm')}</p>
          <p><strong>Instrutor:</strong> {service.instructor}</p>
        </S.ServiceDetails>
        <S.ModalActions>
          <Button onClick={onClose} >Cancelar</Button>
          <Button onClick={() => onConfirm(service)}>Confirmar</Button>
        </S.ModalActions>
      </S.ModalContent>
    </S.ModalOverlay>
  );
};

export default ServiceModal;