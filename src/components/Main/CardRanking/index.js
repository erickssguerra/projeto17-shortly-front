import * as S from "./style";

export default function CardUrl({ position, object }) {
const {name, linksCount, visitCount} = object

  return (
    <S.Container>
      <S.Position>{position + 1}</S.Position>
      <S.Name>{name}</S.Name>
      <S.Links>{linksCount}</S.Links>
      <S.Views>{visitCount}</S.Views>
    </S.Container>
  );
}
