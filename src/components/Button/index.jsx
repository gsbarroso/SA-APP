import React from 'react';
import * as S from './styles';

const Button = ({ children, onClick, disabled = false }) => {
  return (
    <S.StyledButton onClick={onClick} disabled={disabled}>
      {children}
    </S.StyledButton>
  );
};

export default Button;