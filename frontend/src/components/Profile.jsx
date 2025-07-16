
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { clearUser } from "../slice/UserSlice";
import { useApiCall } from "../hooks/useApiCall";
import Loader from "./Loader";

export const Profile = () => {
    const { user } = useSelector((store) => store.user);
    const [loading, callApi] = useApiCall();
    const dispatch = useDispatch();
    const navigate = useNavigate();


    const logoutAction = async () => {
        try {
            const baseURL = `${import.meta.env.VITE_API_URL}/user/logout`;
            await callApi(baseURL, "get");
            dispatch(clearUser());
            navigate("/login");
        } catch (error) {
            console.log("Logout failed");
        }
    };

    return <>
        {loading && <Loader />}
        <Link
            to={!user ? "/login" : "#"}
            className="px-2 py-1 text-sm m-0.5 w-full lg:w-auto font-medium hover:bg-gray-900 hover:text-white"
        >
            {user?.name || "Login"}
        </Link>
        {user && (<>
            <button
                onClick={logoutAction}
                className=" md:hidden px-2 py-1 text-sm w-full lg:w-auto mb-1 md:mb-0 font-medium text-white bg-red-500 hover:bg-red-700"
            >
                Logout
            </button>
            <img
                title="Logout"
                className="size-8 sm:hidden md:block rounded-full cursor-pointer"
                src="./logout.png"
                alt="User"
                onClick={logoutAction}
            /></>

        )}
    </>


}