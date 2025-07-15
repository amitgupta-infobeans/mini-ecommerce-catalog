import React from "react";
import { Link } from "react-router-dom";
const ProductCard = ({ title, productImage, price, _id }) => {
  return (

    <Link  to={`/product-details/${_id}`} key={_id} className="group">
      <img
        alt="Product-Image"
        src={productImage}
        className="aspect-square w-full rounded-lg bg-gray-200 object-cover group-hover:opacity-75 xl:aspect-7/8"
      />
      <h3 className="mt-4 text-sm ">{title}</h3>
      <p className="mt-1 text-lg font-medium ">{price}</p>
    </Link>

  );
};

export default ProductCard;
