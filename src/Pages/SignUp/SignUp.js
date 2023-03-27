import React, { useContext } from "react";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";
import img from "../../assets/images/login/login.svg";
import { AuthContext } from "../../Context/AuthProvider/AuthProvider";

const SignUp = () => {
  const { createUser, loginWithGoogle } = useContext(AuthContext);
  const handleSignUp = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const confirmPassword = form.confirmPassword.value;
    console.log(name, email, password, confirmPassword);

    createUser(email, password)
      .then((result) => {
        const user = result.user;
        form.reset();
        console.log(user);
      })
      .catch((err) => console.error(err));
  };

  const handleGoogleLogin = () => {
    loginWithGoogle()
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((err) => console.error(err));
  };
  return (
    <div className="hero ">
      <div className="hero-content  grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="text-center lg:text-left ">
          <img src={img} className="w-96 h-72" alt="" />
        </div>
        <div className="w-full h-auto  shadow-2xl bg-base-100">
          <form onSubmit={handleSignUp} className="card-body p-6 ">
            <h2 className="text-3xl font-bold text text-center pb-4">
              Sign Up
            </h2>
            <div className="form-control w-full">
              {/* <label className="label">
                <span className="text-base lg:text-[18px]">Name</span>
              </label> */}
              <input
                type="text"
                placeholder="Enter Your Name"
                className="input input-bordered text-sm lg:text-base"
                name="name"
              />
            </div>
            <div className="form-control w-full">
              {/* <label className="label ">
                <span className="text-base lg:text-[18px]">Email</span>
              </label> */}
              <input
                type="email"
                name="email"
                placeholder="Enter Your Email"
                className="input input-bordered text-sm lg:text-base"
              />
            </div>
            <div className="form-control w-full">
              {/* <label className="label ">
                <span className="text-base lg:text-[18px]">Password</span>
              </label> */}
              <input
                type="password"
                name="password"
                placeholder="Enter Your Password"
                className="input input-bordered text-sm lg:text-base"
              />
            </div>
            <div className="form-control w-full">
              {/* <label className="label">
                <span className=" text-base lg:text-[18px]">
                  Confirm Password
                </span>
              </label> */}
              <input
                type="password"
                placeholder="Confirm password"
                name="confirmPassword"
                className="input input-bordered  text-sm lg:text-base"
              />
            </div>
            <div className="form-control mt-3  w-full">
              <button className="btn bg-orange-600 border-none hover:bg-orange-500">
                Sign Up
              </button>
            </div>
          </form>
          <p className="text-center mb-3"> Or Login with</p>
          <div className="flex  items-center justify-center mb-3 ">
            <div className="flex items-center justify-center  w-8 h-8 bg-gray-300 rounded-full mr-2">
              <button onClick={handleGoogleLogin}>
                <FcGoogle className=" w-5 h-5" />
              </button>
            </div>
            <div className="flex items-center justify-center  w-8 h-8 bg-gray-300 rounded-full mr-2 ">
              <FaFacebookF className="text-facebook w-4 h-4  " />
            </div>
            <div className="flex items-center justify-center  w-8 h-8 bg-gray-300 rounded-full mr-2">
              <FaLinkedinIn className="text-linkedIn w-4 h-4" />
            </div>
          </div>
          <p className="text-center text-sm mb-5">
            Already have an account{" "}
            <Link to="/login" className="text-orange-600 font-bold">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
