import * as S from "./style";
import * as Screen from "../../styles/Screen";
import { HiTrash as TrashIcon } from "react-icons/hi";
import CardUser from "../../components/Main/CardUser";
import { useAuth } from "../../providers";
import { loadingPage } from "../../assets/Spinners";
import Unauthorized from "../../components/Main/Unauthorized";
import Empty from "../../components/Main/Empty";
import { useEffect, useState } from "react";
import { api } from "../../services";

export default function Metrics() {
  const { userAuth } = useAuth();
  const [userData, setUserData] = useState();
  const [update, setUpdate] = useState();

  useEffect(() => {
    api
      .get(`users/me`, userAuth)
      .then((res) => {
        setUserData(res.data);
      })
      .catch((err) => console.log(err.response.data));
  }, [update]);

  if (!userAuth) {
    return <Unauthorized />;
  }

  if (!userData) {
    return (
      <Screen.Container>
        <h1>My links</h1>
        {loadingPage}
      </Screen.Container>
    );
  }

  if (userData.shortenedUrls.length === 0) {
    return <Empty />;
  }

  return (
    <Screen.Container>
      <h1>My links</h1>
      <S.List>
        <S.ListHeader>
          <S.BigUrl>Original link</S.BigUrl>
          <S.ShortUrl>Short</S.ShortUrl>
          <S.Views>Views</S.Views>
          <S.Delete>
            <TrashIcon />
          </S.Delete>
        </S.ListHeader>
        {userData.shortenedUrls.map((urlObject, i) => (
          <CardUser
            setUpdate={setUpdate}
            update={update}
            urlObject={urlObject}
            key={i}
          />
        ))}
      </S.List>
    </Screen.Container>
  );
}
