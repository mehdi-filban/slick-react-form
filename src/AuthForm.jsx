import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggleForm } from "./formSlice";

const AuthForm = () => {
  const isSignInForm = useSelector((store) => store.form.isSignInForm);
  const dispatch = useDispatch();

  return (
    <div className="min-h-[calc(100vh-64px)] bg-gray-50 px-4 py-8 sm:py-12 flex items-center justify-center">
      <div className="w-full max-w-5xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-6 items-stretch">
          {/* Left side (title / hint) */}
          <div className="lg:col-span-5">
            <div className="h-full rounded-3xl bg-white shadow-sm ring-1 ring-black/5 p-6 sm:p-8">
              <div className="inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold bg-white ring-1 ring-black/5">
                <span className="text-blue-600">Auth</span>
              </div>

              <h1 className="mt-4 text-2xl sm:text-3xl font-bold text-gray-900">
                {isSignInForm ? "Welcome back" : "Create your account"}
              </h1>

              <p className="mt-3 text-sm sm:text-base text-gray-600 leading-relaxed">
                A clean, responsive authentication UI in the same design language as <a class="no-underline text-blue-600 hover:text-blue-800 dark:text-sky-400 text" 
                                                                                        href="https://mehdi-filban.github.io/shopflow/" target="_blank">ShopFlow</a>:
                soft shadows, rounded corners, and crisp focus states.
              </p>

              <div className="mt-6 rounded-2xl border border-gray-200 bg-gray-50 p-4">
                <p className="text-xs font-semibold text-gray-500">Tip</p>
                <p className="mt-1 text-sm text-gray-700">
                  Try it on mobile — the form area scrolls safely, and the toggle stays visible.
                </p>
              </div>
            </div>
          </div>

          {/* Right side (auth card) */}
          <div className="lg:col-span-7">
            <div className="relative rounded-3xl bg-white shadow-sm ring-1 ring-black/5 overflow-hidden">
              {/* Optional blur header strip */}
              <div className="sticky top-0 z-10 bg-white/70 backdrop-blur-xl border-b border-gray-200 px-6 sm:px-8 py-4">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-semibold text-gray-900">
                    {isSignInForm ? "Sign In" : "Sign Up"}
                  </p>

                  <button
                    type="button"
                    onClick={() => dispatch(toggleForm())}
                    className="text-sm font-semibold text-blue-600 hover:text-blue-700 transition"
                  >
                    {isSignInForm ? "Switch to Sign Up" : "Switch to Sign In"}
                  </button>
                </div>
              </div>

              {/* Panels container
                  - min height to look stable on desktop
                  - max height + internal scroll for small screens
              */}
              <div className="relative min-h-[460px]">
                {/* Sign In Panel */}
                <div
                  className={[
                    "absolute inset-0 transition-all duration-500 ease-out",
                    isSignInForm
                      ? "opacity-100 translate-x-0"
                      : "opacity-0 -translate-x-full pointer-events-none",
                  ].join(" ")}
                >
                  <div className="p-6 sm:p-8">
                    <form
                      className="space-y-4"
                      onSubmit={(e) => e.preventDefault()}
                    >
                      <div className="mb-2">
                        <h2 className="text-xl sm:text-2xl font-bold text-gray-900">
                          Sign In
                        </h2>
                        <p className="mt-1 text-sm text-gray-600">
                          Access your account securely.
                        </p>
                      </div>

                      <Input type="email" placeholder="Email" />
                      <Input type="password" placeholder="Password" />

                      <button
                        type="submit"
                        className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-2xl font-semibold shadow-sm transition active:scale-[0.98]"
                      >
                        Sign In
                      </button>

                      <div className="text-xs text-gray-500">
                        By continuing, you agree to our terms and privacy policy.
                      </div>
                    </form>
                  </div>
                </div>

                {/* Sign Up Panel */}
                <div
                  className={[
                    "absolute inset-0 transition-all duration-500 ease-out",
                    !isSignInForm
                      ? "opacity-100 translate-x-0"
                      : "opacity-0 translate-x-full pointer-events-none",
                  ].join(" ")}
                >
                  <div className="p-6 sm:p-8">
                    <form
                      className="space-y-4"
                      onSubmit={(e) => e.preventDefault()}
                    >
                      <div className="mb-2">
                        <h2 className="text-xl sm:text-2xl font-bold text-gray-900">
                          Create Account
                        </h2>
                        <p className="mt-1 text-sm text-gray-600">
                          Start in less than a minute.
                        </p>
                      </div>

                      <Input type="text" placeholder="Full Name" />
                      <Input type="email" placeholder="Email" />
                      <Input type="password" placeholder="Password" />

                      <button
                        type="submit"
                        className="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-3 rounded-2xl font-semibold shadow-sm transition active:scale-[0.98]"
                      >
                        Sign Up
                      </button>

                      <div className="text-xs text-gray-500">
                        We’ll never share your email.
                      </div>
                    </form>
                  </div>
                </div>
              </div>

              <div className="border-t border-gray-200 px-6 sm:px-8 py-4 text-sm text-gray-700">
                <span>
                  {isSignInForm
                    ? "Don't have an account?"
                    : "Already have an account?"}
                </span>
                <button
                  type="button"
                  onClick={() => dispatch(toggleForm())}
                  className="ml-2 font-semibold text-blue-600 hover:text-blue-700 transition"
                >
                  {isSignInForm ? "Sign Up" : "Sign In"}
                </button>
              </div>
            </div>

            {/* Small screens: safe spacing */}
            <div className="mt-4 text-xs text-gray-500 text-center">
              Responsive layout • Clean card UI • Smooth slide animation
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

function Input({ type, placeholder }) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className="w-full p-3 rounded-2xl border border-gray-200 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500/40 focus:border-blue-400 transition"
    />
  );
}

export default AuthForm;
