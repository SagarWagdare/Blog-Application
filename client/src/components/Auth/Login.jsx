// import styles from "./Login.module.css";
import axios from "axios";
import { useState } from "react";
import { IoIosEyeOff } from "react-icons/io";
import { IoIosEye } from "react-icons/io";
import { useDispatch } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import {setUserId} from "../../features/userSlice"
const Login = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [hidePassword, setHidePassword] = useState(false);
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });
  const [data,setData] = useState([])
  const handleUserData = async (e) => {
    e.preventDefault();
    await axios
      .post("http://localhost:8000/api/user/login", userData)
      .then((res) => {
        localStorage.setItem("token",res?.data?.token)
        setData(res?.data)
        console.log(res?.data?.userId)
        dispatch(setUserId(res?.data?.userId))
        toast.success(res.data.message)
        navigate("/profile/6596e0ada74e8c9722a7072c")
      })
      .catch((err) => {
        toast.warning(err?.response?.data?.message)
      });
  };
  const handlePasswordvisibility = () => {
    setHidePassword(!hidePassword);
  };

  return (
    <div className="isolate bg-white px-6 py-2 sm:py-2 lg:">

      <div
        className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]"
        aria-hidden="true"
      >
        <div
          className="relative left-1/2 -z-10 aspect-[1155/678] w-[36.125rem] max-w-none -translate-x-1/2 rotate-[30deg]  opacity-30 sm:left-[calc(50%-40rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        />
      </div>
      <div className="mx-auto max-w-2xl mt-10 text-center">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
          Login
        </h2>
      </div>
      <form
        method="POST"
        className="mx-auto mt-5 max-w-xl"
        onSubmit={handleUserData}
      >
        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
          <div className="sm:col-span-2">
            <label
              htmlFor="email"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              Email
            </label>
            <div className="mt-2.5">
              <input
                type="email"
                name="email"
                id="email"
                autoComplete="email"
                value={userData.email}
                onChange={(e) =>
                  setUserData((prev) => ({ ...prev, email: e.target.value }))
                }
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="password"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              Password
            </label>
            <div className="mt-2.5 relative">
              <span
                className="absolute right-2 top-2 cursor-pointer text-2xl"
                onClick={handlePasswordvisibility}
              >
                {hidePassword ? <IoIosEye /> : <IoIosEyeOff />}
              </span>
              {hidePassword ? (
                <input
                  type="text"
                  name="password"
                  id="password"
                  autoComplete="password"
                  value={userData.password}
                  onChange={(e) =>
                    setUserData((prev) => ({
                      ...prev,
                      password: e.target.value,
                    }))
                  }
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              ) : (
                <input
                  type="password"
                  name="password"
                  id="password"
                  autoComplete="password"
                  value={userData.password}
                  onChange={(e) =>
                    setUserData((prev) => ({
                      ...prev,
                      password: e.target.value,
                    }))
                  }
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              )}
            </div>
          </div>
        </div>
        <span className="flex justify-center m-2 font-semibold">
          Don&apos;t have an account{" "}
          <NavLink to="/signup" className="text-blue-600 mx-2">
            signup here!
          </NavLink>{" "}
        </span>
        <div className="mt-5">
          <button
            type="submit"
            className="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Login
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
