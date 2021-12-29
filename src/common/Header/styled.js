import styled, { css } from "styled-components";

export const Wrapper = styled.header`
  margin-top: 119px;
  display: grid;
  gap: 66px;
  grid-template-rows: 32px 1fr;
  grid-template-areas: "photo themeToggler" "photo personalInfo";

  @media (max-width: ${({ theme }) => theme.breakPoints.mobileMax}px) {
    gap: 12px;
    grid-template-rows: auto auto 1fr;
    grid-template-areas: "photo themeToggler" "personalInfo personalInfo";
  }
`;

export const Picture = styled.img`
  grid-area: photo / photo / photo / photo;
  width: 384px;
  height: 384px;
  background-color: black;

  @media (max-width: ${({ theme }) => theme.breakPoints.mobileMax}px) {
    height: 132px;
    width: 132px;
  }
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

  ${({ toggler }) => toggler && css``}
  @media (max-width: ${({ theme }) => theme.breakPoints.mobileMax}px) {
    display: none;
  }
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

  @media (max-width: ${({ theme }) => theme.breakPoints.mobileMax}px) {
    font-size: 22px;
  }
`;

export const Content = styled.article`
  font-weight: 400;
  font-style: normal;
  font-size: 20px;
  line-height: 28px;
  letter-spacing: 5%;
  color: ${({ theme }) => theme.colors.mainFont};

  @media (max-width: ${({ theme }) => theme.breakPoints.mobileMax}px) {
    font-size: 17px;
    margin: 16px 0px;
  }
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

  @media (max-width: ${({ theme }) => theme.breakPoints.mobileMax}px) {
    max-width: 138px;
    max-height: 46px;
    margin-top: 8px;
  }
`;

export const Mail = styled.img``;
