import { useSelector } from "react-redux";
import { ThemeProvider } from "styled-components";
import { Container } from "../../common/Container";
import { Header } from "../header/Header";
import { selectDarkTheme } from "../header/toggler/state/ThemeSlice";
import { ListTiles } from "../listTiles/ListTiles";
import { GlobalStyles } from "./GlobalStyles";
import { Projects } from "../Projects";
import { skills, title } from "../listTiles/skillsTables/currentSkills";
import { futureSkills, futureSkillsTitle } from "../listTiles/skillsTables/futureSkills";
import { darkTheme, lightTheme } from "../../core/theme";
import { RepoTiles } from "../RepoTiles";
import { Footer } from "../footer/Footer";

function App() {
  const darkThemeOn = useSelector(selectDarkTheme);

  return (
    <div className="App">
      <ThemeProvider theme={darkThemeOn ? darkTheme : lightTheme}>
        <GlobalStyles />
        <Container>
          <Header />
          <ListTiles skills={skills} title={title} />
          <ListTiles skills={futureSkills} title={futureSkillsTitle} />
          <Projects />
          <RepoTiles />
          <Footer />
        </Container>
      </ThemeProvider>
    </div>
  );
}

export default App;
