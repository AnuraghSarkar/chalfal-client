import logo from "./images/logo.png";
import Avatar from "./images/avatar.png";
import {
  BellIcon,
  ChatIcon,
  PlusIcon,
  SearchIcon,
  ChevronDownIcon,
} from "@heroicons/react/outline";

function App() {
  return (
    <div className="App">
      <header className="flex w-full bg-chalfal_color p-2">
        <div className="mx-4 flex">
          <img src={logo} alt="Logo" className="w-8 h-8 mr-4" />
          <form
            action=""
            className="bg-chalfal_color-brighter flex flex-grow mx-4 rounded-md px-3 border border-gray-700"
          >
            <SearchIcon className="text-gray-300 h-6 w-6 mt-1" />
            <input
              type="text"
              placeholder="Search"
              className="bg-chalfal_color-brighter text-sm p-1 pl-2 pr-0 focus:outline-none block text-white"
            />
          </form>
          <button className="px-2 py-1">
            <ChatIcon className="text-gray-300 h-6 w-6 mx-2" />
          </button>
          <button className="px-2 py-1">
            <BellIcon className="text-gray-300 h-6 w-6 mx-2" />
          </button>
          <button className="px-2 py-1">
            <PlusIcon className="text-gray-300 h-6 w-6 mx-2" />
          </button>

          <button className="rounded-md flex ml-4">
            <div className="w-8 h-8 bg-gray-600 rounded-md">
              <img
                src={Avatar}
                alt="Avatar"
                style={{ filter: "invert(100)" }}
                className="block"
              />
            </div>

            <ChevronDownIcon className="text-gray-500 h-5 w-5 mt-2 ml-0" />
          </button>
        </div>
      </header>
    </div>
  );
}

export default App;
