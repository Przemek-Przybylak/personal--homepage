import { createSlice } from "@reduxjs/toolkit";

const repositoriesSlice = createSlice({
  name: "repositories",
  initialState: {
    repositories: [],
    loading: true,
    error: false,
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
  },
});

export const {
  fetchRepositories,
  fetchRepositoriesSuccess,
  fetchRepositoriesError,
} = repositoriesSlice.actions;

export const selectRepositories = (state) => state.repositories.repositories;
export const selectError = (state) => state.repositories.error;
export const selectLoading = (state) => state.repositories.loading;

export default repositoriesSlice.reducer;
