import * as S from "./style";
import * as Screen from "../../styles/Screen";
import { HiTrash as TrashIcon } from "react-icons/hi";
import CardUser from "../../components/Main/CardUser";
import { useAuth } from "../../providers";
import { loadingPage } from "../../assets/Spinners";
import Unauthorized from "../../components/Main/Unauthorized";
import Empty from "../../components/Main/Empty";
import { useEffect } from "react";

export default function Metrics() {
  const { userData, userAuth } = useAuth();
  useEffect(() => {}, [userData]);
  if (!userAuth) {
    return <Unauthorized />;
  }

  if (!userData) {
    return <Screen.Container>{loadingPage}</Screen.Container>;
  }

  if (userData.shortenedUrls.length === 0) {
    return <Empty />;
  }

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
        {userData.shortenedUrls.map((urlObject, i) => (
          <CardUser urlObject={urlObject} key={i} />
        ))}
      </S.List>
    </Screen.Container>
  );
}
