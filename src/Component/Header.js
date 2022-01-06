import Logo from "../images/logo.png";
import Avatar from "../images/avatar.png";
import {
  BellIcon,
  ChatIcon,
  ChevronDownIcon,
  LoginIcon,
  LogoutIcon,
  PlusIcon,
  SearchIcon,
  UserIcon,
} from "@heroicons/react/outline";
import Button from "./Button";
import AuthModalContext from "../Store/AuthModalContext";
import UserContext from "../Store/UserContext";
import { useState, useContext } from "react";
import ClickOutHandler from "react-clickout-handler";

function Header() {
  const [userDropdownVisibilityClass, setUserDropdownVisibilityClass] =
    useState("hidden");
  function toggleUserDropdown() {
    if (userDropdownVisibilityClass === "hidden") {
      setUserDropdownVisibilityClass("block");
    } else {
      setUserDropdownVisibilityClass("hidden");
    }
  }
  const authModal = useContext(AuthModalContext);
  const user = useContext(UserContext);
  return (
    <header className="w-full bg-chalfal_color p-2">
      <div className="mx-4 flex relative">
        <img src={Logo} alt="Avatar" className="w-8 h-8 mr-4" />
        <form
          action=""
          className="bg-chalfal_color-brighter px-3 flex rounded-md border border-chalfal_border mx-4 flex-grow"
        >
          <SearchIcon className="text-gray-300 h-6 w-6 mt-1" />
          <input
            type="text"
            className="bg-chalfal_color-brighter text-sm p-1 pl-2 pr-0 block focus:outline-none text-white"
            placeholder="Search"
          />
        </form>

        {user.username && (
          <>
            <button className="px-2 py-1">
              <ChatIcon className="text-gray-400 w-6 h-6 mx-2" />
            </button>
            <button className="px-2 py-1">
              <BellIcon className="text-gray-400 w-6 h-6 mx-2" />
            </button>
            <button className="px-2 py-1">
              <PlusIcon className="text-gray-400 w-6 h-6 mx-2" />
            </button>
          </>
        )}

        {!user.username && (
          <div className="mx-2 hidden sm:block">
            <Button
              outline={1}
              className="mr-1 h-8"
              onClick={() => authModal.setShow("login")}
            >
              Log In
            </Button>
            <Button
              className="h-8"
              onClick={() => authModal.setShow("register")}
            >
              Sign Up
            </Button>
          </div>
        )}

        <ClickOutHandler
          onClickOut={() => setUserDropdownVisibilityClass("hidden")}
        >
          <button
            className="rounded-md flex ml-4 border border-gray-700"
            onClick={() => toggleUserDropdown()}
          >
            {!user.username && (
              <UserIcon className="w-6 h-6 text-gray-400 m-1" />
            )}
            {user.username && (
              <div className="bg-gray-600 rounded-md w-8 h-8">
                <img
                  src={Avatar}
                  alt=""
                  style={{ filter: "invert(100%)" }}
                  className="block"
                />
              </div>
            )}

            <ChevronDownIcon className="text-gray-500 w-5 h-5 mt-2 m-1" />
          </button>
          <div
            className={
              "absolute right-0 top-8 bg-chalfal_color border border-gray-700 z-10 rounded-md text-chalfal_text overflow-hidden " +
              userDropdownVisibilityClass
            }
          >
            {user.username && (
              <span className="block w-50 py-2 px-3 text-sm">
                Hello, {user.username}!
              </span>
            )}
            {!user.username && (
              <button
                onClick={() => authModal.setShow("login")}
                className=" flex w-50 py-2 px-3 hover:bg-gray-300 hover:text-black text-sm"
              >
                <LoginIcon className="w-5 h-5 mr-2" />
                Log In / Sign Up
              </button>
            )}
            {user.username && (
              <button
                onClick={() => user.logout()}
                className="flex w-full py-2 px-3 hover:bg-gray-300 hover:text-black text-sm"
              >
                <LogoutIcon className="w-5 h-5 mr-2" />
                Logout
              </button>
            )}
          </div>
        </ClickOutHandler>
      </div>
    </header>
  );
}

export default Header;
