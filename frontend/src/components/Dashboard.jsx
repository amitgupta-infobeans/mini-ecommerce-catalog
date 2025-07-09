import React, { useEffect, useRef, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { useApiCall } from "../hooks/useApiCall";
import ProductCard from "./ProductCard";

const Dashboard = () => {
  const [loading, callApi] = useApiCall();
  const [products, setProducts] = useState([]);
  const hasFetched = useRef(false);

  const handleData = async (e) => {
    try {
      const baseURL = `${import.meta.env.VITE_API_URL}/product`;
      const { success, error, message, data } = await callApi(
        baseURL,
        "GET",
        {}
      );
      if (success) {
        setProducts(data);
      }
      if (error) {
        error && toast.error(message);
      }
    } catch (e) {
      toast.error(e);
    }
  };

  useEffect(() => {
    if (!hasFetched.current) {
      hasFetched.current = true;
      handleData();
    }
  }, []);
  return (
    <div className="p-2 flex flex-wrap ">
      {/* Card */}
      <ToastContainer position="top-center" autoClose={5000} theme="light" />
      {products.length &&
        products.map((product) => {
          return (
            <ProductCard
              key={product._id}
              title={product.title}
              description={product.description}
              price={product.price}
              productImage={product.productImage}
              _id={product._id}
            />
          );
        })}
    </div>
  );
};

export default Dashboard;
