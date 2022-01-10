// Components
import Header from "./Component/Header";
import BoardHeader from "./Component/BoardHeader";
import PostForm from "./Component/Post";
import PostList from "./Component/PostList";
import AuthModal from "./Component/AuthModal";
import AuthModalContext from "./Store/AuthModalContext";
import UserContext from "./Store/UserContext";
import { useState, useEffect } from "react";
import axios from "axios";


const App=()=> {
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [user, setUser] = useState({});
  useEffect(() => {
    axios
      .get("api/auth/user", { withCredentials: true })
      .then((response) => setUser(response.data));
  }, []);
  function logout() {
    axios
      .post("api/auth/logout", {}, { withCredentials: true })
      .then(() => setUser({}));
  }

  return (
    <div className="App">
      <AuthModalContext.Provider
        value={{ show: showAuthModal, setShow: setShowAuthModal }}
      >
        <UserContext.Provider value={{ ...user, logout, setUser }}>
          <Header />
          <AuthModal />
          <BoardHeader />
          <PostForm />
          <PostList />
        </UserContext.Provider>
      </AuthModalContext.Provider>
    </div>
  );
}

export default App;
