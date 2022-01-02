import { call, delay, put, takeLatest } from "redux-saga/effects";
import { fetchRepositoriesFromApi } from "../fetchRepositoriesFromApi";
import {
  fetchRepositoriesSuccess,
  fetchRepositories,
  setApplicationStatus,
} from "./RepositoriesSlice";

function* fetchRepositoriesHandler() {
  try {
    delay(1000);
    const repositories = yield call(fetchRepositoriesFromApi);
    yield delay(500);
    yield put(fetchRepositoriesSuccess(repositories));
    yield put(setApplicationStatus("success"));
  } catch (error) {
    yield put(setApplicationStatus("error"));
  }
}

export function* watchRepositories() {
  yield takeLatest(fetchRepositories.type, fetchRepositoriesHandler);
}
