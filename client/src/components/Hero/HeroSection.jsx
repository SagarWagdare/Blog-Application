import styles from "./HeroSection.module.css";
import blogImg from "../../assets/images/blogImg.jpg"
const HeroSection = () => {
  return (
    <img src={blogImg} className={styles.blogImg} alt="heroImage" />
  )
}

export default HeroSection