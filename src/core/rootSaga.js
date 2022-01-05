import { all } from "@redux-saga/core/effects";
import { watchSaveThemeInLocalStorage } from "../features/header/toggler/state/themeSaga";
import { watchRepositories } from "../features/RepoTiles/state/RepositoriesSaga";

export default function* rootSaga() {
  yield all([watchSaveThemeInLocalStorage(), watchRepositories()]);
}
