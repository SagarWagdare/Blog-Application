const UpdateBlog = () => {

  // {
  //   "title":"Boost your conversion rate",
  //   "description":"Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.",
  //   "category":{
  //     "title":"Marketing"
  //   },"author": {
  //       "name": "Michael Foster",
  //       "role":"Co-Founder / CTO"
  //     }
  // }
  return (
    <div className=" bg-white px-6  lg:px-8">
  
    <form  method="POST" className="mx-auto mt-10 max-w-xl sm:mt-10">
      <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
        <div>
          <label htmlFor="title" className="block text-sm font-semibold leading-6 text-gray-900">
            Title
          </label>
          <div className="mt-2.5">
            <input
              type="text"
              name="title"
              id="title"
              className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>
        <div>
          <label htmlFor="Category" className="block text-sm font-semibold leading-6 text-gray-900">
           Category
          </label>
          <div className="mt-2.5">
            <input
              type="text"
              name="Category"
              id="Category"
              className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>
       
        <div className="sm:col-span-2">
          <label htmlFor="description" className="block text-sm font-semibold leading-6 text-gray-900">
            Description
          </label>
          <div className="mt-2.5">
            <textarea
              name="description"
              id="description"
              rows={4}
              className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>
        <div>
          <label htmlFor="image" className="block text-sm font-semibold leading-6 text-gray-900">
           Image
          </label>
          <div className="mt-2.5">
            <input
              type="file"
              name="image"
              id="image"
              className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>
       
      </div>
      <div className="mt-10">
        <button
          type="submit"
          className="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Update Blog
        </button>
      </div>
    </form>
  </div>  )
}

export default UpdateBlog