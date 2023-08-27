"use client"

export default function Collegedata({params}){
    console.log(params)
    return(
        <div>
            <h1>College Details</h1>
            <h3>Name : {params.data}</h3>
            

        </div>
    )
}