import React, { useState } from 'react'
import { NavBar } from './NavBar'

export const Adduser = () => {
    const [data,setData]=useState(
        {
          "name":"",
          "id":"",
          "address":"",
          "pincode":"",
          "bloodgroup":"",
          "dob":"",
          "email":"",
          "password":"",
          "confirmpassword":""
        }
      )
      const inputHandler=(event)=>{
        setData({...data,[event.target.name]:event.target.value})
      }
      const readVlue=()=>{
        console.log(data)
      }
  return (
    <div>
        <NavBar/>
     <h1><center>ADD USER DETAILS</center></h1>
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
            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <label for="" className="form-label">address</label>
                        <textarea name="" id="" className="form-control" name='address'value={data.address}onChange={inputHandler} ></textarea>
                    </div>
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <label for="" className="form-label">pin code </label>
                        <input type="text" className="form-control"name='pincode'value={data.pincode}onChange={inputHandler}></input>
                    </div>
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <label for="" className="form-label">blood group</label>
                        <select name="" id="" className="form-control" name='bloodgroup'value={data.bloodgroup}onChange={inputHandler}>
                            <option value="A+">A+</option>
                            <option value="A-">A-</option>
                            <option value="B+">B+</option>
                            <option value="AB-">AB-</option>
                            <option value="B-">B-</option>
                            <option value="AB+">AB+</option>
                            <option value="O+">O+</option>
                            <option value="O-">O-</option>
                        </select>
                    </div>
            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
            <label htmlFor="" className="form-label">DOB</label>
              <input type="date" className="form-control" name='dob'value={data.dob}onChange={inputHandler}/>
            </div>
            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
            <label htmlFor="" className="form-label">Email</label>
              <input type="email" className="form-control" name='email'value={data.email}onChange={inputHandler}/>
            </div>
            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
            <label htmlFor="" className="form-label">password</label>
              <input type="password" className="form-control" name='password'value={data.password}onChange={inputHandler}/>
            </div>
            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
            <label htmlFor="" className="form-label">confirm password</label>
              <input type="password" className="form-control"name='confirmpassword'value={data.confirmpassword}onChange={inputHandler} />
            </div>
            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
            <br /><button  onClick={readVlue} className="btn btn-success">Add User</button>
            </div>
           </div>    
           </div>
           </div>
           </div>
    </div>
  )
}
