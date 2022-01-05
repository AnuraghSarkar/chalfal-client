import logo from "../images/logo.png";
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

import { useState } from "react";
import ClickOutHandler from "react-clickout-handler";

const Header = () => {
  const [userDropdownVisibilityClass, setUserDropdownVisibilityClass] =
    useState("hidden");
  const toggleUserDropdownVisibility = () => {
    if (userDropdownVisibilityClass === "hidden") {
      setUserDropdownVisibilityClass("visible");
    } else {
      setUserDropdownVisibilityClass("hidden");
    }
  };
  return (
    <header className="w-full bg-chalfal_color p-2">
      <div className="mx-4 flex relative">
        <img src={logo} alt="Logo" className="w-8 h-8 mr-4" />
        <form
          action=""
          className="bg-chalfal_color-brighter px-3 flex rounded-md border border-chalfal_border mx-4"
        >
          <SearchIcon className="text-gray-300 h-6 w-6 mt-1" />
          <input
            type="text"
            placeholder="Search"
            className="bg-chalfal_color-brighter text-sm p-1 pl-2 pr-0 focus:outline-none block text-white"
          />
        </form>
        {/* <button className="px-2 py-1">
          <ChatIcon className="text-gray-300 h-6 w-6 mx-2" />
        </button>
        <button className="px-2 py-1">   
          <BellIcon className="text-gray-300 h-6 w-6 mx-2" />
        </button>
        <button className="px-2 py-1">
          <PlusIcon className="text-gray-300 h-6 w-6 mx-2" />
        </button> */}
        <div className="mx-2 hidden sm:block">
          <Button outline className="mr-1">
            Log In
          </Button>
          <Button className="">Sign Up</Button>
        </div>

        <ClickOutHandler
          onClickOut={() => setUserDropdownVisibilityClass("hidden")}
        >
          <button
            className="rounded-md flex ml-4"
            onClick={toggleUserDropdownVisibility}
          >
            <UserIcon className="w-6 h-6 text-gray-400 m-1 border border-gray-700" />

            {/* <div className="w-8 h-8 bg-gray-600 rounded-md">
            <img
              src={Avatar}
              alt="Avatar"
              style={{ filter: "invert(100)" }}
              className="block"
            />
          </div> */}

            <ChevronDownIcon className="text-gray-500 h-5 w-5 mt-2 m-1" />
          </button>
        </ClickOutHandler>

        <div
          className={
            "absolute right-0 top-8 bg-chalfal_color border border-gray-700 z-10 rounded-md text-chalfal_text overflow-hidden " +
            userDropdownVisibilityClass
          }
        >
          <button className="flex w-50 py-2 px-3 hover:bg-gray-300 hover:text-black text-sm">
            <LoginIcon className="w-5 h-5 mr-2" />
            Log In / Sign Up
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
