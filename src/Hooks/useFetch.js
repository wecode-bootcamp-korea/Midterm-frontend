import { useEffect, useState } from "react";

const useFetch = (api) =>{
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch(api)
          .then((res) => res.json())
          .then((data) => setData(data));
      }, [api]);

      return data; //
};
//useEffect 가 지금 하는 일은 뭔가의 데이터를 저장하는 일 setDataApi 이것을 부모에서 하는 것이 아닌 여기서 받아줌
//리턴을 어떤 dataApi라고 하는 State를 리턴
//데이터 fetch을 했는데 useFetch라고하는 커스텀훅으로 데이터를 가져와서 dataApi에 담아서 보내줌
export default useFetch;