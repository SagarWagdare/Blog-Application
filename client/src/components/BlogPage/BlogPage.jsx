import { useEffect, useState } from "react";
import axios from "axios";
import styles from "./BlogPage.module.css";
import blogImg from "../../assets/images/blogImg.jpg";
import { MdCreate } from "react-icons/md";
import { NavLink, useNavigate } from "react-router-dom";
import Loader from "../loader";
import CreateBlog from "./CreateBlog";
import { useSelector } from "react-redux";
import {API_BASE_URL} from "../.././config"
const BlogPage = () => {
  const [blogs, setBlogs] = useState([]);
  const userId = useSelector((c)=>c.user.userId)
  const [createPopup, setCreatePopup] = useState(false);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  console.log("👉 ~ file: BlogPage.jsx:6 ~ BlogPage ~ blogs⭐", blogs);

  const handleBlogs = async () => {
    setLoading(true);

    await axios
      .get("http://localhost:8000/api/user/getBlogs")
      .then((res) => {
        setBlogs(res?.data?.allBlogs);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    handleBlogs();
  }, []);

  const handleCreatePopup = () => {
    setCreatePopup(!createPopup);
  };
  // const posts = [
  //   {
  //     id: 1,
  //     title: 'Boost your conversion rate',
  //     href: '#',
  //     description:
  //       'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',
  //     date: 'Mar 16, 2020',
  //     datetime: '2020-03-16',
  //     category: { title: 'Marketing', href: '#' },
  //     author: {
  //       name: 'Michael Foster',
  //       role: 'Co-Founder / CTO',
  //       href: '#',
  //       imageUrl:
  //         'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  //     },
  //   },

  //   // More posts...
  // ]

  const handleUpdateBlog = (post) => {
    navigate(`/update-blog/${post?._id}`);
  };

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        
        <div className="bg-white py-5 ">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl lg:mx-0">
              <div className="flex gap-5">
                <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                  From the blog
                </h2>
<NavLink to={`/profile/${userId}`}>


                <button
                  // onClick={handleCreatePopup}
                  className={`bg-transparent text-black border-black border font-semibold rounded-md p-2 text-xl ${styles.create_btn}`}
                >
                  Create
                  <span className="inline-flex mx-2">
                    <MdCreate />
                  </span>
                </button>

</NavLink>
                {createPopup && (
                  <CreateBlog
                    handleCreatePopup={handleCreatePopup}
                    createPopup={createPopup}
                  />
                )}
              </div>
              <p className="mt-2 text-lg leading-8 text-gray-600">
                &quot; Empower Your Ideas: Your Personal Blogging Haven! &quot;
              </p>
            </div>

            <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-3 gap-y-8 border-t  border-gray-200 pt-10 sm:mt-5 sm:pt-5 lg:mx-0 lg:max-w-none lg:grid-cols-3 cursor-pointer ">
              {blogs.map((post) => (
                <article
                  key={post._id}
                  className={`flex max-w-xl flex-col items-start justify-between rounded-r-sm p-2 ${styles.blog_container}`}
                  onClick={() => handleUpdateBlog(post)}
                >
                  <img src={blogImg} alt="blogImg" />
                  <div className="flex items-center gap-x-4 text-xs">
                    <time dateTime="" className="text-gray-500">
                      {post.createdAt}
                    </time>

                    <a
                      href="#"
                      className="relative  rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
                    >
                      {post.category.title}
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
                          {post.author.name}
                        </a>
                      </p>
                      <p className="text-gray-600">{post.author.role}</p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default BlogPage;
