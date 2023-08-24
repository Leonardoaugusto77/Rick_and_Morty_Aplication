import { useEffect } from "react";
import {
  Card_Backdrop,
  Card_Container,
  Card_Title,
  Card_Content,
  Card_CloseButton,
  Card_CharacterImage,
} from "../../assets/Styles/Card_info_Styles/Card_info_styles";

interface CardInfoProps {
  character: {
    name: string;
    episode: string[] | string;
    image: string;
    status: string;
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

  const handleEscKeyPress = (event: KeyboardEvent) => {
    if (event.key === "Escape") {
      onClose();
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", handleEscKeyPress);

    return () => {
      window.removeEventListener("keydown", handleEscKeyPress);
    };
  }, []);

  return (
    <Card_Backdrop>
      <Card_Container>
        <Card_CloseButton onClick={handleCardClose}>X</Card_CloseButton>
        <Card_Title>{character.name}</Card_Title>
        <p>Status: {character.status}</p>
        <Card_CharacterImage
          src={character.image}
          alt={`Imagem de ${character.name}`}
        />
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
