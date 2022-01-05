import Input from "./Input";
import Button from "./Button";
import { useState } from "react";

const AuthModal = () => {
  const [modalType, setModalType] = useState("login");
  const [email, setEmail] = useState("");
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div
      className="w-screen h-screen fixed z-20 top-0 left-0 flex"
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
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
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

        <Button className="w-full mb-3" style={{ borderRadius: ".4rem" }}>
          {modalType === "login" ? "Log In" : "Sign Up"}
        </Button>
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
