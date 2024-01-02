import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'
function Github() {
    const data = useLoaderData()
    // const [data, setData] =useState([])
   
    // useEffect(()=>{
    //     fetch('https://api.github.com/users/2001pravin')
    //     .then(response=>response.json())
    //     .then(data=>{
    //         console.log(data);
    //         setData(data)
    //     })
    // },[])

    return (
        <div className='text-center m-4 bg-gray-600 text-white'> Github followers:{data.followers}
        <img  src={data.avatar_url} alt="Git piccture" width={300}/>
         </div>
    )
}

export default Github

export const githuInfoLoader = async ()=>{
   const response = await fetch('https://api.github.com/users/2001pravin')
   return response.json()
}
