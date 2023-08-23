import styled from "styled-components";

export const Card_Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7); /* Fundo escuro com transparência */
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999; /* Garante que o card apareça acima de outros elementos */
`;

export const Card_Container = styled.div`
  background-color: white;
  width: 500px;
  height: auto;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5); /* Sombra */
  position: relative;
  text-align: center;
`;

export const Card_CharacterImage = styled.img`
  width: 200px; // Defina a largura desejada para a imagem
  height: auto; // A altura será ajustada automaticamente para manter a proporção
  cursor: pointer; // Adicione um cursor de ponteiro para indicar que é clicável

  // Adicione estilos adicionais conforme necessário
`;

export const Card_Title = styled.h1`
  font-size: 24px;
  margin-bottom: 10px;
`;

export const Card_Episode = styled.p`
  font-size: 16px;
  margin-bottom: 10px;
`;

export const Card_Content = styled.p`
  font-size: 16px;
`;

export const Card_CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  font-size: 24px;
  cursor: pointer;
`;
