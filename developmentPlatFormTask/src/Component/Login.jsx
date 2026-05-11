import { useState } from "react";
import herald from "../assets/herald.png";

const Login = () => {

  // toggle between login and signup
  const [isLogin, setIsLogin] = useState(true);

  // form data
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  // handle input change
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // submit
  const handleSubmit = () => {
    console.log(formData);

    if (isLogin) {
      console.log("Logging In...");
    } else {
      console.log("Creating Account...");
    }
  };

  return (
    <div className="flex h-screen p-6">

      {/* LEFT SIDE */}
      <div className="w-1/2 bg-[#F5F5F5] flex justify-center items-center">
        <div className="flex flex-col items-center text-center">

          <img className="h-40 mb-4" src={herald} alt="Herald Logo" />

          <h1 className="text-4xl font-bold text-green-900">
            {isLogin ? "Welcome Back" : "Join Us"}
          </h1>

          <p className="text-gray-600">
            Leave Management System BETA
          </p>

          <div className="bg-black rounded-full text-white px-3 py-1 mt-4 text-xl absolute bottom-8 left-7">
            N
          </div>

        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className="w-1/2 flex justify-center items-center">

        <div className="w-[80%] max-w-md">

          <h1 className="font-bold text-green-700 text-4xl">
            {isLogin ? "Sign In" : "Create Account"}
          </h1>

          <p className="text-gray-500 mt-2 text-xl">
            {isLogin
              ? "Please enter your details to sign in"
              : "Enter your details below"}
          </p>

          <div className="flex flex-col gap-5 mt-10">

            {/* SIGNUP ONLY */}
            {!isLogin && (
              <div className="flex gap-4">

                <div className="w-1/2">
                  <p>First Name</p>
                  <input
                    type="text"
                    name="firstName"
                    placeholder="John"
                    value={formData.firstName}
                    onChange={handleChange}
                    className="border-2 w-full p-4 rounded-xl border-slate-300"
                  />
                </div>

                <div className="w-1/2">
                  <p>Last Name</p>
                  <input
                    type="text"
                    name="lastName"
                    placeholder="Doe"
                    value={formData.lastName}
                    onChange={handleChange}
                    className="border-2 w-full p-4 rounded-xl border-slate-300"
                  />
                </div>

              </div>
            )}

            {/* EMAIL */}
            <div>
              <p>Email Address</p>

              <input
                type="email"
                name="email"
                placeholder="student@heraldcollege.edu.np"
                value={formData.email}
                onChange={handleChange}
                className="border-2 w-full p-4 rounded-xl border-slate-300"
              />
            </div>

            {/* PASSWORD */}
            <div>
              <p>Password</p>

              <input
                type="password"
                name="password"
                placeholder="........"
                value={formData.password}
                onChange={handleChange}
                className="border-2 w-full p-4 rounded-xl border-slate-300"
              />
            </div>

            {/* BUTTON */}
            <div>

              <button
                onClick={handleSubmit}
                className="bg-green-600 hover:bg-green-800 w-full text-white font-bold py-4 px-4 rounded-xl"
              >
                {isLogin ? "Sign In" : "Sign Up"}
              </button>

              <div className="flex justify-center">

                {isLogin ? (
                  <p className="mt-4 text-gray-500 text-xl">
                    Don't have an account?{" "}
                    <span
                      onClick={() => setIsLogin(false)}
                      className="font-bold text-green-600 cursor-pointer"
                    >
                      Sign Up Here
                    </span>
                  </p>
                ) : (
                  <p className="mt-4 text-gray-500 text-xl">
                    Already have an account?{" "}
                    <span
                      onClick={() => setIsLogin(true)}
                      className="font-bold text-green-600 cursor-pointer"
                    >
                      Log In Here
                    </span>
                  </p>
                )}

              </div>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
};

export default Login;