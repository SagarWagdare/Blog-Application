import styles from "./HeroSection.module.css";
import blogImg from "../../assets/images/blogImg.jpg"
import { useSelector } from "react-redux";
const HeroSection = () => {
  const userProfile = useSelector((c)=>c.user.user)
  console.log("👉 ~ file: BlogPage.jsx:13 ~ BlogPage ~ userProfile⭐", userProfile)
  return (
    <div className="">
          <img src={`http://localhost:8000/api/user/` + userProfile?.image} alt="ss" />
    <img src={blogImg} className={styles.blogImg} alt="" />
    </div>
  )
}

export default HeroSection