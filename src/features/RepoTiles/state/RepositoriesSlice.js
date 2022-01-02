import { createSlice } from "@reduxjs/toolkit";

const repositoriesSlice = createSlice({
  name: "repositories",
  initialState: {
    repositories: [],
    loading: true,
    error: false,
    status: "loading",
  },
  reducers: {
    fetchRepositories: (state) => {
      state.loading = true;
      state.error = false;
    },
    fetchRepositoriesSuccess: (state, { payload: repositories }) => {
      state.repositories = repositories;
      state.repositories.sort(
        (a, b) => new Date(b.created_at) - new Date(a.created_at)
      );
      state.loading = false;
      state.error = false;
    },
    fetchRepositoriesError: (state) => {
      state.loading = false;
      state.error = true;
    },

    setApplicationStatus: (state, { payload }) => {
      state.status = payload;
    },
  },
});

export const {
  fetchRepositories,
  fetchRepositoriesSuccess,
  fetchRepositoriesError,
  setApplicationStatus,
} = repositoriesSlice.actions;

export const selectRepositories = (state) => state.repositories.repositories;
export const selectError = (state) => state.repositories.error;
export const selectLoading = (state) => state.repositories.loading;
export const selectStatus = (state) => state.repositories.status;

export default repositoriesSlice.reducer;
