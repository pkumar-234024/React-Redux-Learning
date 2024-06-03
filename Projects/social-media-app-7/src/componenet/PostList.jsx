import { useContext, useState } from "react";
import Post from "./Post";
import { PostList as PostListData } from "../store/post-list-store";
import WelcomeMessage from "./WelcomeMessage";

const PostList = () => {
  const { postList, addMassPost } = useContext(PostListData);

  const [getDataFecthed, setDataFecthed] = useState(false);

  if (!getDataFecthed) {
    fetch("https://dummyjson.com/posts")
      .then((res) => res.json())
      .then((data) => {
        addMassPost(data.posts);
      });
    setDataFecthed(true);
  }

  return (
    <>
      <div> </div>
      {postList.length === 0 && <WelcomeMessage />}
      {postList.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </>
  );
};

export default PostList;
