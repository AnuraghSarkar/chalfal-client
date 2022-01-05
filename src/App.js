// Components
import Header from "./Component/Header";
import BoardHeader from "./Component/BoardHeader";
import PostForm from "./Component/Post";
import PostList from "./Component/PostList";
import AuthModal from "./Component/AuthModal";

function App() {
  return (
    <div className="App">
      <Header />
      <AuthModal />
      <BoardHeader />
      <PostForm />
      <PostList />
    </div>
  );
}

export default App;
