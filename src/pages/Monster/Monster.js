import React, { useEffect, useState } from "react";
import Card from "./components/Card/Card";
import "./Monster.scss";
import useInput from "../../hooks/useInput";
import useFetch from "../../hooks/useFetch";
import styled from "styled-components";

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
            <SearchInput
              key={list}
              name={list}
              placeholder={list}
              value={newInfo[list]}
              onChange={handleInput}
            />
          );
        })}
        <CreateBtn onClick={createUserInfo}>New</CreateBtn>
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

const SearchInput = styled.input`
  padding: 5px;
  border: 1px solid ${(props) => props.theme.inputBorder};
  border-radius: 5px;
  outline: none;
`;

const CreateBtn = styled.button`
  padding: 5px;
  width: 100px;
  border-radius: 5px;
  background-color: ${(props) => props.theme.createButton};
  color: white;
  cursor: pointer;
`;

const INPUT_LIST = ["name", "email", "company", "city"];
