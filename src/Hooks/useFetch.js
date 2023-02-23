import { useState, useEffect } from 'react';

export default function useFetch(url) {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch(url)
      .then(res => {
        return res.json();
      })
      .then(data => {
        setData(data);
      });
  }, [url]);

  return data;
}

// import { useState, useEffect } from 'react';

// const useFetch = url => {
//   const [data, setData] = useState({});
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState('');

//   const fetchResult = async () => {
//     try {
//       const response = await fetch(url);
//       const json = await response.json();
//       setData(json);
//     } catch (e) {
//       setError(e);
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchResult();
//   }, [url]);

//   return { loading: loading, data: data, error: error };
// };

// export default useFetch;
