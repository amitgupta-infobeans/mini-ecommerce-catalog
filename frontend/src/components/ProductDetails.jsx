import React from "react";
import { useParams } from "react-router-dom";
import { useApiHandler } from "../hooks/useApiHandler";
import Loader from "./Loader";

const ProductDetails = () => {
    const { id } = useParams();
    const { data, loading } = useApiHandler(`product/${id}`);

    return (
        <>{loading && <Loader />}
            {data.length > 0 && (
                <div className="w-full flex items-center justify-center p-4">
                    <div className="bg-white border border-gray-200 shadow-sm dark:bg-gray-800 dark:border-gray-700 flex flex-row max-w-4xl w-full">
                        {/* Left: Image */}
                        <div className="flex flex-col md:flex-row max-w-4xl w-full">
                            <img
                                className="w-full h-full object-cover"
                                src={data[0].productImage}
                                alt="Thumbnail"
                            />
                        </div>

                        {/* Right: Text content */}
                        <div className="w-1/2 p-6 flex flex-col justify-center">
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                {data[0].title}
                            </h5>
                            <p className="text-lg text-green-600 dark:text-green-400 font-semibold mb-4">
                                Rs {data[0].price}
                            </p>
                            <p className="text-gray-700 dark:text-gray-400">
                                {data[0].description}
                            </p>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default ProductDetails;
