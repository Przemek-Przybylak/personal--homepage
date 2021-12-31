import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import {
  fetchRepositories,
  selectRepositories,
} from "./state/RepositoriesSlice";

export const RepoTiles = () => {
  const dispatch = useDispatch();

  const repositories = useSelector(selectRepositories);

  useEffect(() => {
    dispatch(fetchRepositories());
  }, []);
  return <>nanan</>;
};
