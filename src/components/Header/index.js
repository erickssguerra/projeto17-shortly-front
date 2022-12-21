import Logo from "../../assets/Logo";
import * as S from "./style";
import LoggedInCard from "./LoggedInCard";
import LoggedOutCard from "./LoggedOutCard";
import { AiOutlineTrophy as TrophyIcon } from "react-icons/ai";
import { AiFillHome as HomeIcon } from "react-icons/ai";

export default function Header() {
  return (
    <S.Container>
      <S.Left>
        <Logo />
        Shortly
      </S.Left>
      <S.Right>
        <S.Menu>
          <TrophyIcon />
          <HomeIcon />
        </S.Menu>
        <S.Profile>
          {/* <LoggedInCard /> */}
          <LoggedOutCard />
        </S.Profile>
      </S.Right>
    </S.Container>
  );
}
