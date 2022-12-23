import { useState, useEffect } from "react";
import { api } from "../../services/";

import * as Screen from "../../styles/Screen";
import * as S from "./style";
import { GiPodium as Podium } from "react-icons/gi";
import CardUrl from "../../components/Main/CardRanking";
import { loadingPage } from "../../assets/Spinners";

export default function Home() {
  const [update, setUpdate] = useState(false);
  const [ranking, setRanking] = useState();

  useEffect(() => {
    api
      .get("/ranking")
      .then((res) => {
        setRanking(res.data);
      })
      .catch((err) => alert(err.response.data.message));
  }, [update]);

  if (!ranking) {
    return (
      <Screen.Container>
        <S.Top>
          <h1>Ranking </h1>
          <Podium />
        </S.Top>
        {loadingPage}
      </Screen.Container>
    );
  }
  console.log(ranking);

  return (
    <Screen.Container>
      <S.Top>
        <h1>Ranking </h1>
        <Podium />
      </S.Top>
      <S.List>
        <S.ListHeader>
          <S.Position>#</S.Position>
          <S.Name>User</S.Name>
          <S.Links># Links</S.Links>
          <S.Views># Views</S.Views>
        </S.ListHeader>
        {ranking.map((object, index) => (
          <CardUrl object={object} key={index} position={index} />
        ))}
      </S.List>
    </Screen.Container>
  );
}
