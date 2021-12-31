import styled from "styled-components";

export const Wrapper = styled.div`
  margin-bottom: 120px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  gap: 32px;
  letter-spacing: 5%;

  @media (max-width: ${({ theme }) => theme.breakPoints.mobileMax}px) {
    grid-template-columns: 1fr;
    grid-template-rows: auto;
    gap: 16px;
    margin-bottom: 48px;
  }
`;

export const ProjectTile = styled.article`
  padding: 56px;
  background-color: ${({ theme }) => theme.colors.tittleBackground};
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
`;

export const Header = styled.h3`
  font-weight: 700;
  font-size: 24px;
  line-height: 29px;
  color: ${({ theme }) => theme.colors.tileHeader};
  text-transform: capitalize;

  @media (max-width: ${({ theme }) => theme.breakPoints.mobileMax}px) {
    font-size: 16px;
    line-height: 19.36px;
  }
`;

export const Description = styled.p`
  font-weight: 400;
  font-size: 18px;
  line-height: 25px;
  color: ${({ theme }) => theme.colors.mainFont};

  @media (max-width: ${({ theme }) => theme.breakPoints.mobileMax}px) {
    font-size: 14px;
    line-height: 17px;
  }
`;

export const LinksWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const LinkWrapper = styled.p`
  font-weight: 400;
  font-size: 18px;
  line-height: 25px;
  color: ${({ theme }) => theme.colors.mainFont};

  @media (max-width: ${({ theme }) => theme.breakPoints.mobileMax}px) {
    font-size: 14px;
    line-height: 17px;
  }
`;

export const Link = styled.a`
  margin-left: 8px;
  color: ${({ theme }) => theme.colors.mainBlue};
  text-decoration: none;

  @media (max-width: ${({ theme }) => theme.breakPoints.mobileMax}px) {
    font-size: 14px;
    line-height: 17px;
  }
`;
