import React from 'react';
import * as S from './styles'; // Importamos os estilos como 'S'

// O componente agora fica super limpo, apenas com a lógica
const Button = ({ children, onClick, disabled = false }) => {
  return (
    <S.Button onClick={onClick} disabled={disabled}>
      {children}
    </S.Button>
  );
};

export default Button;