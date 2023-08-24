import { styled } from "styled-components";

export const Wrapper_Charactres = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 768px) {
    align-items: center;
  }
`;

export const Title_Section_Card = styled.h2`
  font-size: 25px;
  text-align: center;
  font-weight: bold;
  margin-top: 30px;
`;

export const Character_Card = styled.div`
  width: 200px;
  height: 200px;

  &:hover {
    cursor: pointer;
  }

  @media (max-width: 768px) {
    margin-bottom: 20px;
  }
`;

export const Character_CardsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;

  @media (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;
