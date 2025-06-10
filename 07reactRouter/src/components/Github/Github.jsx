import { use, useEffect, useState } from "react"
import { data } from "react-router-dom"
import { useLoaderData } from "react-router-dom"

function Github() {  
    const data = useLoaderData()
//     const[data,setData] = useState([])
//     useEffect(()=>{
//         fetch('https://api.github.com/users/kaynatmozammil')
//         .then(response=>response.json())
//         .then(data=>{
//             console.log(data)
//             setData(data)
//         })
//     },[])
  return (
    <div className="text-center text-white m-4 bg-gray-600">
        Github followers:{data.followers} 

        <img src={data.avatar_url} alt="Git picture"/>
    </div>
  )
}
export default Github

export const githubInfoLoader = async() =>{
    const response = await fetch('https://api.github.com/users/kaynatmozammil')

    return response.json()
    
}