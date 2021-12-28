import styled from "styled-components";

export const Wrapper = styled.header`
  margin-top: 119px;
  display: grid;
  gap: 66px;
  grid-template-rows: 32px 1fr;
  grid-template-areas: "photo themeToggler" "photo personalInfo";
`;

export const Picture = styled.img`
  grid-area: photo / photo / photo / photo;
  width: 384px;
  height: 384px;
  background-color: black;
`;

export const AboutMe = styled.article`
  grid-area: personalInfo / personalInfo / personalInfo / personalInfo;
`;
