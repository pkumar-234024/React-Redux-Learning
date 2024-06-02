import { createContext, useReducer } from "react";

export const PostList = createContext({
  postList: [],
  addPost: () => {},
  deletePost: () => {},
});

const PostListReducer = (currPostList, action) => {
  return currPostList;
};

const PostListProvider = ({ children }) => {
  const addPost = () => {};

  const deletePost = () => {};
  const [postList, disPatchPostList] = useReducer(
    PostListReducer,
    DEFAULT_POST_LIST
  );

  return (
    <PostList.Provider value={{ postList, addPost, deletePost }}>
      {children}
    </PostList.Provider>
  );
};

const DEFAULT_POST_LIST = [
  {
    id: "1",
    title: "Going to Mumbai",
    body: "Hi Friends, I am going to Mumbai for my vacations. Hope to enjoy a lot. Peace out.",
    reactions: 10,
    tags: ["vacation", "Mumbai", "Enjoying"],
    userId: "user-1",
  },

  {
    id: "2",
    title: "Pass ho gye Bhai",
    body: "4 saal ki masti k baad pass ho gye. Hard to beleive.",
    reactions: 15,
    tags: ["Graduating", "Unbelievable"],
    userId: "user-12",
  },
  {
    id: "3",
    title: "Title-3",
    body: "3-Some quick example text to build on the card title and make up the bulk of the card's content.",
    reactions: 0,
    tags: [],
    userId: "",
  },
  {
    id: "4",
    title: "Title-4",
    body: "4-Some quick example text to build on the card title and make up the bulk of the card's content.",
    reactions: 0,
    tags: [],
    userId: "",
  },
  {
    id: "5",
    title: "Title-5",
    body: "5-Some quick example text to build on the card title and make up the bulk of the card's content.",
    reactions: 0,
    tags: [],
    userId: "",
  },
];

export default PostListProvider;
