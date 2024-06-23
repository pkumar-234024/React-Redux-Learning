import Header from "../componenet/Header";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Footer from "../componenet/Footer";
import Sidebar from "../componenet/Sidebar";
import CreatePost from "../componenet/CreatePost";
import PostList from "../componenet/PostList";
import { useState, useContext } from "react";
import PostListProvider from "../store/post-list-store";
import "./App.css";
import WelcomeMessage from "../componenet/WelcomeMessage";
import { Outlet } from "react-router-dom";
function App() {
  const [selectedTab, setSelectedTab] = useState("Home");

  return (
    <>
      <PostListProvider>
        <div className="app-container">
          <Sidebar selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
          <div className="content">
            <Header />
            <Outlet />
            <Footer />
          </div>
        </div>
      </PostListProvider>
    </>
  );
}

export default App;
