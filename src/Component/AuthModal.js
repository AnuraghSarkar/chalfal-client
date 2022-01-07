import Input from "./Input";
import Button from "./Button";
import { useState, useContext } from "react";
import axios from "axios";
import AuthModalContext from "../Store/AuthModalContext";
import ClickOutHandler from "react-clickout-handler";
import UserContext from "../Store/UserContext";

function AuthModal() {
  const [modalType, setModalType] = useState("login");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const modalContext = useContext(AuthModalContext);
  const user = useContext(UserContext);

  const visibleClass = modalContext.show ? "block" : "hidden";
  if (modalContext.show && modalContext.show !== modalType) {
    setModalType(modalContext.show);
  }

  function register(e) {
    e.preventDefault();
    const data = { email, username, password };
    axios
      .post("http://localhost:4000/register", data, { withCredentials: true })
      .then(() => {
        user.setUser({ username });
        modalContext.setShow(false);
        setEmail("");
        setPassword("");
        setUsername("");
      });
  }

  function login() {
    const data = { username, password };
    axios
      .post("http://localhost:4000/login", data, { withCredentials: true })
      .then(() => {
        modalContext.setShow(false);
        user.setUser({ username });
      });
  }

  return (
    <div
      className={
        "w-screen h-screen fixed top-0 left-0 z-30 flex " + visibleClass
      }
      style={{ backgroundColor: "rgba(0,0,0,.6)" }}
    >
      <ClickOutHandler onClickOut={() => modalContext.setShow(false)}>
        <div class=" p-6 m-auto w-3/4 sm:w-1/2 lg:w-1/4 bg-gray-800 rounded-md shadow-md ">
          <h1 class="text-3xl font-semibold text-center text-white">
            {modalType === "login" ? "Login" : "Register"}
          </h1>

          <form class="mt-6">
            {modalType === "register" && (
              <div>
                <label for="username" class="block text-sm text-gray-200">
                  Email
                </label>
                <Input
                  type="email"
                  className="mb-3 w-full"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            )}
            <div>
              <label for="username" class="block text-sm mt-4 text-gray-200">
                Username
              </label>
              <Input
                type="text"
                className="mb-3 w-full"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>

            <div class="mt-4">
              <div class="flex items-center justify-between">
                <label for="password" class="block text-sm text-gray-200">
                  Password
                </label>
              </div>

              <Input
                type="password"
                className="mb-3 w-full"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <div class="mt-6">
              {modalType === "login" ? (
                <button
                  class="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600"
                >
                  Log In
                </button>
              ) : (
                <button
                  class="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600"
                >
                  Sign Up
                </button>
              )}
            </div>
          </form>

          <div class="flex items-center justify-between mt-4">
            <span class="w-1/5 border-b border-gray-400 lg:w-1/5"></span>

            <p class="text-xs text-center  uppercase text-gray-400 hover:underline">
              or {modalType === "login" ? "Login" : "Register"} with Google
            </p>

            <span class="w-1/5 border-b border-gray-400 lg:w-1/5"></span>
          </div>

          <div class="flex items-center mt-6 -mx-2">
            <button
              type="button"
              class="flex items-center justify-center w-full px-6 py-2 mx-2 text-sm font-medium text-white transition-colors duration-200 transform bg-blue-500 rounded-md hover:bg-blue-400 focus:bg-blue-400 focus:outline-none"
            >
              <svg class="w-4 h-4 mx-2 fill-current" viewBox="0 0 24 24">
                <path d="M12.24 10.285V14.4h6.806c-.275 1.765-2.056 5.174-6.806 5.174-4.095 0-7.439-3.389-7.439-7.574s3.345-7.574 7.439-7.574c2.33 0 3.891.989 4.785 1.849l3.254-3.138C18.189 1.186 15.479 0 12.24 0c-6.635 0-12 5.365-12 12s5.365 12 12 12c6.926 0 11.52-4.869 11.52-11.726 0-.788-.085-1.39-.189-1.989H12.24z"></path>
              </svg>

              <span class="hidden mx-2 sm:inline">
                Sign {modalType === "login" ? "in" : "up"} with Google
              </span>
            </button>
          </div>
          {modalType === "login" ? (
            <p class="mt-8 text-xs font-light text-center text-gray-400">
              Don't have an account?
              <button
                href="/"
                class="font-medium text-gray-200 hover:underline"
                onClick={() => modalContext.setShow("register")}
              >
                Create One
              </button>
            </p>
          ) : (
            <p class="mt-8 text-xs font-light text-center text-gray-400">
              Already have an account?
              <button
                href="/"
                class="font-medium text-gray-200 hover:underline"
                onClick={() => modalContext.setShow("login") }
              >
                Register
              </button>
            </p>
          )}
        </div>
      </ClickOutHandler>
    </div>
  );
}

export default AuthModal;
