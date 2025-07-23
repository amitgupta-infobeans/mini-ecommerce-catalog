import { useEffect, useState, useMemo } from "react";

export const useFetch = (url) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const getData = async () => {
    try {
      setLoading(true);
      await new Promise((res) =>
        setTimeout(() => res("getting data..."), 1000)
      );
      await fetch(url)
        .then((res) => res.json())
        .then((data) => setData(data.posts));
      console.log("Get Data by useMemo hook calling........");
    } catch (e) {
      setLoading(false);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, [url]);


  const memoizedData = useMemo(() => {
    return data.map((item) => ({
      ...item,
      title: item.title.toUpperCase(),
    }));
  }, [data]);

  return { loading, data: memoizedData };
};
