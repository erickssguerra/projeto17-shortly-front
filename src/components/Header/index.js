import Logo from "../../assets/Logo";
import * as S from "./style";
import SignedInCard from "./SignedIn";
import SignedOutCard from "./SignedOut";
import { AiOutlineTrophy as TrophyIcon } from "react-icons/ai";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <S.Container>
      <S.Inner>
        <Link to="/">
          <S.Left>
            <Logo />
            Shortly
          </S.Left>
        </Link>
        <S.Right>
          <S.Menu>
            <Link to="/">
              <TrophyIcon />
            </Link>
          </S.Menu>
          <S.Profile>
            <SignedInCard />
            {/* <SignedOutCard /> */}
          </S.Profile>
        </S.Right>
      </S.Inner>
    </S.Container>
  );
}
