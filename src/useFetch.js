import React, { useState, useContext, useEffect } from 'react';
// make sure to use https
const API_ENDPOINT = `https://www.omdbapi.com/?apikey=${process.env.REACT_APP_MOVIE_API_KEY}`;

const useFetch = (urlParams) => {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState({ show: false, msg: '' });
  const [data, setData] = useState([]);

  const fetchMovies = async (url) => {
    setIsLoading(true);
    try {
      const res = await fetch(url);
      const data = await res.json();

      //API has Response property and that property always doesn't returns True
      if (data.Response === 'True') {
        console.log(data);
        setData(data.Search || data);
        setIsError({ show: false, msg: '' });
      } else {
        setIsError({ show: true, msg: data.Error });
      }
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchMovies(`${API_ENDPOINT}${urlParams}`);
  }, [urlParams]);

  return { isLoading, isError, data };
};

export default useFetch;
