import { FaSearch } from "react-icons/fa";
import { styled } from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 300px;
  border: 3px solid #000;
  background: #fff;
`;

export const Search_Section_Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  width: 80%;
`;

export const InputAndIconContainer = styled.div`
  display: flex;
  align-items: center;
  width: 80%;
`;

export const Text_Section = styled.h1`
  text-align: left;
  width: 80%;
  margin-bottom: 20px;
`;

export const Search_Input = styled.input`
  width: 300px;
  height: 10px;
  padding: 10px;
  border: 1px solid #000;
  border-radius: 5px;
`;

export const Search_icon = styled(FaSearch)`
  width: 70px;
  position: fixed;
  left: 370px;
  height: 33px;
  border-radius: 5px;
  background: #000;
  color: #fff;
  font-size: 10px;

  &:hover {
    cursor: pointer;
    background-color: purple;
    transition: 2s;
  }
`;
