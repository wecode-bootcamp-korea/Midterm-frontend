import React, { useEffect, useState } from "react";
import Card from "./components/Card/Card";
import useInput from "../../Hooks/useInput";
import "./Monster.scss";

const initialInfo = {
  name: "",
  email: "",
  company: "",
  city: "",
};

const Monster = () => {
  const [userInfo, setUserInfo] = useState([]);
  const [newUserInfo, setNewUserInfo] = useState([]);
  const [userData, handleData, initState] = useInput(initialInfo);
  const [clickedCardId, setClickedCardId] = useState(0);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUserInfo(data));
  }, []);

  const { name, email, company, city } = userData;
  const nextUserId = userInfo.length + newUserInfo.length + 1;
  const isUserInfoValid = name && email && company && city;


  const createUserInfo = () => {
    if (isUserInfoValid) {
      setNewUserInfo((prev) => [...prev, { ...userData, id: nextUserId }]);
      initState(initialInfo);
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
              value={userData[list]}
              onChange={handleData}
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
