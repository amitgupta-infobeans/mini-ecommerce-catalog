import CategoryCard from "./CategoryCard";
import { useApiHandler } from "../hooks/useApiHandler";
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setCategory } from "../slice/CategorySlice"

export const CategoryList = () => {

    const categories = useSelector((store) => store.category)
    const { data: apiData } = useApiHandler("category", "get")
    const dispatch = useDispatch()

    useEffect(() => {
        if (categories.length === 0 && Array.isArray(apiData)) {
            dispatch(setCategory(apiData))
        }
    }, [apiData,categories.length, dispatch])

    return Array.isArray(categories) && categories.length > 0 &&
        categories.map((onecat) => (
            <CategoryCard key={onecat._id} onecat={onecat} />
        ))
};