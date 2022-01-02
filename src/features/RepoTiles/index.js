import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import {
  fetchRepositories,
  selectRepositories,
} from "./state/RepositoriesSlice";
import {
  Description,
  Header,
  Link,
  LinksWrapper,
  LinkWrapper,
  ProjectTile,
  Wrapper,
} from "./styled";

export const RepoTiles = () => {
  const dispatch = useDispatch();
  const repositories = useSelector(selectRepositories);

  useEffect(() => {
    dispatch(fetchRepositories());
  }, []);
  return (
    <Wrapper>
      {repositories.map(({ id, name, description, html_url }) => (
        <ProjectTile key={id}>
          <Header>{name}</Header>
          <Description>{description}</Description>
          <LinksWrapper>
            <LinkWrapper>
              DEMO:
              <Link
                target="_blank"
                rel="noreferrer"
                href={`https://przemek-przybylak.github.io/${name}/`}
              >
                {`https://przemek-przybylak.github.io/${name}/`}
              </Link>
            </LinkWrapper>
            <LinkWrapper>
              Code:
              <Link target="_blank" rel="noreferrer" href={html_url}>
                {html_url}
              </Link>
            </LinkWrapper>
          </LinksWrapper>
        </ProjectTile>
      ))}
    </Wrapper>
  );
};