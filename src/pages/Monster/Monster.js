import React, { useEffect, useState } from 'react';
import Card from './components/Card/Card';
import useFetch from '../../Hooks/useFetch';
import useInput from '../../Hooks/useInput';
import styled from 'styled-components';
import './Monster.scss';

const initialInfo = {
  name: '',
  email: '',
  company: '',
  city: '',
};

const Monster = () => {
  const [newUserInfo, setNewUserInfo] = useState([]);
  const [newInfo, setNewInfo] = useState(initialInfo);
  const [clickedCardId, setClickedCardId] = useState(0);

  const userInfo = useFetch('https://jsonplaceholder.typicode.com/users');
  const [form, onChange, reset] = useInput({
    name: '',
    email: '',
    company: '',
    city: '',
  });

  // useEffect(() => {
  //   fetch('https://jsonplaceholder.typicode.com/users')
  //     .then(res => res.json())
  //     .then(userInfo => setUserInfo(userInfo));
  // }, []);

  const { name, email, company, city } = newInfo;
  const nextUserId = userInfo.length + newUserInfo.length + 1;
  const isUserInfoValid = name && email && company && city;

  // const handleInput = ({ target }) => {
  //   const { name, value } = target;
  //   setNewInfo(prev => ({ ...prev, [name]: value }));
  // };

  const createUserInfo = () => {
    if (isUserInfoValid) {
      setNewUserInfo(prev => [...prev, { ...newInfo, id: nextUserId }]);
      setNewInfo(initialInfo);
    } else {
      alert('내용을 모두 채워주세요');
    }
  };

  return (
    <section className="container">
      <h1 className="title">MONSTER</h1>
      <div className="searchWrap">
        {INPUT_LIST.map(list => {
          return (
            <SearhInput
              key={list}
              className="searchInput"
              name={list}
              placeholder={list}
              value={newInfo[list]}
              onChange={onChange}
            />
          );
        })}
        <CreateBtn className="createBtn" onClick={createUserInfo}>
          New
        </CreateBtn>
      </div>
      <div className="cardWrap">
        {userInfo.map(info => {
          return (
            <Card
              key={info.id}
              clickedCardId={clickedCardId}
              setClickedCardId={setClickedCardId}
              {...info}
            />
          );
        })}
        {newUserInfo.map(info => {
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
  border: 1px solid ${props => props.theme.inputBorder};
  border-radius: 5px;
  outline: none;
`;

const CreateBtn = styled.button`
  padding: 5px;
  width: 100px;
  border-radius: 5px;
  background-color: ${props => props.theme.createButton};
  color: white;
  cursor: pointer;
`;

const INPUT_LIST = ['name', 'email', 'company', 'city'];
