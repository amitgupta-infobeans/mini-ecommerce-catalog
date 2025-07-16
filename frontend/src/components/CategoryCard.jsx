import React from 'react'
import { Link } from "react-router-dom";

const CategoryCard = ({ onecat }) => {
    const { catName, _id } = onecat
    return (
        <Link className="px-2 py-1 text-sm mb-1  w-full md:w-auto lg:w-auto font-medium hover:bg-gray-900 hover:text-white ">
            {catName}
        </Link>
    )
}

export default CategoryCard