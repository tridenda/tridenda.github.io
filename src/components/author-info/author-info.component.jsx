import authorPhotoUrl from "../../assets/tridenda.png";
import Button from "../button/button.component";
import {
  AuthorInfoContainer,
  TextContainer,
  NameText,
  RolesText,
  DescriptionText,
  CustomLine,
  ButtonContainer,
} from "./author-info.styles";

const AuthorInfo = () => {
  return (
    <AuthorInfoContainer>
      <img src={authorPhotoUrl} alt="Author face" />
      <TextContainer>
        <NameText>TRI DENDA</NameText>
        <RolesText>WEB DEVELOPER & ACTIVIST</RolesText>
        <CustomLine />
        <DescriptionText>
          I use JavaScipt as the primary language to build front-end and
          back-end websites also mobile applications. For me, programming
          languages are just tools to help me to solve real problems. Also, I
          raise awareness of porn’s negative effects and help addicts to free
          themselves from porn addiction.
        </DescriptionText>
        <ButtonContainer>
          <Button>Resume</Button>
          <Button>Know more</Button>
        </ButtonContainer>
      </TextContainer>
    </AuthorInfoContainer>
  );
};

export default AuthorInfo;
