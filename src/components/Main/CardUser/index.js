import * as S from "./style";
import { HiTrash as TrashIcon } from "react-icons/hi";
import { api } from "../../../services";
import { useAuth } from "../../../providers";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function CardUser({ urlObject, setUpdate, update }) {
  const { id, shortUrl, url, visitCount } = urlObject;
  const { userAuth } = useAuth();
  
  const navigate = useNavigate();
  
  function remove(id) {
    const answer = window.confirm("Do you want to delete this link?");
    if (answer) {
      api
        .delete(`/urls/${id}`, userAuth)
        .then((res) => {
          setUpdate(!update);
          navigate("/metrics");
        })
        .catch((err) => console.log(err.response.data));
    }
  }

  return (
    <S.Container>
      <S.BigUrl>
        <a href={url}>{url}</a>
      </S.BigUrl>
      <S.ShortUrl>{shortUrl}</S.ShortUrl>
      <S.Views>{visitCount}</S.Views>
      <S.Delete>
        <TrashIcon onClick={() => remove(id)} />
      </S.Delete>
    </S.Container>
  );
}
