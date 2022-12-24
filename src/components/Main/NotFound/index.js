import * as Screen from "../../../styles/Screen";
import * as S from "../Empty/style";
import { BiError as ErrorIcon } from "react-icons/bi";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <Screen.Container>
      <S.Container>
        <h1>Page not found</h1>
        <ErrorIcon />
        <p>
          <b>
            <Link to="/">Go to home page</Link>{" "}
          </b>
        </p>
      </S.Container>
    </Screen.Container>
  );
}
