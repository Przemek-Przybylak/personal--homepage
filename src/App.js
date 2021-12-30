import { useSelector } from "react-redux";
import { ThemeProvider } from "styled-components";
import { Container } from "./common/Container";
import { Header } from "./common/Header";
import { selectDarkTheme } from "./common/Header/ThemeToggle/ThemeSlice";
import { ListTile } from "./common/ListTile";
import { GlobalStyles } from "./GlobalStyles";
import { skills, title } from "./skillsTables/currentSkills";
import { futureSkills, futureSkillsTitle } from "./skillsTables/futureSkills";
import { darkTheme, lightTheme } from "./theme";

function App() {
  const darkThemeOn = useSelector(selectDarkTheme);

  return (
    <div className="App">
      <ThemeProvider theme={darkThemeOn ? darkTheme : lightTheme}>
        <GlobalStyles />
        <Container>
          <Header />
          <ListTile skills={skills} title={title} />
          <ListTile skills={futureSkills} title={futureSkillsTitle} />
        </Container>
      </ThemeProvider>
    </div>
  );
}

export default App;
