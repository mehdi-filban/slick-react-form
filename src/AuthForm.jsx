import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggleForm } from "./formSlice";

const AuthForm = () => {
  const isSignInForm = useSelector((store) => store.form.isSignInForm);
  const dispatch = useDispatch();

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-100 via-white to-blue-100 px-4">
      <div className="relative w-full max-w-md rounded-3xl bg-white/70 backdrop-blur-xl shadow-2xl border border-white/40 overflow-hidden">
        
        {/* Animated Container */}
        <div className="relative h-[480px]">

          {/* Sign In */}
          <div
            className={`absolute inset-0 p-8 transition-all duration-700 ease-in-out ${
              isSignInForm
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-full"
            }`}
          >
            <FormWrapper
              title="Welcome Back"
              buttonText="Sign In"
              buttonColor="bg-indigo-600 hover:bg-indigo-700"
              extraFields={null}
            />
          </div>

          {/* Sign Up */}
          <div
            className={`absolute inset-0 p-8 transition-all duration-700 ease-in-out ${
              !isSignInForm
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-full"
            }`}
          >
            <FormWrapper
              title="Create Account"
              buttonText="Sign Up"
              buttonColor="bg-emerald-600 hover:bg-emerald-700"
              extraFields={
                <Input type="text" placeholder="Full Name" />
              }
            />
          </div>

        </div>

        {/* Toggle Section */}
        <div className="border-t border-white/30 bg-white/50 backdrop-blur-md py-4 text-center text-sm">
          {isSignInForm ? "Don't have an account?" : "Already have an account?"}
          <button
            onClick={() => dispatch(toggleForm())}
            className="ml-2 font-semibold text-indigo-600 hover:text-indigo-800 transition"
          >
            {isSignInForm ? "Sign Up" : "Sign In"}
          </button>
        </div>
      </div>
    </div>
  );
};

const FormWrapper = ({ title, buttonText, buttonColor, extraFields }) => {
  return (
    <form className="space-y-5">
      <h2 className="text-3xl font-bold text-gray-800">{title}</h2>

      {extraFields}

      <Input type="email" placeholder="Email" />
      <Input type="password" placeholder="Password" />

      <button
        type="submit"
        className={`w-full py-3 rounded-xl text-white font-semibold shadow-lg transition transform active:scale-[0.98] ${buttonColor}`}
      >
        {buttonText}
      </button>
    </form>
  );
};

const Input = ({ type, placeholder }) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className="w-full px-4 py-3 rounded-xl bg-white/70 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition shadow-sm"
    />
  );
};

export default AuthForm;
