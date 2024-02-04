import React, { useEffect } from 'react'
import { IoCreateOutline } from 'react-icons/io5';
import { Fragment, useState } from 'react'
import { Listbox, Transition } from '@headlessui/react'
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid'
import classNames from 'classnames';
import styles from "./BlogHeader.module.css"
import axios from "axios"
import CreateBlog from "./CreateBlog"
import { useDispatch, useSelector } from 'react-redux';
import { filter } from '../../features/userSlice';
const BlogHeader = ({handleCreatePopup,createPopup}) => {
  const filterValue = useSelector((c)=>c.user.filterValue)
  const [category,setIsCategory] = useState([])
  const [selected, setSelected] = useState("Filter Category")
  console.log("👉 ~ file: BlogHeader.jsx:76 ~ BlogHeader ~ category⭐", category)
const dispatch  = useDispatch()

useEffect(() => {
  const handleCategory = async ()=>{
    await axios.get("http://localhost:8000/api/user/getBlogCategories").then((res)=>{
      setIsCategory(res?.data?.categories)

    }).catch((err)=>{
      console.log(err)
    })
  }
  handleCategory()
}, [])
  return (
    <>
    <div className={`justify-center items-center ${styles.blogHeader_div}`}> 
    <div className="mx-auto max-w-2xl lg:mx-0 ">
    <div className="flex gap-5 items-center">
      <h2 className={` font-bold tracking-tight text-gray-900 gap-1 ${styles.main_heading} `}>
      Latest Insights
      </h2>
      <button
        onClick={handleCreatePopup}
        className={`bg-transparent text-black border-black border font-semibold rounded-md p-2  ${styles.create_btn}`}
      >
        Create
        <span className="inline-flex mx-2">
          <IoCreateOutline />
        </span>
      </button>
      {createPopup && (
        <CreateBlog
          handleCreatePopup={handleCreatePopup}
          createPopup={createPopup}
        />
      )}
    </div>
    <p className={`mt-2  leading-8 text-gray-600 ${styles.heading}`}>
      &quot;Empower Your Ideas: Your Personal Blogging Haven! &quot;
    </p>
  </div> 

  <div className='ml-auto'>
  <Listbox value={filterValue} onChange={(newValue) => {
    dispatch(filter(newValue));
}}>
      {({ open }) => (
        <>
          <div className="relative flex gap-2  flex-wrap mt-2">
            <Listbox.Button className="relative w-56 cursor-default rounded-md bg-white py-1.5 pl-3 pr-10 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 sm:text-sm sm:leading-6">
              <span className="flex items-center">
                <span className="ml-3 block truncate">{filterValue}</span>
              </span>
              <span className="pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-2">
                <ChevronUpDownIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
              </span>
            </Listbox.Button>

            <Transition
              show={open}
              as={Fragment}
              leave="transition ease-in duration-100"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Listbox.Options className={`absolute z-10 mt-1 max-h-56 w-full overflow-scroll rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm ${styles.filter_list}`}>
                {category.map((cat) => (
                  <Listbox.Option
                    key={cat.id}
                    className={({ active }) =>
                      classNames(
                        active ? 'bg-[#2B6373] text-white' : 'text-gray-900',
                        'relative cursor-default select-none py-2 pl-3 pr-9'
                      )
                    }
                    value={cat}
                  >
                    {({ selected, active }) => (
                      <>
                        <div className="flex items-center cursor-pointer">
                          <span
                            className={classNames(selected ? 'font-semibold' : 'font-normal', 'ml-3 block truncate')}
                          >
                            {cat}
                          </span>
                        </div>

                        {selected ? (
                          <span
                            className={classNames(
                              active ? 'text-white' : 'text-indigo-600',
                              'absolute inset-y-0 right-0 flex items-center pr-4'
                            )}
                          >
                            <CheckIcon className="h-5 w-5" aria-hidden="true" />
                          </span>
                        ) : null}
                      </>
                    )}
                  </Listbox.Option>
                ))}
              </Listbox.Options>
            </Transition>
            <button  className='p-2 bg-red-800 rounded-lg text-white  '>reset filter</button>

          </div>
        </>
      )}
    </Listbox></div> 

    </div>
    
    
    </>
  
  
  )
}

export default BlogHeader