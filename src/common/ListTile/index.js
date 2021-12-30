import {
  Caption,
  Element,
  SkillsList,
  Wrapper,
  List,
  Bullet,
  ListItemText,
} from "./styled";

export const ListTile = ({ skills, title }) => {
  console.log(skills);
  return (
    <Wrapper>
      <Caption>{title}</Caption>
      <List>
        {skills.map((skill) => (
          <Element key={skill.id}>
            <Bullet />
            <ListItemText>{skill}</ListItemText>
          </Element>
        ))}
      </List>
    </Wrapper>
  );
};
