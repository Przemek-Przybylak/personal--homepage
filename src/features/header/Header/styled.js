import styled from "styled-components";
import CVPicture from "../pictrures/CVPicture.jpg";

export const Wrapper = styled.header`
  margin-top: 20px;
  display: grid;
  gap: 66px;
  grid-template-rows: 32px 1fr;
  grid-template-columns: auto 1fr;
  grid-template-areas: "photo themeToggler" "photo personalInfo";
  margin-bottom: 73px;

  @media (max-width: ${({ theme }) => theme.breakPoints.mobileMax}px) {
    margin-bottom: 48px;
    margin-top: 21px;
    gap: 12px;
    grid-template-rows: auto auto 1fr;
    grid-template-areas: "photo themeToggler" "personalInfo personalInfo";
  }
`;

export const Picture = styled.img`
  grid-area: photo / photo / photo / photo;
  width: 400px;
  height: 400px;
  background-image: url("${CVPicture}");
  background-repeat: no-repeat;
  background-size: cover;
  border: 1px solid ${({theme}) => theme.colors.background};;
  border-radius: 50%;

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

  @media (max-width: ${({ theme }) => theme.breakPoints.mobileMax}px) {
    align-items: stretch;
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
    width: 100%;
  }
`;
