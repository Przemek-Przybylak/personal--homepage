import { LoadingText, Spinner, Wrapper } from "./styled";

export const Loader = () => {
  return (
    <Wrapper>
      <LoadingText>Please, wait projects are being loaded...</LoadingText>
      <Spinner />
    </Wrapper>
  );
};
