import React, { useEffect, useState } from "react";
import { useInput } from "../../hooks/useInput";
import Card from "./components/Card/Card";
import "./Monster.scss";

const initialInfo = {
  name: "",
  email: "",
  company: "",
  city: "",
};

const Monster = () => {
  const [userInfo, setUserInfo] = useState([]); // fetch 로 받아오는 정보 (배열)
  const [newUserInfo, setNewUserInfo] = useState([]); // input 으로 받아서 새로 추가되는 정보 (배열)

  const [clickedCardId, setClickedCardId] = useState(0);
  const [newInfo, saveNewInfo, inputState] = useInput(initialInfo); // useInput 의 [newInput, saveNewInput, inputReset] 을 [newInfo, saveNewInfo, inputState] 으로 받음 / 초기값 공백

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUserInfo(data));
  }, []);

  const { name, email, company, city } = newInfo;
  const nextUserId = userInfo.length + newUserInfo.length + 1;
  const isUserInfoValid = name && email && company && city;

  const createUserInfo = () => {
    if (isUserInfoValid) {
      setNewUserInfo((prev) => [...prev, { ...newInfo, id: nextUserId }]); // input 으로 입력 받은 newInfo 값 {name: '', email: '', company: '', city: '', id: ''} 을 newUserInfo (배열) 에 추가
      inputState(); // input 공백으로
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
              onChange={saveNewInfo}
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
