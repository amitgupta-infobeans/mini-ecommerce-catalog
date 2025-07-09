import React from 'react'
import { Link } from "react-router-dom";

const CategoryCard = ({ onecat }) => {
    const { catName, _id } = onecat
    return (
        <Link className="px-3 py-2 text-sm font-medium hover:bg-gray-900 hover:text-white ">
            {catName}
        </Link>
    )
}

export default CategoryCard