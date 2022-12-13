import React, { useEffect, useState } from "react";
import "./Monster.scss";

const initialNewInfo = {
  name: "",
  email: "",
  company: "",
  city: "",
};

const Monster = () => {
  const [userInfo, setUserInfo] = useState([]);
  const [newUserInfo, setNewUserInfo] = useState([]);
  const [newInfo, setNewInfo] = useState(initialNewInfo);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUserInfo(data));
  }, []);

  const { name, email, company, city } = newInfo;
  const nextUserId = userInfo.length + newUserInfo.length + 1;
  const isUserInfoValid = name && email && company && city;

  const handleInput = ({ target }) => {
    const { name, value } = target;
    setNewInfo((prev) => ({ ...prev, [name]: value }));
  };

  const createUserInfo = () => {
    if (isUserInfoValid) {
      setNewUserInfo((prev) => [...prev, { ...newInfo, id: nextUserId }]);
      setNewInfo(initialNewInfo);
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
            <div key={info.id} className="cardBox">
              <img
                className="cardImage"
                src={`https://robohash.org/${info.id}?set=set1&size=180x180`}
                alt="monstert"
              />
              <span className="cardName">{info.name}</span>
              <span>{info.email}</span>
              <span>{info.company.name}</span>
              <span>{info.address.city}</span>
            </div>
          );
        })}
        {newUserInfo.map((info) => {
          return (
            <div key={info.id} className="cardBox">
              <img
                className="cardImage"
                src={`https://robohash.org/${info.id}?set=set1&size=180x180`}
                alt="monstert"
              />
              <span className="cardName">{info.name}</span>
              <span>{info.email}</span>
              <span>{info.company}</span>
              <span>{info.city}</span>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Monster;

const INPUT_LIST = ["name", "email", "company", "city"];
