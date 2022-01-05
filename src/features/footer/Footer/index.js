import { Span } from "../../../common/Span";
import {
  Content,
  FacebookLogo,
  GitHubLogo,
  LinkedInLogo,
  Mail,
  SocialItem,
  SocialWrapper,
  Wrapper,
} from "./styled";

export const Footer = () => {
  return (
    <Wrapper>
      <Span>Let's talk!</Span>
      <Mail href="mailto:przemyslaw.przybylak2@gmail.com">
        przemyslaw.przybylak2@gmail.com
      </Mail>
      <Content>
        I’m always open to new projects whenever I have the time. If you have a
        website, dashboard or mobile app in mind and need some help to make your
        ideas come to life, feel free to conatct me 🤞
      </Content>
      <SocialWrapper>
        <SocialItem href="https://github.com/Przemek-Przybylak">
          <GitHubLogo />
        </SocialItem>
        <SocialItem href="https://www.facebook.com/Przemyslaw.Przybylak.1/">
          <FacebookLogo />
        </SocialItem>
        <SocialItem href="https://www.linkedin.com/in/przemys%C5%82aw-przybylak-255743142">
          <LinkedInLogo />
        </SocialItem>
      </SocialWrapper>
    </Wrapper>
  );
};
