import Input from "./Input";
import { useState, useContext } from "react";
import axios from "axios";
import AuthModalContext from "../Store/AuthModalContext";
import ClickOutHandler from "react-clickout-handler";
import UserContext from "../Store/UserContext";
import { toast } from "react-toastify";
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
  const register = (e) => {
    e.preventDefault();
    const data = { email, username, password };
    axios
      .post("http://localhost:4000/api/auth/register", data, {
        withCredentials: true,
      })
      .then((res) => {
        user.setUser({ username });
        modalContext.setShow(false);
        setEmail("");
        setPassword("");
        setUsername("");
        toast(res.data.success);
      })
      .catch((err) => {
        toast(err.response.data.err);
      });
  };
  const login = () => {
    const data = { username, password };
    axios
      .post("http://localhost:4000/api/auth/login", data, {
        withCredentials: true,
      })
      .then((res) => {
        modalContext.setShow(false);
        user.setUser({ username });
        toast(res.data.success);
      })
      .catch((err) => {
        toast(err.response.data.err);
      });
  };
  return (
    <div
      className={
        "w-screen h-screen fixed top-0 left-0 z-30 flex " + visibleClass
      }
      style={{ backgroundColor: "rgba(0,0,0,.6)" }}
    >
      <ClickOutHandler onClickOut={() => modalContext.setShow(false)}>
        <div className=" p-6 m-auto w-3/4 sm:w-1/2 lg:w-1/4 bg-gray-800 rounded-md shadow-md ">
          <h1 className="text-3xl font-semibold text-center text-white">
            {modalType === "login" ? "Login" : "Register"}
          </h1>

          <form className="mt-6">
            {modalType === "register" && (
              <>
                <div>
                  <label htmlFor="email" className="block text-sm text-gray-200">
                    Email
                  </label>
                  <Input
                    type="email"
                    className="mb-3 w-full"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email"
                    required
                  />
                </div>
              </>
            )}
            <div className="mt-4">
              <label htmlFor="username" className="block text-sm mt-4 text-gray-200">
                Username
              </label>
              <Input
                type="text"
                className="mb-3 w-full"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Username"
                required
              />
            </div>

            <div className="mt-4">
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-sm text-gray-200">
                  Password
                </label>
              </div>

              <Input
                type="password"
                className="mb-3 w-full"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                required
              />
            </div>

            <div className="mt-6">
              {modalType === "login" ? (
                <button
                  onClick={() => login()}
                  className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600"
                >
                  Log In
                </button>
              ) : (
                <button
                  onClick={(e) => register(e)}
                  className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600"
                >
                  Sign Up
                </button>
              )}
            </div>
          </form>

          {modalType === "login" ? (
            <p className="mt-8 text-xs font-light text-center text-gray-400">
              Don't have an account?
              <button
                href="/"
                className="font-medium text-gray-200 hover:underline"
                onClick={() => modalContext.setShow("register")}
              >
                <span className="ml-2">Create One</span>
              </button>
            </p>
          ) : (
            <p className="mt-8 text-xs font-light text-center text-gray-400">
              Already have an account?
              <button
                href="/"
                className="font-medium text-gray-200 hover:underline"
                onClick={() => modalContext.setShow("login")}
              >
                <span className="ml-2">Log In</span>
              </button>
            </p>
          )}
        </div>
      </ClickOutHandler>
    </div>
  );
}

export default AuthModal;