import React from 'react'
import Navbar from './Navbar'

const Register = () => {
  return (
 <div>
     <Navbar />
        <div className="container">
    <div className="row">
        <div className="col col-sm-12 col md-12 col-lg-12 col-xl-12 col-xxl-12">
            <div className="row g-3">
                <div className="col col-12 col-sm-6 col-md-6 col lg-6 col-xl-6 col-xxl-6">
                  <label for="" className="form-label">Name</label>
                  <input placeholder="Enter name" type="text" className="form-control" />
                </div>
                <div className="col col-12 col-sm-6 col-md-6 col lg-6 col-xl-6 col-xxl-6">
                    <label for="" className="form-label">Rollno</label>
                  <input placeholder="Enter Rollno" type="text" className="form-control" />
                </div>
                <div className="col col-12 col-sm-6 col-md-6 col lg-6 col-xl-6 col-xxl-6">
                    <label for="" className="form-label">Admission no</label>
                  <input placeholder="Enter Admission no" type="text" className="form-control" />
                </div>
                <div className="col col-12 col-sm-6 col-md-6 col lg-6 col-xl-6 col-xxl-6">
                    <label for="" className="form-label">Mobile No</label>
                  <input placeholder="Enter Mobile No" type="text" className="form-control" />
                </div>
                <div className="col col-12 col-sm-12 col-md-12 col lg-12 col-xl-12 col-xxl-12">
                    <label for="" className="form-label">College</label>
                    <input placeholder="Enter College" type="text" className="form-control"/>
                </div>
                <div className="col col-12 col-sm-6 col-md-6 col lg-6 col-xl-6 col-xxl-6">
                    <label for="" className="form-label">User Name</label>
                    <input placeholder="Enter  user name" type="text" className="form-control"/>
                </div>
                <div className="col col-12 col-sm-6 col-md-6 col lg-6 col-xl-6 col-xxl-6">
                    <label for="" className="form-label">Password</label>
                    <input placeholder="Enter Password" type="text" className="form-control"/>
                </div>
                <div className="col col-12 col-sm-6 col-md-6 col lg-6 col-xl-6 col-xxl-6">
                    
                    <button className="btn btn-success">Register</button>
                </div>
               
            </div>
        </div>
    </div>
</div>
 </div>


  )
}

export default Register