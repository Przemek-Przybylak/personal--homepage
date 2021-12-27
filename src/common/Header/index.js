import { AboutMe, Picture, Wrapper } from "./styled";
import { ThemeToggle } from "./ThemeToggle";

export const Header = () => {
  return (
    <Wrapper>
      <Picture />
      <ThemeToggle />
      <AboutMe>
        lorem ipsum`
        lalalalalalalalalalalalalalalallalalalalalalalalalalalalalal
        lalalalalallalala lalalalalallala allalalalallala lalallalalalalal
        lalalalal alalalla aallalaa a aja ja ja ja ja jaj aj ja ja ja ja ja j a
      </AboutMe>
    </Wrapper>
  );
};
