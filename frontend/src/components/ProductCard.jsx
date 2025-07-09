import React from "react";

const ProductCard = ({title, productImage, price, _id, description}) => {
  return (
    <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-2">
      <div className="bg-white border border-gray-200 shadow-sm dark:bg-gray-800 dark:border-gray-700 flex flex-col h-full">
        <a href="#">
          <img
            className="w-full h-40 object-fill"
            src={productImage}
            alt="Thumbnail"
          />
        </a>

        <div className="p-4 flex flex-col flex-grow">
          <a href="#">
            <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white line-clamp-2">
              {title}
            </h5>
          </a>

          <p className="mb-3 text-sm text-gray-700 dark:text-gray-400 line-clamp-3">
            {description}
          </p>

          <div className="mt-auto">
            <a
              href="#"
              className="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-black hover:bg-gray-900 focus:ring-2 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 rounded"
            >
              Read more..
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
