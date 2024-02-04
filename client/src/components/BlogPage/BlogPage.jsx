import { useEffect, useState } from "react";
import axios from "axios";
import styles from "./BlogPage.module.css";
import blogImg from "../../assets/images/blogImg.jpg";
import { MdCreate } from "react-icons/md";
import { NavLink, useNavigate } from "react-router-dom";
import Loader from "../loader";
import CreateBlog from "./CreateBlog";
import { API_BASE_URL } from "../.././config";
import { format } from "date-fns";
import { IoCreateOutline } from "react-icons/io5";
import BlogHeader from "./BlogHeader";
import { useDispatch, useSelector } from "react-redux";
import { setBlog } from "../../features/userSlice";
const BlogPage = () => {
  const [blogs, setBlogs] = useState([]);
  const [createPopup, setCreatePopup] = useState(false);
  const navigate = useNavigate();
  const dispatch=  useDispatch();
  const [loading, setLoading] = useState(false);
  const filterValue = useSelector((c) => c.user.filterValue);
  const [blogData, setBlogData] = useState([]);
  
  useEffect(() => {
    const filteredBlogs = blogs.filter((blog) => blog.category === filterValue);
    if (filteredBlogs.length === 0) {
      setBlogData(blogs);
    } else {
      setBlogData(filteredBlogs);
    }
  }, [blogs, filterValue]);

  const handleBlogs = async () => {
    setLoading(true);
    await axios
      .get("http://localhost:8000/api/user/getBlogs")
      .then((res) => {
        console.log("👉 ~ .then ~ res⭐", res)
        setBlogs(res?.data?.allBlogs);
        setLoading(false);
        dispatch(setBlog(res?.data?.allBlogs))
      })
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    handleBlogs();
  }, []);

  const handleCreatePopup = () => {
    setCreatePopup(!createPopup);
  };
  const handleDetailBlog = (post) => {
    navigate(`/blog-detail/${post?._id}`);
  };

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div className="bg-white py-5 ">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">           
            <BlogHeader
              handleCreatePopup={handleCreatePopup}
              createPopup={createPopup}
            />
            <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-3 gap-y-8 border-t  border-gray-200 pt-10 sm:mt-5 sm:pt-5 lg:mx-0 lg:max-w-none lg:grid-cols-3 cursor-pointer ">
              {blogData.length === 0 ? (
                <span>No blog found...</span>
              ) : (
                blogData.map((post) => (
                  <article
                    key={post._id}
                    className={`flex max-w-xl flex-col items-start justify-between rounded-r-sm p-2 ${styles.blog_container}`}
                    onClick={() => handleDetailBlog(post)}
                  >
                    <div className="flex justify-center h-60 ">
                      <img
                        src={`${API_BASE_URL}/${post?.image}`}
                        className="object-cover"
                        alt="blogImg"
                      />
                    </div>
                    <div className="flex items-center gap-x-4 text-xs">
                      <time dateTime="" className="text-gray-500">
                        {format(
                          new Date(post.createdAt),
                          "d MMMM, yyyy hh:mm a"
                        )}{" "}
                      </time>

                      <a
                        href="#"
                        className="relative  rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
                      >
                        {post.category}
                      </a>
                    </div>

                    <div className="group relative">
                      <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                        <a href="#">
                          <span className="absolute inset-0" />
                          {post.title}
                        </a>
                      </h3>
                      <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">
                        {post.description}
                      </p>
                    </div>
                    <div className="relative mt-8 flex items-center gap-x-4">
                      <img
                        src="https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                        alt=""
                        className="h-10 w-10 rounded-full bg-gray-50"
                      />
                      <div className="text-sm leading-6">
                        <p className="font-semibold text-gray-900">
                          <a href="#">
                            <span className="absolute inset-0" />
                            {post.authorname}
                          </a>
                        </p>
                      </div>
                    </div>
                  </article>
                ))
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default BlogPage;
