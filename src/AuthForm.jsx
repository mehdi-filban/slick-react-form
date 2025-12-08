import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggleForm } from "./formSlice";

const AuthForm = () => {
  const isSignInForm = useSelector((store) => store.form.isSignInForm);
  const dispatch = useDispatch();

  const handleToggleForm = () => {
    dispatch(toggleForm());
  };

  return (
    <div
      className='relative w-full max-w-md p-8 space-y-8 bg-white rounded-xl shadow-lg overflow-hidden'
      style={{ minHeight: "450px" }}
    >
      {/* Sign In Form */}
      <div
        className={`absolute top-0 left-0 w-full h-full p-8 transition-all duration-700 ease-in-out ${
          isSignInForm
            ? "opacity-100 translate-x-0"
            : "opacity-0 -translate-x-full"
        }`}
      >
        <form className='space-y-6' onSubmit={(e) => e.preventDefault()}>
          <h2 className='text-2xl font-bold'>Sign In</h2>

          <input
            className='w-full p-3 border rounded-lg'
            type='email'
            placeholder='Email'
          />
          <input
            className='w-full p-3 border rounded-lg'
            type='password'
            placeholder='Password'
          />

          <button
            type='submit'
            className='w-full py-3 rounded-lg bg-blue-600 text-white font-semibold'
          >
            Sign In
          </button>
        </form>
      </div>

      {/* Sign Up Form */}
      <div
        className={`absolute top-0 left-0 w-full h-full p-8 transition-all duration-700 ease-in-out ${
          !isSignInForm
            ? "opacity-100 translate-x-0"
            : "opacity-0 translate-x-full"
        }`}
      >
        <form className='space-y-6' onSubmit={(e) => e.preventDefault()}>
          <h2 className='text-2xl font-bold'>Create Account</h2>

          <input
            className='w-full p-3 border rounded-lg'
            type='text'
            placeholder='Full Name'
          />
          <input
            className='w-full p-3 border rounded-lg'
            type='email'
            placeholder='Email'
          />
          <input
            className='w-full p-3 border rounded-lg'
            type='password'
            placeholder='Password'
          />

          <button
            type='submit'
            className='w-full py-3 rounded-lg bg-green-600 text-white font-semibold'
          >
            Sign Up
          </button>
        </form>
      </div>

      {/* Toggle Button Area (always visible at bottom) */}
      <div className='absolute bottom-4 left-0 w-full flex justify-center text-sm'>
        <span>
          {isSignInForm ? "Don't have an account?" : "Already have an account?"}
        </span>
        <button
          type='button'
          onClick={handleToggleForm}
          className='font-semibold text-blue-600 hover:underline ml-1'
        >
          {isSignInForm ? "Sign Up" : "Sign In"}
        </button>
      </div>
    </div>
  );
};

export default AuthForm;
