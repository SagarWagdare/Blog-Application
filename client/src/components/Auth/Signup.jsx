import { useState } from "react";
import styles from "./Signup.module.css";
import { IoIosEyeOff } from "react-icons/io";
import { IoIosEye } from "react-icons/io";
import { NavLink, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

const Signup = () => {
  const [hidePassword, setHidePassword] = useState(false);
  const [userDetails, setUserDetails] = useState({
    username: "",
    email: "",
    age:"",
    password: "",
    image:""
  });
const navigate = useNavigate()
console.log(userDetails)
  const handlePasswordvisibility = () => {
    setHidePassword(!hidePassword);
  };

  const handleUserDetails = async (e) => {
    e.preventDefault()
    // if(userDetails.username || userDetails.email || userDetails.password === ""){
    //   return toast.warning("pls a")
    // }
    await axios.post("http://localhost:8000/api/user/signup",userDetails,{
      
    }).then((res)=>{
      localStorage.setItem(res?.data?.token)
      toast.success(res?.data?.message)
      navigate("/")

    }).catch((err)=>{
      toast.warning(err?.response?.data?.message)
    })
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
          Signup
        </h2>
      </div>
      <form className="mx-auto mt-5 max-w-xl"  method="POST" onSubmit={handleUserDetails} encType="multipart/form-data">
        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
          <div className="sm:col-span-2">
            <label
              htmlFor="name"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              Username
            </label>
            <div className="mt-2.5">
              <input
                type="text"
                name="text"
                id="text"
                required
                autoComplete="text"
                value={userDetails?.username}
                onChange={(e) =>
                  setUserDetails((prev) => ({
                    ...prev,
                    username: e.target.value,
                  }))
                }
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          {/* <div className="sm:col-span-2">
            <label
              htmlFor="age"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              Image
            </label>
            <div className="mt-2.5">
              <input
                type="file"
                accept="image/*"
                id="image"
                onChange={(e) =>
                  setUserDetails((prev) => ({ ...prev, image:e.target.files[0] }))
                }
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div> */}
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
                required

                autoComplete="email"
                value={userDetails?.email}
                onChange={(e) =>
                  setUserDetails((prev) => ({ ...prev, email: e.target.value }))
                }
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="age"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              Age
            </label>
            <div className="mt-2.5">
              <input
                type="number"
                name="age"
                id="age"
                autoComplete="number"
                value={userDetails?.age}
                onChange={(e) =>
                  setUserDetails((prev) => ({ ...prev, age: e.target.value }))
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
                  required
                  value={userDetails?.password}
                  onChange={(e) =>
                    setUserDetails((prev) => ({
                      ...prev,
                      password: e.target.value,
                    }))
                  }
                  autoComplete="password"
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              ) : (
                <input
                  type="password"
                  name="password"
                  id="password"
                  required
                  autoComplete="password"
                  value={userDetails?.password}
                  onChange={(e) =>
                    setUserDetails((prev) => ({
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
          Already have an account
          <NavLink to="/login" className="text-blue-600 mx-2">
            login here!
          </NavLink>
        </span>
        <div className="mt-5">
          <button
            type="submit"
            className="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Signup
          </button>
        </div>
      </form>
    </div>
  );
};

export default Signup;
