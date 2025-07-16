

import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useApiCall } from "../hooks/useApiCall";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "../slice/UserSlice"

export const useLoginRegisterHandler = (name, email, password, isRegister, setIsRegister) => {

    const [loading, callApi] = useApiCall();
    const navigate = useNavigate();
    const dispatch = useDispatch()
    const user = useSelector((store) => store.user.user)

    useEffect(() => {
        if (user) {
            return navigate("/")
        }
    }, [user])

    const handleData = async (e) => {   
        e.preventDefault();
        try {
            const baseURL = isRegister
                ? `${import.meta.env.VITE_API_URL}/user/register`
                : `${import.meta.env.VITE_API_URL}/user/login`;
            const { success, message, data } = await callApi(baseURL, "POST", { email, password, name });
            if (success) {
                toast.success(message);
                if (isRegister) {
                    setIsRegister(false);
                    navigate("/login");
                } else {
                    dispatch(setUser(data))
                    navigate("/");
                }
            } else {
                toast.error(message);
            }
        } catch (e) {
            toast.error(e);
        }
    };

    return { handleData, loading, isRegister, setIsRegister }

}
