import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import themeReducer from "./common/Header/ThemeToggle/state/ThemeSlice";
import rootSaga from "./rootSaga";
import repositoriesReducer from "./features/RepoTiles/state/RepositoriesSlice";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    theme: themeReducer,
    repositories: repositoriesReducer,
  },
  middleware: [sagaMiddleware],
});

sagaMiddleware.run(rootSaga);

export default store;
