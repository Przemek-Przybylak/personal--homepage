import styled, { css } from "styled-components";

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
