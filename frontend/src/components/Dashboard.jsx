import React, { useEffect } from "react";
import { useApiHandler } from "../hooks/useApiHandler";
import Loader from "./Loader";
import ProductCard from "./ProductCard";
import { useSelector, useDispatch } from "react-redux";
import { setProduct } from "../slice/ProductSlice"

const Dashboard = () => {

  const { products } = useSelector((store) => store.product)
  const { data: apiData, loading } = useApiHandler("product", "get")
  const dispatch = useDispatch()

  useEffect(() => {
    if (products.length === 0 && Array.isArray(apiData)) {
      dispatch(setProduct(apiData))
    }
  }, [apiData, products.length, dispatch])

  return (
    <> {loading && <Loader />}
      {products.length > 0 &&

        <div>
          <div className="mx-auto max-w-xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-6xl lg:px-8">
            <h2 className="sr-only">Products</h2>

            <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 xl:gap-x-4">
              {products.map((product) => (

                <ProductCard
                  key={product._id}
                  title={product.title}
                  description={product.description}
                  price={product.price}
                  productImage={product.productImage}
                  _id={product._id}
                />

              ))}
            </div>
          </div>
        </div>
      }
    </>
  );
};

export default Dashboard;
