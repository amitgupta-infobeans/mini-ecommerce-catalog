import CategoryCard from "./CategoryCard";
import { useApiHandler } from "../hooks/useApiHandler";
import React from "react";


export const CategoryList = () => {

    const { data: category } = useApiHandler("category", "get");

    return Array.isArray(category) && category.length > 0 &&
        category.map((onecat) => (
            <CategoryCard key={onecat._id} onecat={onecat} />
        ))
};