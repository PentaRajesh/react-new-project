import React, { useState } from "react";

const login = () => {
    const [formData, setFormData] = useState({
        email:'',
        password:'',
      })


  return (
    <div className="App">
      <form onSubmit={onSubmitHandler}>
        <h4 className="mb-5 text-secondary">Create Your Account</h4>

        <div className="form-group">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            className="form-control"
            name="email"
            placeholder="Enter Email"
            onChange={onChangeHandler}
            value={formData.email}
          />
          <span className="non-valid">{formError.email}</span>
        </div>

        <div className="form-group">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            className="form-control"
            name="password"
            placeholder="Enter Password"
            onChange={onChangeHandler}
            value={formData.password}
          />
          <span className="non-valid">{formError.password}</span>
        </div>
        <div className="form-group">
          <button className="btn btn-primary float-end" type="submit">
            Login Now
          </button>
        </div>
      </form>
      <p className="text-center mt-3 text-secondary">
        If you don't have account, Please <Link to="/registration">Registration </Link>
      </p>
    </div>
  );
};

export default login;
