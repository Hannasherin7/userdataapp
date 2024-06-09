import axios from 'axios'
import React, { useEffect, useState } from 'react'

import { NavBar } from './NavBar'

export const ViewPro = () => {
    const [data,changeData]=useState(
        {"users":[]}
    )
    const fetchData =()=>{
        axios.get("https://dummyjson.com/users").then(
            (Response)=>{
                console.log(Response.data)
                changeData(Response.data)
            }
        ).catch().finally()
    }
    useEffect(()=>{fetchData()},[])
  return (
    <div>
        <h1><center>VIEW ALL DETAILS</center></h1>
            <NavBar/>
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row g-3">
                            {data.users.map(
                                (value, index) => {
                                    return <div className="col col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-3">
                                        <div class="card">
                                            <img src={value.image}></img>
                                            <div class="card-body">
                                                <p class="card-text">id:{value.id}</p>
                                                <p class="card-text">firstname:{value.firstname}</p>
                                                <p class="card-text">age:{value.age}</p>
                                                
                                                

                                            </div>
                                        </div>
                                    </div>

                                }
                            )

                            }
                        </div>
                    </div>
                </div>
            </div>
    </div>
  )
}
