import axios from "axios";
import { useState } from "react";

export const useApiCall = () => {
  const [loading, setLoading] = useState(false);

  const callApi = async (url, method, data = {}, delay = 400) => {
    try {
      setLoading(true);

      await new Promise((resovle) => setTimeout(resovle, delay))
      const response = await axios({
        method,
        url,
        data,
        withCredentials: true,
      });
      return { success: true, message: response?.data?.message, data: response?.data?.data };
    } catch (e) {
      setLoading(false);
      if (e?.response?.data?.error?.length) {
        let validationErrors = e.response.data.error
          .map((err) => err.msg)
          .join(",");
        let err = `${e.response.data.message}:\n ${validationErrors}`;

        return { success: false, message: err, data: [] };
      } else {
        return {
          success: false,
          message: e?.response?.data?.message,
          data: []
        };
      }
    } finally {
      setLoading(false);
    }
  };

  return [loading, callApi];
};
