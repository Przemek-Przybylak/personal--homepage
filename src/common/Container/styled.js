import styled from "styled-components";

export const Wrapper = styled.main`
  max-width: 1216px;
  margin: auto;
  background-color: ${({ theme }) => theme.colors.background};

  @media (max-width: ${({ theme }) => theme.breakPoints.mobileMax}px) {
    margin: 14px;
  }
`;
