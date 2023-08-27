"use client"

import { useRouter } from "next/navigation"



export default function Testbtn() {

    const router = useRouter();
    return (
   
   <div>
     <h2> Test Page  1</h2>
    <button onClick={()=>router.push("/components/Modal/page")}>return to home page</button>
   </div>
    )
  }