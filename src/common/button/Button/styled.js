import styled from "styled-components";
import { ReactComponent as MailIcon } from "../svg/mail.svg";

export const Contact = styled.a`
  max-width: 168px;
  max-height: 49px;
  border-radius: 4px;
  padding: 12px 16px;
  border: 1px solid ${({ theme }) => theme.colors.mainBlue};
  background-color: ${({ theme }) => theme.colors.mainBlue};
  color: ${({ theme }) => theme.colors.white};
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;

  &:hover {
    filter: brightness(1.3);
  }

  @media (max-width: ${({ theme }) => theme.breakPoints.mobileMax}px) {
    max-width: 138px;
    max-height: 46px;
    margin-top: 8px;
  }
`;

export const Mail = styled(MailIcon)`
  margin-right: 16px;
`;

export const MailContent = styled.span`
  font-weight: 600;
  font-size: 20px;
  line-height: 26px;
  line-break: none;

  @media (max-width: ${({ theme }) => theme.breakPoints.mobileMax}px) {
    font-size: 18px;
    line-height: 22px;
  }
`;
