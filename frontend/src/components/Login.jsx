import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Loader from "./Loader";
import { useLoginRegisterHandler } from "../hooks/useLoginRegisterHandler";

const Login = () => {

  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [isRegister, setIsRegister] = useState(false);

  const { handleData, loading } = useLoginRegisterHandler(name, email, password, isRegister, setIsRegister)

  return (
    <>
      {loading && <Loader />} <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <Link to="/">
            <img
              className="mx-auto h-10 w-auto"
              src="./trolly.svg"
              alt="Your Company"
            />
          </Link>
          <ToastContainer position="top-center" autoClose={5000} theme="light" />
          <h2 className="mt-1 text-center text-2xl/9 font-bold tracking-tight text-gray-900">
            {isRegister ? "Sign Up" : "Sign in"} to your account
          </h2>
        </div>

        <div className="mt-2 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-3" onSubmit={handleData} method="POST">
            {isRegister && (
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm/6 font-medium text-gray-900"
                >
                  Name
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    name="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    id="name"
                    autoComplete="off"
                    required
                    className="block w-full bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 sm:text-sm/6"
                  />
                </div>
              </div>
            )}

            <div>
              <label
                htmlFor="email"
                className="block text-sm/6 font-medium text-gray-900"
              >
                Email address
              </label>
              <div className="mt-1">
                <input
                  type="email"
                  value={email}
                  name="email"
                  onChange={(e) => setEmail(e.target.value)}
                  id="email"
                  autoComplete="off"
                  required
                  className="block w-full bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 sm:text-sm/6"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-sm/6 font-medium text-gray-900"
              >
                Password
              </label>
              <div className="mt-1">
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  name="password"
                  id="password"
                  autoComplete="current-password"
                  required
                  className="block w-full bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 sm:text-sm/6"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                disabled={loading}
                className="flex w-full justify-center bg-black px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs focus-visible:outline-2 focus-visible:outline-offset-2 hover:cursor-pointer"
              >
                {isRegister ? "Sign Up" : "Sign in"}
              </button>
            </div>
          </form>

          <p className="mt-2 text-center text-sm/6 text-gray-500">
            {isRegister ? "Already a member? " : "Not registered yet? "}
            <Link
              to={isRegister ? "/login" : "/register"}
              onClick={() => setIsRegister(!isRegister)}
              className={`font-semibold hover:underline`}
            >
              {isRegister ? "Login" : "Register"}
            </Link>
          </p>
        </div>
      </div>

    </>)
};
export default Login;
