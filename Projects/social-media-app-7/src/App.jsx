import "./App.css";
import Header from "./componenet/Header";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Footer from "./componenet/Footer";
import Sidebar from "./componenet/Sidebar";
import CreatePost from "./componenet/CreatePost";
import PostList from "./componenet/PostList";
import { useState } from "react";
import PostListProvider from "./store/post-list-store";

function App() {
  const [selectedTab, setSelectedTab] = useState("Home");
  return (
    <>
      <PostListProvider>
        <div className="app-container">
          <Sidebar selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
          <div className="content">
            <Header />
            {selectedTab === "Home" ? <PostList /> : <CreatePost />}
            <Footer />
          </div>
        </div>
      </PostListProvider>
    </>
  );
}

export default App;
