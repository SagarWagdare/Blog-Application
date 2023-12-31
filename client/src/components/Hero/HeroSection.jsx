import styles from "./HeroSection.module.css";
import blogImg from "../../assets/images/blogImg.jpg"
const HeroSection = () => {
  return (
    <div className="">
    <img src={blogImg} className={styles.blogImg} alt="" />
    </div>
  )
}

export default HeroSection