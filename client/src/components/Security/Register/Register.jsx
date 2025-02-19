import Lottie from "lottie-react";
import { Link } from "react-router-dom";
import registerAnimation from "../../../lotties/register.json";
const Register = () => {
  return (
    <section className=" mx-auto">
      <div className="flex justify-center items-center px-6">
        <div className="w-full lg:w-full flex justify-between">
          <div className="w-40 lg:block hidden lg:w-full h-auto rounded-l-lg">
            <Lottie animationData={registerAnimation} loop={true} />
          </div>

          <div className="w-full lg:w-10/12 rounded-lg lg:rounded-l-none">
            <h3 className="pt-4 text-2xl text-center font-sora font-semibold">
              Create an Account!
            </h3>
            <form className="px-8 pt-6 pb-8 mb-4 font-outfit rounded">
              <div className="mb-4 md:flex md:justify-between">
                <div className="mb-4 md:mr-2 md:mb-0">
                  <label
                    className="block mb-2 text-sm font-bold text-gray-700"
                    htmlFor="firstName"
                  >
                    First Name
                  </label>
                  <input
                    className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                    id="firstName"
                    type="text"
                    placeholder="First Name"
                  />
                </div>
                <div className="md:ml-2">
                  <label
                    className="block mb-2 text-sm font-bold text-gray-700"
                    htmlFor="lastName"
                  >
                    Last Name
                  </label>
                  <input
                    className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                    id="lastName"
                    type="text"
                    placeholder="Last Name"
                  />
                </div>
              </div>
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
              <div className="mb-4 md:flex md:justify-between">
                <div className="mb-4 md:mr-2 md:mb-0">
                  <label
                    className="block mb-2 text-sm font-bold text-gray-700"
                    htmlFor="password"
                  >
                    Password
                  </label>
                  <input
                    className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                    id="password"
                    type="password"
                    placeholder="Write your pass"
                  />
                </div>
                <div className="md:ml-2">
                  <label
                    className="block mb-2 text-sm font-bold text-gray-700"
                    htmlFor="c_password"
                  >
                    Confirm Password
                  </label>
                  <input
                    className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                    id="c_password"
                    type="password"
                    placeholder="write your pass"
                  />
                </div>
              </div>
              <div className="mb-4 text-center">
                <button
                  className="w-full px-4 py-2 font-bold text-white bg-secondary /60 rounded-full hover:bg-secondary/90 focus:outline-none focus:shadow-outline duration-150"
                  type="button"
                >
                  Register Account
                </button>
              </div>
              <hr className=" border-t" />
              <div className="text-center">
                <button
                  className="inline-block text-sm text-secondary/50 align-baseline hover:text-secondary/80"
                  href="#"
                >
                  Forgot Password?
                </button>
              </div>
              <div className="text-center">
                <Link
                  className="inline-block text-sm text-secondary/50 align-baseline hover:text-secondary/80"
                  to={"/security/login"}
                >
                  Already have an account? Login!
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Register;
