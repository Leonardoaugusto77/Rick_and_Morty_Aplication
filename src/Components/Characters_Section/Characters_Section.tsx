import { useState } from "react";
import {
  Character_Card,
  Title_Section_Card,
  Wrapper_Charactres,
  Character_CardsContainer,
} from "../../assets/Styles/Charactres_Styles/Charactres.styles";
import Card_Info from "../Card_Info/Card_info";

interface CharactersSectionProps {
  characters: any[];
}

export default function Characters_Section({
  characters,
}: CharactersSectionProps): JSX.Element {
  const [selectedCharacter, setSelectedCharacter] = useState(null);

  const firstSixCharacters = characters.slice(0, 9);

  const handleCharacterClick = (character: any) => {
    setSelectedCharacter(character);
  };

  return (
    <Wrapper_Charactres>
      <Title_Section_Card>Meet the characters</Title_Section_Card>

      <Character_CardsContainer>
        {firstSixCharacters.map((character) => (
          <CharacterCard
            key={character.id}
            character={character}
            onClick={() => handleCharacterClick(character)}
          />
        ))}
      </Character_CardsContainer>

      {selectedCharacter && (
        <Card_Info
          character={selectedCharacter}
          onClose={() => setSelectedCharacter(null)}
        />
      )}
    </Wrapper_Charactres>
  );
}

interface CharacterCardProps {
  character: {
    id: number;
    image: string;
  };
  onClick: () => void;
}

function CharacterCard({
  character,
  onClick,
}: CharacterCardProps): JSX.Element {
  return (
    <Character_Card onClick={onClick}>
      <img
        src={character.image}
        alt={`Character ${character.id}`}
        width="200px"
      />
    </Character_Card>
  );
}
