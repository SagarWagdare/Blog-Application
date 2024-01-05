import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import {API_BASE_URL} from "../../config"
const UserProfile = () => {
  const params = useParams()
  const [id, setId] = useState(params?.id);
  const [isUser, setIsUser] = useState({});
  console.log("👉 ~ file: UserProfile.jsx:8 ~ UserProfile ~ id⭐", id)
  useEffect(() => {
    try {
      axios.get(`http://localhost:8000/api/user/getUser?id=${id}`)
        .then((res) => {
          console.log(res?.data);
          setIsUser(res?.data?.getUser)
        })
        .catch((err) => {
          console.log(err);
        });
    } catch (error) {
      console.log("👉 ~ file: UserProfile.jsx:19 ~ UserProfile ~ error⭐", error);
    }
  }, [id]);
  
  return (
<div className="bg-gray-200 font-sans h-screen fixed w-full flex flex-row justify-center items-center">
  <div className="card w-96 mx-auto bg-white  shadow-xl hover:shadow">
     <img className="w-32 mx-auto rounded-full -mt-20 border-8 border-white"   src={`${API_BASE_URL}/${isUser?.image}`}
 alt={isUser?.image}/>
     <div className="text-center mt-2 text-3xl font-medium">{isUser?.username}</div>
     <div className="text-center mt-2 font-light text-sm">{isUser?.email}</div>
     <div className="text-center font-normal text-lg">{isUser?.age}</div>
     <div className="px-6 text-center mt-2 font-light text-sm">
       <p>
         Front end Developer, avid reader. Love to take a long walk, swim
       </p>
     </div>
     <hr className="mt-8"/>
     <div className="flex p-4">
       <div className="w-1/2 text-center">
         <span className="font-bold">1.8 k</span> Followers
       </div>
       <div className="w-0 border border-gray-300">
         
       </div>
       <div className="w-1/2 text-center">
         <span className="font-bold">2.0 k</span> Following
       </div>
     </div>
  </div>
</div>  )
}

export default UserProfile