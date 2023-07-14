import React, { useEffect, useState } from "react";
import Card from "./components/Card/Card";
import "./Monster.scss";
import useInput from "../../hooks/useInput";
import useFetch from "../../hooks/useFetch";

const initialInfo = {
  name: "",
  email: "",
  company: "",
  city: "",
};

const Monster = () => {
  const [newUserInfo, setNewUserInfo] = useState([]);
  const [clickedCardId, setClickedCardId] = useState(0);
  const [initValue, handleInput, newInfo] = useInput(initialInfo);
  const userInfo = useFetch("https://jsonplaceholder.typicode.com/users");

  const { name, email, company, city } = newInfo;
  const nextUserId = userInfo.length + newUserInfo.length + 1;
  const isUserInfoValid = name && email && company && city;

  const createUserInfo = () => {
    if (isUserInfoValid) {
      setNewUserInfo((prev) => [...prev, { ...newInfo, id: nextUserId }]);
      initValue();
    } else {
      alert("내용을 모두 채워주세요");
    }
  };

  return (
    <section className="container">
      <h1 className="title">MONSTER</h1>
      <div className="searchWrap">
        {INPUT_LIST.map((list) => {
          return (
            <input
              key={list}
              className="searchInput"
              name={list}
              placeholder={list}
              value={newInfo[list]}
              onChange={handleInput}
            />
          );
        })}
        <button className="createBtn" onClick={createUserInfo}>
          New
        </button>
      </div>
      <div className="cardWrap">
        {userInfo.map((info) => {
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
      </div>
    </section>
  );
};

export default Monster;

const INPUT_LIST = ["name", "email", "company", "city"];
