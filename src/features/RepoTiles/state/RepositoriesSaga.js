import { call, delay, put, takeLatest } from "redux-saga/effects";
import { fetchRepositoriesFromApi } from "../fetchRepositoriesFromApi";
import {
  fetchRepositoriesError,
  fetchRepositoriesSuccess,
  fetchRepositories,
} from "./RepositoriesSlice";

function* fetchRepositoriesHandler() {
  try {
    const repositories = yield call(fetchRepositoriesFromApi);
    yield delay(500);
    console.log(repositories);
    yield put(fetchRepositoriesSuccess(repositories));
  } catch (error) {
    yield put(fetchRepositoriesError());
  }
}

export function* watchRepositories() {
  yield takeLatest(fetchRepositories.type, fetchRepositoriesHandler);
}
