import * as S from "./style";
import { HiTrash as TrashIcon } from "react-icons/hi";

export default function CardUser() {
  return (
    <S.Container>
      <S.BigUrl><a>http://www.google.com?q=2312313123</a></S.BigUrl>
      <S.ShortUrl>2e)2g2</S.ShortUrl>
      <S.Views>123</S.Views>
      <S.Delete>
        <TrashIcon />
      </S.Delete>
    </S.Container>
  );
}
