import { useSelector } from "react-redux";
import { ThemeProvider } from "styled-components";
import { Container } from "./common/Container";
import { Header } from "./common/Header";
import { selectDarkTheme } from "./common/Header/ThemeToggle/ThemeSlice";
import { GlobalStyles } from "./GlobalStyles";
import { darkTheme, lightTheme } from "./theme";

function App() {
  const darkThemeOn = useSelector(selectDarkTheme);

  return (
    <div className="App">
      <ThemeProvider theme={darkThemeOn ? darkTheme : lightTheme}>
        <GlobalStyles />
        <Container>
          <Header />
        </Container>
      </ThemeProvider>
    </div>
  );
}

export default App;
