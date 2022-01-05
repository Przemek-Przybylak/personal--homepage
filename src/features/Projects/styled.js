import styled from "styled-components";
import { ReactComponent as GitHub } from "../footer/svg/github.svg";

export const Wrapper = styled.div`
  margin: 72px auto 0;
  display: flex;
  justify-content: center;
  flex-direction: column;
  color: ${({ theme }) => theme.colors.secondFont};

  @media (max-width: ${({ theme }) => theme.breakPoints.mobileMax}px) {
    margin-top: 0;
  }
`;

export const Logo = styled(GitHub)`
  fill: ${({ theme }) => theme.colors.mainBlue};
  width: 40px;
  height: 40px;
  margin: 0px auto 5px;
`;

export const Header = styled.h2`
  margin: 8px auto;
  font-size: 30px;
  font-weight: 900;
  line-height: 36.31px;
  text-transform: capitalize;
`;

export const Content = styled.p`
  font-weight: 400;
  font-size: 20px;
  line-height: 28px;
  margin: 0 auto;

  @media (max-width: ${({ theme }) => theme.breakPoints.mobileMax}px) {
    margin-top: 8px;
  }
`;
