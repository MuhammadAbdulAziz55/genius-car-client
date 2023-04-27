import React, { useContext } from "react";
import img from "../../assets/images/login/login.svg";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { AuthContext } from "../../Context/AuthProvider/AuthProvider";
const Login = () => {
  const { login, loginWithGoogle } = useContext(AuthContext);

  let navigate = useNavigate();
  let location = useLocation();
  let from = location.state?.from?.pathname || "/";

  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;

    const email = form.email.value;
    const password = form.password.value;

    console.log(email, password);

    login(email, password)
      .then((result) => {
        const user = result.user;

        const currentUser = { email: user.email };
        console.log("current user", currentUser);
        // get jwt token
        fetch("http://localhost:5000/jwt", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(currentUser),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log("data", data.token);
            // local storage is the easiest but not the best way to store jwt tokens
            localStorage.setItem("geniusToken", data.token);
          });

        navigate(from, { replace: true });
        console.log(user);
        form.reset();
      })
      .catch((err) => console.error(err));
  };

  const handleGoogleLogin = () => {
    loginWithGoogle()
      .then((result) => {
        const user = result.user;
        navigate(from, { replace: true });
        console.log(user);
      })
      .catch((err) => console.error(err));
  };
  return (
    <div className="hero ">
      <div className="hero-content  grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="text-center lg:text-left ">
          <h1 className="text-5xl font-bold">Login now!</h1>
          <img src={img} className="w-96 h-72" alt="" />
        </div>
        <div className="w-full h-auto  shadow-2xl bg-base-100">
          <form onSubmit={handleLogin} className="card-body p-6 ">
            <h2 className="text-3xl font-bold text text-center pb-4">Login</h2>
            <div className="form-control w-full">
              <label className="label ">
                <span className="text-base lg:text-[18px]">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="email"
                className="input input-bordered text-sm lg:text-base"
                required
              />
            </div>
            <div className="form-control w-full">
              <label className="label">
                <span className=" text-base lg:text-[18px]">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="password"
                className="input input-bordered  text-sm lg:text-base"
                required
              />
              <label className="label">
                <a
                  href="www.google.com"
                  className="label-text-alt link link-hover"
                >
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-3  w-full">
              <button className="btn bg-orange-600 border-none hover:bg-orange-500">
                Login
              </button>
            </div>
          </form>
          <p className="text-center mb-3"> Or Login with</p>
          <div className="flex  items-center justify-center mb-3 ">
            <div className="flex items-center justify-center  w-8 h-8 bg-gray-300 rounded-full mr-2">
              <FcGoogle
                onClick={handleGoogleLogin}
                className=" w-5 h-5 cursor-pointer"
              />
            </div>
            <div className="flex items-center justify-center  w-8 h-8 bg-gray-300 rounded-full mr-2 ">
              <FaFacebookF className="text-facebook w-4 h-4  " />
            </div>
            <div className="flex items-center justify-center  w-8 h-8 bg-gray-300 rounded-full mr-2">
              <FaLinkedinIn className="text-linkedIn w-4 h-4" />
            </div>
          </div>
          <p className="text-center text-sm mb-5">
            New to Genius Car{" "}
            <Link to="/sign-up" className="text-orange-600 font-bold">
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
