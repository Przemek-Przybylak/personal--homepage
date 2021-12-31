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
      <ProjectTile>
        <Header />
        <Description />
        <LinksWrapper>
          <LinkWrapper>
            DEMO:<Link></Link>
          </LinkWrapper>
          <LinkWrapper>
            Code:<Link></Link>
          </LinkWrapper>
        </LinksWrapper>
      </ProjectTile>
    </Wrapper>
  );
};
