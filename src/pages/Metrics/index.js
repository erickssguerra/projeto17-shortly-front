import * as S from "./style";
import * as Screen from "../../styles/Screen"
import { HiTrash as TrashIcon } from "react-icons/hi";
import CardUser from "../../components/Main/CardUser";

export default function Metrics() {
  return (
    <Screen.Container>
      <h1>My links</h1>
      <S.List>
        <S.ListHeader>
          <S.BigUrl>Original</S.BigUrl>
          <S.ShortUrl>Short</S.ShortUrl>
          <S.Views>Views</S.Views>
          <S.Delete>
            <TrashIcon />
          </S.Delete>
        </S.ListHeader>
      <CardUser/>
      <CardUser/>
      <CardUser/>
      </S.List>
    </Screen.Container>
  );
}
