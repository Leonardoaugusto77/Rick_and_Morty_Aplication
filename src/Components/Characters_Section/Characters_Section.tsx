import {
  Character_Card,
  Title_Section_Card,
  Wrapper_Charactres,
  Character_CardsContainer,
} from "../../assets/Styles/Charactres_Styles/Charactres.styles";

interface CharactersSectionProps {
  characters: any[];
}

export default function Characters_Section({
  characters,
}: CharactersSectionProps): JSX.Element {
  const firstSixCharacters = characters.slice(0, 6);

  return (
    <Wrapper_Charactres>
      <Title_Section_Card>The most charismatic</Title_Section_Card>

      <Character_CardsContainer>
        {firstSixCharacters.map((character) => (
          <CharacterCard
            key={character.id}
            id={character.id}
            image={character.image}
          />
        ))}
      </Character_CardsContainer>
    </Wrapper_Charactres>
  );
}

interface CharacterCardProps {
  id: number;
  image: string;
}

function CharacterCard({ id, image }: CharacterCardProps): JSX.Element {
  return (
    <Character_Card>
      <img src={image} alt={`Character ${id}`} width="200px" />
    </Character_Card>
  );
}
