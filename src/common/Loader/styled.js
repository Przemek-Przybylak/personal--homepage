import styled from "styled-components";
import { ReactComponent as spinner } from "../../svg/spinner.svg";

export const Wrapper = styled.section`
  margin: 80px auto 140px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

export const LoadingText = styled.span`
  font-weight: 400;
  font-size: 20px;
  line-height: 28px;
  text-align: center;
  color: ${({ theme }) => theme.colors.secondFont};

  @media (max-width: ${({ theme }) => theme.breakPoints.mobileMax}px) {
  }
`;

export const Spinner = styled(spinner)`
  width: 160px;
  height: 160px;
  animation: spin 0.5s linear infinite;

  @keyframes spin {
    100% {
      transform: rotate(360deg);
    }
  }
`;
