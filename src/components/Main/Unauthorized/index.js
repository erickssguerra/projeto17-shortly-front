import * as Screen from "../../../styles/Screen";
import { ImEyeBlocked as UnauthIcon } from "react-icons/im";
import { Link } from "react-router-dom";
import * as S from "./style";

export default function Unauthorized() {
  return (
    <Screen.Container>
      <S.Container>
        <h1>Unauthorized</h1>
        <UnauthIcon />
        <p>
          <b>
            <Link to="/signin">Sign in</Link>
          </b>{" "}
          to access this page!
        </p>
      </S.Container>
    </Screen.Container>
  );
}
