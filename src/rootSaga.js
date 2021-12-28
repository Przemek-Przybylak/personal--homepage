import { all } from "@redux-saga/core/effects";
import { watchSaveThemeInLocalStorage } from "./common/Header/ThemeToggle/themeSaga";

export default function* rootSaga() {
  yield all([watchSaveThemeInLocalStorage()]);
}
