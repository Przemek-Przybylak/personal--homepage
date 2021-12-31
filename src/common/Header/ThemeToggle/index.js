import { useDispatch, useSelector } from "react-redux";
import { Toggler, Wrapper } from "./styled";
import { ReactComponent as DarkModeOn } from "../../../svg/DarkModeOn.svg";
import { ReactComponent as DarkModeOff } from "../../../svg/DarkModeOff.svg";
import { selectDarkTheme, toggleDarkTheme } from "./state/ThemeSlice";
import { Span } from "../styled";

export const ThemeToggle = () => {
  const dispatch = useDispatch();
  const darkTheme = useSelector(selectDarkTheme);

  return (
    <Wrapper>
      <Span toggler>{darkTheme ? "dark mode on" : "dark mode off"}</Span>
      <Toggler onClick={() => dispatch(toggleDarkTheme())}>
        {darkTheme ? <DarkModeOn /> : <DarkModeOff />}
      </Toggler>
    </Wrapper>
  );
};
