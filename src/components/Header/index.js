import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../providers";
import Logo from "../../assets/Logo";
import * as S from "./style";
import SignedInCard from "./SignedIn";
import SignedOutCard from "./SignedOut";
import { AiOutlineTrophy as TrophyIcon } from "react-icons/ai";

export default function Header() {
  const { userAuth } = useAuth();
  return (
    <S.Container>
      <S.Inner>
        <Link to="/open">
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
            {userAuth ? <SignedInCard /> : <SignedOutCard />}
          </S.Profile>
        </S.Right>
      </S.Inner>
    </S.Container>
  );
}
