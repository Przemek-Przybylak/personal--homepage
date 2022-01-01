import styled from "styled-components";
import { ReactComponent as GitHub } from "../../svg/github.svg";
import { ReactComponent as Facebook } from "../../svg/Facebook.svg";
import { ReactComponent as LinkedIN } from "../../svg/LinkedIN.svg";

export const Wrapper = styled.footer`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 24px;
  margin: 0;
  padding: 0;
  color: ${({ theme }) => theme.colors.secondFont};
`;

export const Mail = styled.a`
  font-weight: 900;
  font-size: 32px;
  line-height: 39px;
  margin: 0;

  @media (max-width: ${({ theme }) => theme.breakPoints.mobileMax}px) {
    font-size: 18px;
    line-height: 22px;
  }
`;
export const Content = styled.p`
  max-width: 670px;
  font-weight: 400;
  font-size: 18px;
  line-height: 25px;
  margin: 0;

  @media (max-width: ${({ theme }) => theme.breakPoints.mobileMax}px) {
    font-size: 14px;
    line-height: 17px;
    width: 100%;
  }
`;

export const SocialWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 24px;
  margin: 0;

  @media (max-width: ${({ theme }) => theme.breakPoints.mobileMax}px) {
    gap: 16px;
  }
`;

export const SocialItem = styled.a`
  width: 48px;
  height: 48px;
  margin: 0;

  @media (max-width: ${({ theme }) => theme.breakPoints.mobileMax}px) {
    width: 32px;
    height: 32px;
  }
`;

export const GitHubLogo = styled(GitHub)`
  fill: ${({ theme }) => theme.colors.secondFont};
`;

export const FacebookLogo = styled(Facebook)`
  fill: ${({ theme }) => theme.colors.secondFont};
`;

export const LinkedInLogo = styled(LinkedIN)`
  fill: ${({ theme }) => theme.colors.secondFont};
`;
