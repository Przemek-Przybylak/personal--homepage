import styled from "styled-components";

export const Wrapper = styled.main`
  max-width: 1216px;
  margin: auto;
  background-color: inherit;

  @media (max-width: ${({ theme }) => theme.breakPoints.mobileMax}px) {
    margin: 14px;
  }
`;
