import * as Screen from "../../styles/Screen";
import * as S from "./style";
import { GiPodium as Podium } from "react-icons/gi";
import CardUrl from "../../components/Main/CardRanking";

export default function Home() {
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
        <CardUrl/>
        <CardUrl/>
        <CardUrl/>
        <CardUrl/>
      </S.List>
    </Screen.Container>
  );
}
