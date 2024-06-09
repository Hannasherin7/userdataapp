import React, { useState } from 'react'
import { NavBar } from './NavBar'

export const Searchuser = () => {
    const [data,setData]=useState(
        {
            "name":"",
             "id":""
        }
    )
    const inputHandler=(event)=>{
        setData({...data,[event.target.name]:event.target.value})
    }
    const readValue=()=>{
        console.log(data)
    }
  return (
    <div>
        <NavBar/>
     <h1><center>SEARCH USER DETAILS</center></h1>
      <div className="containe">
        <div className="row g-3">
          <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
           <div className="row">
            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
              <label htmlFor="" className="form-label">Name</label>
              <input type="text" className="form-control" name='name' value={data.name} onChange={inputHandler} />
            </div>
            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
              <label htmlFor="" className="form-label">ID</label>
              <input type="text" className="form-control" name='id' value={data.id} onChange={inputHandler} />
            </div>
            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
            <br /><button  onClick={readValue} className="btn btn-success">Search User</button>
            </div>
           </div>    
           </div>
           </div>
           </div>
    </div>
  )
}
