// Components
import Header from "./Component/Header";
import BoardHeader from "./Component/BoardHeader";
import PostForm from "./Component/Post";
import PostList from "./Component/PostList";
import AuthModal from "./Component/AuthModal";
import AuthModalContext from "./Component/AuthModalContext";
import { useState } from "react";

function App() {
  return (
    <div className="App">
      <AuthModalContext.Provider value={{ show: false }}>
        <Header />
        <AuthModal />
        <BoardHeader />
        <PostForm />
        <PostList />
      </AuthModalContext.Provider>
    </div>
  );
}

export default App;
