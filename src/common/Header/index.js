import { AboutMe, Content, Name, Picture, Wrapper } from "./styled";
import { ThemeToggle } from "./ThemeToggle";
import { Span } from "../Span";
import { Button } from "../Button";

export const Header = () => {
  return (
    <Wrapper>
      <Picture href="../../pictures/CVPicture.jpg" />
      <ThemeToggle />
      <AboutMe>
        <Span>this is</Span>
        <Name>przemek przybylak</Name>
        <Content>
          🚨 Are you looking for a future React Master? 👨🏻‍💻 <br />
          Great😉 See what I have prepared for you!
        </Content>
        <Button
          adres={"mailto:przemyslaw.przybylak2@gmail.com"}
          content={"Hire ME"}
          ismail
        />
      </AboutMe>
    </Wrapper>
  );
};
