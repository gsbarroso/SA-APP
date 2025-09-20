import React from 'react';
import Button from '../Button'; // Importamos o componente Button
import * as S from './styles';

const ServiceCard = ({ service, onReserveClick }) => {
  const isPast = service.status === 'past';
  const isFull = service.status === 'full';
  const isDisabled = isPast || isFull;

  const buttonText = () => {
    if (isPast) return 'Aula Finalizada';
    if (isFull) return 'Turma Cheia';
    return 'Reservar Aula';
  };
  
  return (
    // Passamos a prop $isDisabled (com $) para o styled-component
    <S.CardWrapper $isDisabled={isDisabled}>
      <S.Time>{service.time}</S.Time>
      <S.Name>{service.name}</S.Name>
      
      {service.instructor && (
        <S.InstructorInfo>
          <span>{service.instructor}</span>
        </S.InstructorInfo>
      )}
      {service.duration && <span>{service.duration} min</span>}

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