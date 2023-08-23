import {
  Search_icon,
  Search_Section_Container,
  InputAndIconContainer,
  Search_Input,
  Text_Section,
  Wrapper,
} from "../../assets/Styles/Seach_Section_Styles/Seach_Section_Styles";

interface SearchSectionProps {
  Section_Img: string;
}

export default function Search_Section({
  Section_Img,
}: SearchSectionProps): JSX.Element {
  return (
    <>
      <Wrapper>
        <Search_Section_Container>
          <Text_Section>
            Meet the wonderful universe characters of rick and morty
          </Text_Section>

          <InputAndIconContainer>
            <Search_Input />
            <Search_icon />
          </InputAndIconContainer>
        </Search_Section_Container>
        <div
          style={{
            width: "50vh",
          }}
        >
          <img src={Section_Img} alt="Rick and Morty" width="430px" />
        </div>
      </Wrapper>
    </>
  );
}
