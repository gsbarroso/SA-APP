import React from 'react';
import { format } from 'date-fns';
import Button from '../Button';
import * as S from './styles';

const ServiceCard = ({ service, onReserveClick }) => {
  // VERIFICAÇÃO DE SEGURANÇA: Se o 'service' for nulo, não renderiza nada.
  // Isto resolve o erro "can't access property 'dateTime'".
  if (!service) {
    return null;
  }

  const isPast = new Date() > service.dateTime;
  const isFull = service.status === 'full';
  const isDisabled = isPast || isFull;

  const buttonText = () => {
    if (isPast) return 'Aula Finalizada';
    if (isFull) return 'Turma Cheia';
    return 'Reservar Aula';
  };
  
  return (
    <S.CardWrapper $isDisabled={isDisabled}>
      <S.CardHeader>
        <S.Time>{format(service.dateTime, 'HH:mm')}</S.Time>
        <S.Name>{service.name}</S.Name>
      </S.CardHeader>

      <S.CardActions>
        <Button 
          onClick={() => onReserveClick(service)} 
          disabled={isDisabled}
        >
          {buttonText()}
        </Button>
        <S.InfoLink href="#">Ver informações</S.InfoLink>
      </S.CardActions>
    </S.CardWrapper>
  );
};

export default ServiceCard;