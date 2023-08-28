import { useState, useEffect } from "react";
import {
  Search_icon,
  Search_Section_Container,
  InputAndIconContainer,
  Search_Input,
  Text_Section,
  Wrapper,
} from "../../assets/Styles/Seach_Section_Styles/Seach_Section_Styles";
import Card_Info from "../Card_Info/Card_info";

interface SearchSectionProps {
  Section_Img: string;
}

export default function Search_Section({
  Section_Img,
}: SearchSectionProps): JSX.Element {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCharacter, setSelectedCharacter] = useState(null);

  const handleSearch = async () => {
    if (searchTerm.trim() === "") {
      window.alert("Digite um personagem válido");
      return;
    }

    try {
      const response = await fetch(
        `https://rickandmortyapi.com/api/character/?name=${searchTerm}`
      );
      const data = await response.json();

      if (data.results && data.results.length > 0) {
        setSelectedCharacter(data.results[0]);
      } else {
        setSelectedCharacter(null);
      }
    } catch (error) {
      console.error("Erro ao buscar personagem:", error);
      setSelectedCharacter(null);
    } finally {
      setSearchTerm("");
    }
  };

  const handleCloseCard = () => {
    setSelectedCharacter(null);
  };

  const handleEnterKeyPress = (
    event: React.KeyboardEvent<HTMLInputElement>
  ) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };

  useEffect(() => {
    const handleEscKeyPress = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        handleCloseCard();
      }
    };

    window.addEventListener("keydown", handleEscKeyPress);

    return () => {
      window.removeEventListener("keydown", handleEscKeyPress);
    };
  }, []);

  return (
    <>
      <Wrapper>
        <Search_Section_Container>
          <Text_Section>
            Meet the wonderful universe characters of Rick and Morty
          </Text_Section>

          <InputAndIconContainer>
            <Search_Input
              type="text"
              placeholder="Search character by name"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              onKeyPress={handleEnterKeyPress}
            />
            <Search_icon onClick={handleSearch} />
          </InputAndIconContainer>
        </Search_Section_Container>
        <div>
          <img src={Section_Img} alt="Rick and Morty" width="435px" />
        </div>
      </Wrapper>

      {selectedCharacter && (
        <Card_Info character={selectedCharacter} onClose={handleCloseCard} />
      )}
    </>
  );
}
