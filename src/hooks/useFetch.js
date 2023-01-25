import { useState, useEffect } from "react";

export const useFetch = (baseUrl, initialType) => {
  const [userInfo, setUserInfo] = useState([]);
  const fetchUrl = (type) => {
    fetch(`${baseUrl}/${type}`)
      .then((res) => res.json())
      .then((res) => setUserInfo(res));
  };
  useEffect(() => {
    fetchUrl(initialType);
  }, []);
  return { userInfo, fetchUrl };
};
