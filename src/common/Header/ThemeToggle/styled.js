import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  max-width: 500px;
  grid-area: themeToggler / themeToggler / themeToggler / personalInfo;

  @media (max-width: ${({ theme }) => theme.breakPoints.mobileMax}px) {
    align-items: flex-start;
    justify-content: flex-end;
  }
`;

export const Toggler = styled.button`
  border: none;
  background-color: inherit;
  margin-left: 6px;
`;
