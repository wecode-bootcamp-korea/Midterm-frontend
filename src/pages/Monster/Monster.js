import React, { useState } from "react";
import Card from "./components/Card/Card";
import useInput from "../../hooks/useInput";
import useFetch from "../../hooks/useFetch";
import styled from "styled-components";
import "./Monster.scss";

const initialInfo = {
  name: "",
  email: "",
  company: "",
  city: "",
};

const Monster = () => {
  const [newUserInfo, setNewUserInfo] = useState([]);
  const [clickedCardId, setClickedCardId] = useState(0);

  const [newInfo, initInfo, handleInput] = useInput(initialInfo);
  const { name, email, company, city } = newInfo;

  const [userInfo] = useFetch("https://jsonplaceholder.typicode.com/users");

  const nextUserId = userInfo.length + newUserInfo.length + 1;
  const isUserInfoValid = name && email && company && city;

  const createUserInfo = () => {
    if (isUserInfoValid) {
      setNewUserInfo((prev) => [...prev, { ...newInfo, id: nextUserId }]);
      initInfo();
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
            <InputColor
              key={list}
              className="searchInput"
              name={list}
              placeholder={list}
              value={newInfo[list]}
              onChange={handleInput}
            />
          );
        })}
        <BtnStyle onClick={createUserInfo}>New</BtnStyle>
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

const InputColor = styled.input`
  padding: 5px;
  border: 1px solid ${(props) => props.theme.yellow};
  border-radius: 5px;
  outline: none;
`;

const BtnStyle = styled.button`
  padding: 5px;
  width: 100px;
  border-radius: 5px;
  background-color: ${(props) => props.theme.yellow};
  color: white;
  cursor: pointer;
`;
