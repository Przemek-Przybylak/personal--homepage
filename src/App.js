import { useSelector } from "react-redux";
import { ThemeProvider } from "styled-components";
import { Container } from "./common/Container";
import { Header } from "./common/Header";
import { selectDarkTheme } from "./common/Header/ThemeToggle/state/ThemeSlice";
import { ListTiles } from "./features/ListTiles";
import { GlobalStyles } from "./GlobalStyles";
import { Projects } from "./common/Projects";
import { skills, title } from "./skillsTables/currentSkills";
import { futureSkills, futureSkillsTitle } from "./skillsTables/futureSkills";
import { darkTheme, lightTheme } from "./theme";
import { RepoTiles } from "./features/RepoTiles";

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
        </Container>
      </ThemeProvider>
    </div>
  );
}

export default App;
