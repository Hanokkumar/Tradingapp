"use client"
import React, { useEffect, useState } from 'react'

import './customerlevel.css'

function CustomerLevel() {
  const [treecollection, settreecollection] = useState([])
  const [Userinfo, setUserinfo] = useState({})


  useEffect(() => {
    Getlevel()
      const data  = localStorage.getItem('Userinfo')
      setUserinfo(JSON.parse(data))
      console.log(JSON.parse(data).RegistrationId)
  }, [])
const Getlevel = async() => {
  console.log(Userinfo,"Userinf")
  const response = await fetch("/api/GetTreeinfo", {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
    },
    body: JSON.stringify({Parentid:JSON.parse(localStorage.getItem('Userinfo')).RegistrationId}),
}).then((res) => res.json()).then((data) => {
 // console.log(data.rows)
  settreecollection(data.rows)
})

}





  return (
    <div style={{width:"100%"}} >

<div class="container">
{treecollection.length === 1 ? (
  <>
  {treecollection.slice(0,1).map((data, index) => (
    <h1 class="level-1 rectangle" key ={index}>{data.firstName} {data.RegistrationNumber} </h1>
     ))}
  </>
):
  <>

    <h1 class="level-1 rectangle">{JSON.parse(localStorage.getItem('Userinfo')).FirstName}   - {JSON.parse(localStorage.getItem('Userinfo')).RegistrationNumber} </h1>
 
     </>
}
    <ol class="level-2-wrapper">
      <li>
      {treecollection.length > 1 ? (
  <>
  {treecollection.slice(1,2).map((data,index) => (
    <h1 class="level-2 rectangle" key ={index}>{data.firstName} - {data.RegistrationNumber} </h1>
     ))}
  </>
):
  <>

    <h1 class="level-2 rectangle">NODE-2 </h1>
 
     </>
}
        <ol class="level-3-wrapper">
          <li>
            <h3 class="level-3 rectangle">Node 4</h3>
            <ol class="level-4-wrapper">
              <li>
                <h4 class="level-4 rectangle">Person A</h4>
              </li>
              <li>
                <h4 class="level-4 rectangle">Person B</h4>
              </li>
             
            </ol>
          </li>
          <li>
            <h3 class="level-3 rectangle">Node 5 </h3>
            <ol class="level-4-wrapper">
              <li>
                <h4 class="level-4 rectangle">Person A</h4>
              </li>
              <li>
                <h4 class="level-4 rectangle">Person B</h4>
              </li>
           
            </ol>
          </li>
        </ol>
      </li>
      <li>
        {/* <h2 class="level-2 rectangle">Node 3 </h2> */}
       {treecollection.length > 2 ? (
  <>
  {treecollection.slice(2,3).map((data,index) => (
    <h1 class="level-2 rectangle" key ={index}>{data.firstName} - {data.RegistrationNumber} </h1>
     ))}
  </>
):
  <>

    <h1 class="level-2 rectangle"> NODE-3 </h1>
 
     </>
}
        <ol class="level-3-wrapper">
          <li>
            <h3 class="level-3 rectangle">Node 6 </h3>
            <ol class="level-4-wrapper">
              <li>
                <h4 class="level-4 rectangle">Person A</h4>
              </li>
              <li>
                <h4 class="level-4 rectangle">Person B</h4>
              </li>
            
            </ol>
          </li>
          <li>
            <h3 class="level-3 rectangle">Node 7 </h3>
            <ol class="level-4-wrapper">
              <li>
                <h4 class="level-4 rectangle">Person A</h4>
              </li>
              <li>
                <h4 class="level-4 rectangle">Person B</h4>
              </li>
              
            </ol>
          </li>
        </ol>
      </li>
    </ol>
  </div>
    </div>
  )
}

export default CustomerLevel
