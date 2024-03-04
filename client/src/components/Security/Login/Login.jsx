import Lottie from "lottie-react";
import { Link } from "react-router-dom";
import loginAnimation from "../../../lotties/login.json";
const Login = () => {
  return (
    <div className="flex justify-center items-center px-6">
      <div className="w-full lg:w-full flex justify-between">
        <div className="w-full h-auto lg:block hidden lg:w-full bg-cover rounded-l-lg">
          <Lottie animationData={loginAnimation} loop={true} />
        </div>

        <div className="w-full lg:w-10/12 p-5 rounded-lg lg:rounded-l-none grid place-content-center grid-cols-1">
          <h3 className="pt-4 text-2xl text-center font-sora font-semibold">
            Login Now!
          </h3>
          <form className="px-8 pt-6 pb-8 mb-4 font-outfit rounded">
            <div className="mb-4">
              <label
                className="block mb-2 text-sm font-bold text-gray-700"
                htmlFor="email"
              >
                Email
              </label>
              <input
                className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                id="email"
                type="email"
                placeholder="Email"
              />
            </div>
            <div className="mb-4">
              <label
                className="block mb-2 text-sm font-bold text-gray-700"
                htmlFor="email"
              >
                Password
              </label>
              <input
                className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                id="password"
                type="password"
                placeholder="Password"
              />
            </div>
            <div className="mb-6 text-center">
              <button
                className="w-full px-4 py-2 font-bold text-white bg-violet-600 rounded-full hover:bg-violet-700 duration-150 focus:outline-none focus:shadow-outline"
                type="button"
              >
                Login
              </button>
            </div>
            <hr className="mb-6 border-t" />
            <div className="text-center">
              <Link className="inline-block text-sm text-blue-500 align-baseline hover:text-blue-800">
                Forgot Password?
              </Link>
            </div>
            <div className="text-center">
              <Link
                className="inline-block text-sm text-blue-500 align-baseline hover:text-blue-800"
                to={"/security/register"}
              >
                {"have'nt"} an account? register!
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
