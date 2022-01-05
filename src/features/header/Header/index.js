import { AboutMe, Content, Name, Picture, Wrapper } from "./styled";
import { ThemeToggle } from "../toggler/ThemeToggle";
import { Span } from "../../../common/Span";
import { Button } from "../../../common/button/Button";

export const Header = () => {
  return (
    <Wrapper>
      <Picture  />
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
