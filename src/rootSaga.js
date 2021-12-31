import { all } from "@redux-saga/core/effects";
import { watchSaveThemeInLocalStorage } from "./common/Header/ThemeToggle/state/themeSaga";

export default function* rootSaga() {
  yield all([watchSaveThemeInLocalStorage()]);
}
