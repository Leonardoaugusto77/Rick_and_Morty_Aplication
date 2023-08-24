import { FaSearch } from "react-icons/fa";
import { styled } from "styled-components";

const mobileMedia = "@media (max-width: 390px), (max-width: 414px)";
const largeMedia = "@media (min-width: 768px) and (max-width: 1025px)";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 300px;
  border: 3px solid #000;
  background: #fff;

  ${mobileMedia} {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 429px;

    img {
      width: 380px;
    }

    @media (max-width: 320px) {
      height: 418px;

      img {
        width: 325px;
      }
    }

    ${largeMedia} {
      width: 100vh;
    }
  }

  ${largeMedia} {
    img {
      max-width: 100%; /* Evita que a imagem ultrapasse a largura da tela */
    }
  }
`;

export const Search_Section_Container = styled.div``;

export const InputAndIconContainer = styled.div`
  display: flex;
  align-items: center;
  width: 80%;
  position: relative;

  ${mobileMedia} {
    margin: auto;
  }
`;

export const Text_Section = styled.h1`
  text-align: left;
  width: 70vh;
  margin-bottom: 20px;

  ${mobileMedia} {
    /* Estilos para telas de 390px a 414px */
    margin-bottom: 20px;
    margin-top: 50px;
    text-align: center;
    font-size: 25px;
    width: 100%;
  }

  ${largeMedia} {
    font-size: 25px;
    width: 33vh;
  }
`;

export const Search_Input = styled.input`
  width: 100%;
  padding: 10px;
  border: 1px solid #000;
  border-radius: 5px;
`;

export const Search_icon = styled(FaSearch)`
  position: absolute;
  right: 0px;
  top: 50%;
  transform: translateY(-50%);
  height: 36px;
  border-radius: 5px;
  background: #000;
  color: #fff;
  font-size: 10px;
  cursor: pointer;
  width: 20%;

  &:hover {
    background-color: purple;
    transition: background-color 0.5s;
  }
`;
