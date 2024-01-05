import { Fragment, useRef, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { ExclamationTriangleIcon } from "@heroicons/react/24/outline";
import axios from "axios";
const CreateBlog = ({ createPopup, handleCreatePopup }) => {
  const cancelButtonRef = useRef(null);
  const [blogData, setBlogData] = useState({
    title: "",
    category: "",
    description: "",
    authorname: "",
    image: "",
  });

  const handleBlogData = async (e) => {
    e.preventDefault()
    const formData = new FormData();
    formData.append("title", blogData.title);
    formData.append("description", blogData.description);
    formData.append("category", blogData.category);
    formData.append("authorname", blogData.authorname);
    formData.append("image", blogData.image);

    await axios
      .post("http://localhost:8000/api/user/postBlog", formData)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <Transition.Root show={createPopup} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-10"
        initialFocus={cancelButtonRef}
        onClose={handleCreatePopup}
      >
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                <div className=" bg-white px-6  lg:px-8">
                  <form method="POST" encType="multipart/form-data" onSubmit={handleBlogData} className="mx-auto mt-5 max-w-xl ">
                    <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                      <div>
                        <label
                          htmlFor="title"
                          className="block text-sm font-semibold leading-6 text-gray-900"
                        >
                          Authorname
                        </label>
                        <div className="mt-2">
                          <input
                            type="text"
                            name="title"
                            id="title"
                            value={blogData?.authorname}
                            onChange={(e) =>
                              setBlogData((prev) => ({
                                ...prev,
                                authorname: e.target.value,
                              }))
                            }
                            className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                          />
                        </div>
                      </div>
                      <div>
                        <label
                          htmlFor="title"
                          className="block text-sm font-semibold leading-6 text-gray-900"
                        >
                          Title
                        </label>
                        <div className="mt-2">
                          <input
                            type="text"
                            name="title"
                            id="title"
                            value={blogData?.title}
                            onChange={(e) =>
                              setBlogData((prev) => ({
                                ...prev,
                                title: e.target.value,
                              }))
                            }
                            className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                          />
                        </div>
                      </div>
                      <div>
                        <label
                          htmlFor="Category"
                          className="block text-sm font-semibold leading-6 text-gray-900"
                        >
                          Category
                        </label>
                        <div className="mt-2">
                          <input
                            type="text"
                            name="Category"
                            id="Category"
                            value={blogData?.category}
                            onChange={(e) =>
                              setBlogData((prev) => ({
                                ...prev,
                                category: e.target.value,
                              }))
                            }
                            className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                          />
                        </div>
                      </div>

                      <div className="sm:col-span-2">
                        <label
                          htmlFor="description"
                          className="block text-sm font-semibold leading-6 text-gray-900"
                        >
                          Description
                        </label>
                        <div className="mt-2.5">
                          <textarea
                            name="description"
                            id="description"
                            rows={4}
                            value={blogData?.description}
                            onChange={(e) =>
                              setBlogData((prev) => ({
                                ...prev,
                                description: e.target.value,
                              }))
                            }
                            className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                          />
                        </div>
                      </div>
                      <div>
                        <label
                          htmlFor="image"
                          className="block text-sm font-semibold leading-6 text-gray-900 "
                        >
                          Image
                        </label>
                        <div className="mt-2">
                          <input
                            type="file"
                            name="image"
                            id="image"
                            onChange={(e) =>
                              setBlogData((prev) => ({
                                ...prev,
                                image: e.target.files[0],
                              }))
                            }
                            className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="mt-5 py-4">
                      <button
                        type="submit"
                        className="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                      >
                        Create Blog
                      </button>
                    </div>
                  </form>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
};

export default CreateBlog;
