"use client"
import { useEffect, useState } from "react"
import axios from "axios"

export default function Search() {
   const [nameList, setNameList] = useState([])
   const [search, setSearch] = useState("")

   useEffect(()=>{
    axios.get("https://jsonplaceholder.typicode.com/users")
    .then((response) => {setNameList(response.data)})
   },[])

   

    return (
      <div className="text-center my-20">
  
          <form >

              <input className="text-black border-2 border-black rounded-full px-3 py-2" type="text" placeholder="Search name..." onChange={(e) => setSearch(e.target.value)}  />
              <button className="bg-black text-white rounded-full px-3 py-2 hover:bg-black/60" type="submit">Search</button>
          </form>
          {nameList.filter((item)=>{
            if(search===""){
              return item
            }
            else if(item.name.toLowerCase().includes(search.toLowerCase())){
              return item
            }
            
            
          })
          
          .map((item , index)=>(
            <h4 key={{index}}>{item.name}</h4>
          )
             
          )}
          
          
      </div>
    )
  }

{/**/}