import {
  AboutMe,
  Contact,
  Content,
  Name,
  Picture,
  Span,
  Wrapper,
  Mail,
} from "./styled";
import mail from "../../svg/mail.svg";
import { ThemeToggle } from "./ThemeToggle";

export const Header = () => {
  return (
    <Wrapper>
      <Picture />
      <ThemeToggle />
      <AboutMe>
        <Span>this is</Span>
        <Name>przemek przybylak</Name>
        <Content>
          🚨 Are you looking for a future React Master? 👨🏻‍💻 <br />
          Great😉 See what I have prepared for you!
        </Content>
        <Contact>
          <Mail src={mail} />
          Hire Me
        </Contact>
      </AboutMe>
    </Wrapper>
  );
};
