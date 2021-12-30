import styled, { css } from "styled-components";

export const Wrapper = styled.section`
  margin: 0px auto 72px;
  padding: 32px;
  background-color: ${({ theme }) => theme.colors.tileBackground};
  letter-spacing: 5%;

  @media (max-width: ${({ theme }) => theme.breakPoints.mobileMax}px) {
    margin: 0px auto 50px;
    padding: 16px;
  }
`;

export const Caption = styled.h2`
  font-weight: 900;
  font-style: normal;
  font-size: 30px;
  line-height: 36.31px;
  padding-bottom: 15px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.tileBorder};
  color: ${({ theme }) => theme.colors.secondFont};

  ${({ future }) => future && css``}
  border-bottom: 1px solid ${({ theme }) => theme.colors.lightGrey};

  @media (max-width: ${({ theme }) => theme.breakPoints.mobileMax}px) {
    margin: 0;
    padding-bottom: 12px;
    margin-bottom: 12px;
    font-weight: 22px;
    font-size: 18px;
    line-height: 21.78px;
  }
`;

export const List = styled.li`
  margin-top: 32px;
  display: grid;
  padding: 0;
  grid-template-columns: repeat(3, 1fr);
  color: ${({ theme }) => theme.colors.mainFont};
  text-decoration-color: ${({ theme }) => theme.colors.mainBlue};

  @media (max-width: ${({ theme }) => theme.breakPoints.mobileMax}px) {
    grid-template-columns: 1fr;
    margin-top: 0;
  }
`;

export const Element = styled.ul`
  display: flex;
  justify-content: stretch;
  align-items: center;
  padding: 0;
  margin-bottom: 8px;

  @media (max-width: ${({ theme }) => theme.breakPoints.mobileMax}px) {
    margin: 4px 0;
  }
`;

export const Bullet = styled.div`
  width: 9px;
  height: 9px;
  margin-right: 16px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.mainBlue};

  @media (max-width: ${({ theme }) => theme.breakPoints.mobileMax}px) {
    width: 6px;
    height: 6px;
    margin-right: 8px;
  }
`;

export const ListItemText = styled.span`
  text-transform: capitalize;
  color: ${({ theme }) => theme.colors.mainFont};
  font-size: 400;
  font-size: 18px;
  line-height: 25.2px;
  padding: 0px;

  @media (max-width: ${({ theme }) => theme.breakPoints.mobileMax}px) {
    font-size: 14px;
    line-height: 17px;
  }
`;
