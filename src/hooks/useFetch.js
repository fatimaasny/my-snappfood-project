import { useState, useEffect } from "react";

// useFetch    ---> useEffect

export function useFetch(apiFn, parser) {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState([]);
  const [error, setError] = useState();

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        // first way
        // const response = await apiFn();
        // setData(response);

        // second way
        const response = await apiFn();
        const parserData = await parser(response);
        setData(parserData);
      } catch (error) {
        setError("خطایی رخ داده است، مجددا تلاش کنید.");
      }
      setIsLoading(false);
    };
    fetchData();
  }, [apiFn]);

  return { isLoading, data, error };
}

// useFetch2    ---> sendData
export function useFetch2(apiFn, parser, initial) {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState([] || initial);
  const [error, setError] = useState();

  const fetchData = async (body, extra) => {
    setIsLoading(true);
    try {
      const response = await apiFn(body, extra);

      const parserData = await parser(response);

      setData(parserData);
      setError();
    } catch (error) {
      setError("خطایی رخ داده است، مجددا تلاش کنید.");
    }
    setIsLoading(false);
  };

  return { isLoading, data, error, fetchData, setData };
}
