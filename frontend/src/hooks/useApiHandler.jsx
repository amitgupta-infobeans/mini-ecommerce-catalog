import React, { useEffect, useRef, useState } from "react";
import { useApiCall } from "../hooks/useApiCall";

export const useApiHandler = (endpoint, method, dataToSend = {}) => {

  const [loading, callApi] = useApiCall();
  const [data, setData] = useState([]);
  const hasFetched = useRef(false);
  const [message, setMessage] = useState("")

  const handleData = async (e) => {
    try {
      const baseURL = `${import.meta.env.VITE_API_URL}/${endpoint}`;
      const { success, message, data } = await callApi(
        baseURL,
        method,
        dataToSend
      );
      if (success) {
        setData(data);
        setMessage(message);
      } else {
        setMessage(message)
      }
    } catch (e) {
      setMessage(e);
    }
  };

  useEffect(() => {
    if (!hasFetched.current) {
      hasFetched.current = true;
      handleData();
    }
  }, []);

  return { message, data, loading }

}


