"use client"

export default function Study({params}) {
   
console.log(params)
    return (
    <><h1>{params.lectures[0]}</h1>
    <br/>
    <h2> Study Page  1</h2></>
    )
  }