import { Button } from "../Button";
import { ErrorContent, ErrorPicture, ErrorTittle, Wrapper } from "./styled";

export const ErrorPage = () => {
  return (
    <Wrapper>
      <ErrorPicture />
      <ErrorTittle>Oooops Something went wrong...</ErrorTittle>
      <ErrorContent>
        Sorry, failed to load Github projects. <br /> You can check them
        directly on Github.
      </ErrorContent>
      <Button
        content={"Go to Github"}
        adres="https://github.com/Przemek-Przybylak"
      />
    </Wrapper>
  );
};
