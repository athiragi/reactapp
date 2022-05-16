import React, { useState } from 'react'

const Count = () => {
    var [number,setNumber]=useState(0)
    const inc=()=>{
        setNumber(
            number=number+1
        )
    }
    const dec=()=>{
        setNumber(
            number=number-1
        )
    }
  return (
    <div>
        <div className="container">
    <div className="row">
        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <div className="row g-3">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <label for="" className="form-label">{number}</label>
                    <br></br>
                    
                
                </div>
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                   
                    <button onClick={inc} className="btn btn-success">Increment</button>
                

                </div>
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <button onClick={dec} className="btn btn-success">Decrement</button>
                   
                </div>
            </div>
        </div>
    </div>
</div>
    </div>
  )
}

export default Count