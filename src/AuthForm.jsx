import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggleForm } from "./formSlice";

const AuthForm = () => {
  const isSignInForm = useSelector((store) => store.form.isSignInForm);
  const dispatch = useDispatch();

  return (
    <div
      className="min-h-screen flex items-center justify-center px-4"
      style={{
        backgroundImage:
          "radial-gradient(#e5e7eb 1px, transparent 1px)",
        backgroundSize: "24px 24px",
      }}
    >
      <div className="w-full max-w-md">
        <div className="relative rounded-3xl bg-white shadow-sm ring-1 ring-black/5 overflow-hidden">
          
          {/* Header */}
          <div className="px-6 py-5 border-b border-gray-200">
            <h2 className="text-xl font-semibold text-gray-900">
              {isSignInForm ? "Sign In" : "Create Account"}
            </h2>
          </div>

          {/* Form Container */}
          <div className="relative min-h-[420px]">

            {/* Sign In */}
            <div
              className={`absolute inset-0 p-6 transition-all duration-500 ease-out ${
                isSignInForm
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 -translate-x-full pointer-events-none"
              }`}
            >
              <form className="space-y-4">
                <Input type="email" placeholder="Email" />
                <Input type="password" placeholder="Password" />

                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-2xl font-semibold transition active:scale-[0.98]">
                  Sign In
                </button>
              </form>
            </div>

            {/* Sign Up */}
            <div
              className={`absolute inset-0 p-6 transition-all duration-500 ease-out ${
                !isSignInForm
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 translate-x-full pointer-events-none"
              }`}
            >
              <form className="space-y-4">
                <Input type="text" placeholder="Full Name" />
                <Input type="email" placeholder="Email" />
                <Input type="password" placeholder="Password" />

                <button className="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-3 rounded-2xl font-semibold transition active:scale-[0.98]">
                  Sign Up
                </button>
              </form>
            </div>
          </div>

          {/* Toggle */}
          <div className="border-t border-gray-200 px-6 py-4 text-sm text-center">
            {isSignInForm
              ? "Don't have an account?"
              : "Already have an account?"}
            <button
              onClick={() => dispatch(toggleForm())}
              className="ml-2 font-semibold text-blue-600 hover:text-blue-700 transition"
            >
              {isSignInForm ? "Sign Up" : "Sign In"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const Input = ({ type, placeholder }) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className="w-full p-3 rounded-2xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500/40 focus:border-blue-400 transition"
    />
  );
};

export default AuthForm;
