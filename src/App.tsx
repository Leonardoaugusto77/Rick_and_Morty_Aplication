import { useEffect, useState } from "react";
import { RequestAPI } from "./Services/RequestAPI";
import Search_Section from "./Components/Seacrch_Section/Search_Section";
import Characters_Section from "./Components/Characters_Section/Characters_Section";
import Img from "../public/Imgs/Rick_and_Morty.png";

export default function App(): JSX.Element {
  const [characters, setCharacters] = useState<any[]>([]);

  useEffect(() => {
    RequestAPI()
      .then((data) => {
        setCharacters(data.results);
      })
      .catch((error) => {
        console.error("Erro ao buscar personagens:", error);
      });
  }, []);

  return (
    <>
      <Search_Section Section_Img={Img} />
      <Characters_Section characters={characters} />{" "}
    </>
  );
}
