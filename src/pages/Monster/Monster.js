import React, { useEffect, useState } from "react";
import Card from "./components/Card/Card";
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
  const [newInfo, handleInfo, initInfo] = useInput(initialInfo);
  const [userInfo] = useFetch("https://jsonplaceholder.typicode.com/users");
  const [clickedCardId, setClickedCardId] = useState(0);

  const { name, email, company, city } = newInfo;
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
    <Container>
      <Title>MONSTER</Title>
      <SearchWrap>
        {INPUT_LIST.map((list) => {
          return (
            <SearchInput
              key={list}
              name={list}
              placeholder={list}
              value={newInfo[list]}
              onChange={handleInfo}
            />
          );
        })}
        <CreateBtn className="createBtn" onClick={createUserInfo}>
          New
        </CreateBtn>
      </SearchWrap>
      <CardWrap>
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
      </CardWrap>
    </Container>
  );
};

export default Monster;

const INPUT_LIST = ["name", "email", "company", "city"];

const Container = styled.section`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 20px;
  height: 100vh;
`;

const Title = styled.h1`
  margin: 20px 0;
  font-size: 40px;
  font-weight: 900;
`;

const SearchWrap = styled.div`
  display: flex;
  gap: 20px;
`;

const SearchInput = styled.input`
  padding: 5px;
  border: 1px solid lightgray;
  border-radius: 5px;
  outline: none;
`;

const CreateBtn = styled.button`
  padding: 5px;
  width: 100px;
  border-radius: 5px;
  background-color: skyblue;
  color: white;
  cursor: pointer;
`;

const CardWrap = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 40px;
  margin-top: 40px;
`;
