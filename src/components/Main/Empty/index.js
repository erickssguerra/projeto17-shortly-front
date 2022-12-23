import * as Screen from "../../../styles/Screen";
import { TbMoodEmpty as SadIcon } from "react-icons/tb";
import { Link } from "react-router-dom";
import * as S from "./style";

export default function Empty() {
  return (
    <Screen.Container>
      <S.Container>
        <h1>You don't have short links yet!</h1>
        <SadIcon />
        <p>
          <b>
            <Link to="/new">Click here</Link>{" "}
          </b>{" "}
          to create a short link!
        </p>
      </S.Container>
    </Screen.Container>
  );
}
