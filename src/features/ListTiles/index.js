import {
  Caption,
  Element,
  Wrapper,
  List,
  Bullet,
  ListItemText,
} from "./styled";

export const ListTiles = ({ skills, title }) => {
  return (
    <Wrapper>
      <Caption>{title}</Caption>
      <List>
        {skills.map((skill) => (
          <Element key={skill}>
            <Bullet />
            <ListItemText>{skill}</ListItemText>
          </Element>
        ))}
      </List>
    </Wrapper>
  );
};
