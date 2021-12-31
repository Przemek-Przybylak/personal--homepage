import { takeEvery, call, select } from "redux-saga/effects";
import { saveThemeInLocalStorage } from "./themeLocalStorage";
import { selectDarkTheme } from "./ThemeSlice";

function* saveThemeInLocalStorageHandler() {
  const darkTheme = yield select(selectDarkTheme);
  yield call(saveThemeInLocalStorage, darkTheme);
}

export function* watchSaveThemeInLocalStorage() {
  yield takeEvery("*", saveThemeInLocalStorageHandler);
}
