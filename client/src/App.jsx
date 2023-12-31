import { Route, Routes } from "react-router-dom";
import Login from "./components/Auth/Login";
import Signup from "./components/Auth/Signup";
import BlogPage from "./components/BlogPage/BlogPage";
import HeroSection from "./components/Hero/HeroSection";
import Header from "./components/Header";
import "./App.css";
function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HeroSection />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/blogs" element={<BlogPage />} />
      </Routes>
    </>
  );
}

export default App;
