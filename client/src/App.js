import logo from "./images/logo.png";
function App() {
  return (
    <div className="App">
      <header className="flex w-full bg-chalfal_color p-2">
        <div className="mx-4">
          <img src={logo} alt="Logo" className="w-8 h-8" />
        </div>
        <form action="">
          <input type="text" className="bg-gray-800 h-8" />
        </form>
      </header>
    </div>
  );
}

export default App;
