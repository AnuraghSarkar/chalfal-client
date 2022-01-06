import Input from "./Input";
import Button from "./Button";
import { useState, useContext } from "react";
import axios from "axios";
import AuthModalContext from "./AuthModalContext";

const AuthModal = (props) => {
  const [modalType, setModalType] = useState("login");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const modalContext = useContext(AuthModalContext);

  const visibleClass = modalContext.show ? "block" : "hidden";

  const register = async (e) => {
    e.preventDefault();
    const data = { email, username, password };
    axios.post("http://localhost:4000/register", data, {
      withCredentials: true,
    });
  };

  return (
    <div
      className={
        "w-screen h-screen fixed z-20 top-0 left-0 flex" + visibleClass
      }
      style={{ backgroundColor: "rgba(0,0,0,.6" }}
    >
      <div className="border border-chalfal_border w-3/4  sm:w-1/2 md:w-1/2 bg-chalfal_color p-5 text-chalfal_text self-center mx-auto rounded-md">
        {modalType === "login" ? (
          <h1 className="text-2xl mb-5">Login</h1>
        ) : (
          <h1 className="text-2xl mb-5">Sign Up</h1>
        )}
        {modalType === "login" ? (
          <>
            <label>
              <span className="text-chalfal_text-darker text-sm">
                Username:
              </span>
              <Input type="text" className="mb-3 w-full" />
            </label>
            <label>
              <span className="text-chalfal_text-darker text-sm">
                Password:
              </span>
              <Input type="password" className="mb-3 w-full" />
            </label>
          </>
        ) : (
          <>
            <label>
              <span className="text-chalfal_text-darker text-sm">Email:</span>
              <Input
                type="email"
                className="mb-3 w-full"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </label>
            <label>
              <span className="text-chalfal_text-darker text-sm">
                Username:
              </span>
              <Input
                type="text"
                className="mb-3 w-full"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </label>
            <label>
              <span className="text-chalfal_text-darker text-sm">
                Password:
              </span>
              <Input
                type="password"
                className="mb-3 w-full"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </label>
          </>
        )}
        {modalType === "login" && (
          <Button className="w-full mb-3" style={{ borderRadius: ".4rem" }}>
            Log In
          </Button>
        )}

        {modalType === "register" && (
          <Button
            className="w-full mb-3"
            onClick={(e) => register(e)}
            style={{ borderRadius: ".4rem" }}
          >
            Sign Up
          </Button>
        )}

        {modalType === "login" ? (
          <div>
            New to Chalfal?
            <button
              className="text-blue-600 ml-2"
              onClick={() => setModalType("register")}
            >
              Sign Up
            </button>
          </div>
        ) : (
          <div>
            Already a member?
            <button
              className="text-blue-600 ml-2"
              onClick={() => setModalType("login")}
            >
              Log In
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default AuthModal;
