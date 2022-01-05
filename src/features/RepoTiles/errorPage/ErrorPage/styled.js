import styled from "styled-components";
import { ReactComponent as Danger } from "../svg/Danger.svg";

export const Wrapper = styled.section`
  margin: 95px auto 140px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  height: 263px;
`;

export const ErrorPicture = styled(Danger)`
  width: 37px;
  height: 33px;
  margin: 0;
`;

export const ErrorTittle = styled.h4`
  font-weight: 700;
  font-size: 24px;
  line-height: 29px;
  margin: 0;
`;

export const ErrorContent = styled.p`
  font-weight: 400;
  font-size: 20px;
  line-height: 28px;
  text-align: center;
  margin: 0;
`;
