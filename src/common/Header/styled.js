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
  max-width: 633px;
  max-height: 247px;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
`;

export const Span = styled.span`
  font-style: normal;
  font-weight: bold;
  font-size: 12px;
  line-height: 15.6px;
  text-transform: uppercase;
  align-items: center;
  color: ${({ theme }) => theme.colors.mainFont};
`;

export const Name = styled.h1`
  margin: 0;
  font-weight: 900;
  font-size: 38px;
  line-height: 46px;
  letter-spacing: 5%;
  text-transform: capitalize;
  font-style: normal;
  color: ${({ theme }) => theme.colors.secondFont};
`;

export const Content = styled.article`
  font-weight: 400;
  font-style: normal;
  font-size: 20px;
  line-height: 28px;
  letter-spacing: 5%;
  color: ${({ theme }) => theme.colors.mainFont};
`;

export const Contact = styled.button`
  max-width: 154px;
  max-height: 49px;
  border-radius: 4px;
  padding: 12px 16px;
  border: 1px solid ${({ theme }) => theme.colors.mainBlue};
  background-color: ${({ theme }) => theme.colors.mainBlue};
  color: ${({ theme }) => theme.colors.white};
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

export const Mail = styled.img``;
