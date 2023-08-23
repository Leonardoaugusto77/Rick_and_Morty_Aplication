import {
  Card_Backdrop,
  Card_Container,
  Card_Title,
  Card_Content,
  Card_Episode,
  Card_CloseButton,
  Card_CharacterImage, // Importe o componente Card_CharacterImage
} from "../../assets/Styles/Card_info_Styles/Card_info_styles";

interface CardInfoProps {
  character: {
    name: string;
    episode: string[];
    image: string; // Adicione a propriedade image
  };
  onClose: () => void;
}

export default function Card_Info({
  character,
  onClose,
}: CardInfoProps): JSX.Element {
  const handleCardClose = () => {
    onClose();
  };

  return (
    <Card_Backdrop>
      <Card_Container>
        <Card_CloseButton onClick={handleCardClose}>X</Card_CloseButton>
        <Card_CharacterImage>
          <img src={character.image} alt={`Imagem de ${character.name}`} />
        </Card_CharacterImage>
        <Card_Title>{character.name}</Card_Title>
        <Card_Episode>Primeiro episódio: {character.episode[0]}</Card_Episode>
        <Card_Content>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, saepe
          odit! Est cupiditate soluta, cumque laudantium dolor distinctio enim.
          Architecto dolores repellat error magni sit non possimus perferendis
          necessitatibus corrupti!
        </Card_Content>
      </Card_Container>
    </Card_Backdrop>
  );
}
