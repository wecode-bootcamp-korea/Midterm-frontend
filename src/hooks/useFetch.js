import { useEffect, useState } from "react";
//fetch시 바뀌는 부분은 url.
//url을 props로 받아오기(의존성배열도 바뀌니까 url 넣어주기)
//state 명도 바꿔주자.
const useFetch = (url) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      });
  }, [url]);

  return data;
};

export default useFetch;
//data라는 상태값이 있고,
//api 주소를 url로 넘겨받아서 fetch하고
//응답받은 데이터를 setData 해주고 return
