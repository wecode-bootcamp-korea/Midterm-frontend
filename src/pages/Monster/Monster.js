import React, { useState } from "react";
import Card from "./components/Card/Card";
import { useInput } from "../../hooks/useInput";
import { useFetch } from "../../hooks/useFetch";
import * as M from "./Monster.styles";
// import "./Monster.scss";

const initialInfo = {
  name: "",
  email: "",
  company: "",
  city: "",
};

const Monster = () => {
  const baseUrl = "https://jsonplaceholder.typicode.com";

  const [newUserInfo, setNewUserInfo] = useState([]);
  const [clickedCardId, setClickedCardId] = useState(0);
  const info = useInput(initialInfo);
  const data = useFetch(baseUrl, "users");

  const nextUserId = data.userInfo.length + newUserInfo.length + 1;

  const createUserInfo = () => {
    if (info.isUserInfoValid) {
      setNewUserInfo((prev) => [...prev, { ...info.newInfo, id: nextUserId }]);
      info.emptyInput(initialInfo);
    } else {
      alert("내용을 모두 채워주세요");
    }
  };

  return (
    <M.Container>
      <M.Title className="title">MONSTER</M.Title>
      <M.SearchWrap className="searchWrap">
        {INPUT_LIST.map((list) => {
          return (
            <input
              key={list}
              className="searchInput"
              name={list}
              placeholder={list}
              value={info.newInfo[list]}
              onChange={info.handleInput}
            />
          );
        })}
        <button className="createBtn" onClick={createUserInfo}>
          New
        </button>
      </M.SearchWrap>
      <M.CardWrap className="cardWrap">
        {data.userInfo.map((info) => {
          return (
            <Card
              key={info.id}
              clickedCardId={clickedCardId}
              setClickedCardId={setClickedCardId}
              {...info}
            />
          );
        })}
        {newUserInfo.map((info) => {
          return (
            <Card
              key={info.id}
              clickedCardId={clickedCardId}
              setClickedCardId={setClickedCardId}
              {...info}
            />
          );
        })}
      </M.CardWrap>
    </M.Container>
  );
};

export default Monster;

const INPUT_LIST = ["name", "email", "company", "city"];
