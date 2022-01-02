import {
  AboutMe,
  Contact,
  Content,
  Name,
  Picture,
  Wrapper,
  Mail,
  MailContent,
} from "./styled";
import mail from "../../svg/mail.svg";
import { ThemeToggle } from "./ThemeToggle";
import { Span } from "../Span";

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
        <Contact href="mailto:przemyslaw.przybylak2@gmail.com">
          <Mail src={mail} />
          <MailContent>Hire Me</MailContent>
        </Contact>
      </AboutMe>
    </Wrapper>
  );
};
