import logo from "./images/logo.png";
import { SearchIcon } from "@heroicons/react/solid";

function App() {
  return (
    <div className="App">
      <header className="flex w-full bg-chalfal_color p-2">
        <div className="mx-4">
          <img src={logo} alt="Logo" className="w-8 h-8" />
        </div>
        <form
          action=""
          className="bg-chalfal_color-brighter flex rounded-md px-3 border border-gray-700"
        >
          <SearchIcon className="text-gray-300 h-6 w-6 mt-1" />
          <input
            type="text"
            placeholder="Search"
            className="bg-chalfal_color-brighter text-sm p-1 pl-2 pr-0 focus:outline-none block text-white"
          />
        </form>
      </header>
    </div>
  );
}

export default App;
