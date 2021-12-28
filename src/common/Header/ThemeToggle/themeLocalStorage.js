const localStorageKey = "darkTheme";

export const saveThemeInLocalStorage = (darkTheme) =>
  localStorage.setItem(localStorageKey, JSON.stringify(darkTheme));

export const getThemefromLocalStorage = () =>
  JSON.parse(localStorage.getItem(localStorageKey)) || null;
