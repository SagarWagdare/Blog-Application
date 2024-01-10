import { Route, Routes } from "react-router-dom";
import Login from "./components/Auth/Login";
import Signup from "./components/Auth/Signup";
import BlogPage from "./components/BlogPage/BlogPage";
import HeroSection from "./components/Hero/HeroSection";
import Header from "./components/Header";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import About from "./components/About/About";
import NotFound from "./components/NotFound";
import Contact from "./components/Contact/Contact";
import { useEffect, useState } from "react";
import UpdateBlog from "./components/BlogPage/UpdateBlog";
import UserProfile from "./components/Profile/UserProfile";
import { useSelector } from "react-redux";
import BlogDetail from "./components/BlogPage/BlogDetail";
import Sidebar from "./components/Sidebar/Sidebar";
function App() {
  const userData = useSelector((c)=>c.user)
  const [id,setId] = useState(userData?.userId)
  useEffect(() => {
    try {
      axios
        .get(`http://localhost:8000/api/user/getUser?id=${id}`)
        .then((res) => {
          setIsUser(res?.data?.getUser);
          dispatch(userData(res?.data?.getUser));
        })
        .catch((err) => {
          console.log(err);
        });
    } catch (error) {
   
    }
  }, [id]);
 

  
  return (
    <>
      <Header />
      {/* <Sidebar/> */}
      <Routes>
        {userData.userToken ? (
          <Route path="/" element={<BlogPage />} />
        ) : (
          <Route path="/" element={<HeroSection />} />
        )}

        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blog-detail/:id" element={<BlogDetail />} />
        <Route path="/update-blog/:id" element={<UpdateBlog />} />
        <Route path="/profile/:id" element={<UserProfile />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
      <ToastContainer
        position="top-center"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </>
  );
}

export default App;
