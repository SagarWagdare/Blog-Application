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
function App() {
  const [isToken, setIsToken] = useState(null);
  console.log("👉 ~ file: App.jsx:18 ~ App ~ isToken⭐", isToken)
  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsToken(token)
  }, []);

  
  return (
    <>
      <Header />
      <Routes>
        {isToken ? (
          <Route path="/" element={<BlogPage />} />
        ) : (
          <Route path="/" element={<HeroSection />} />
        )}

        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/contact" element={<Contact />} />
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
