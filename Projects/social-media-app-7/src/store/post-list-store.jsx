import { createContext, useReducer } from "react";
import { DefaultContext } from "react-icons/lib";

export const PostList = createContext({
  postList: [],
  addPost: () => {},
  deletePost: () => {},
  addMassPost: () => {},
});

const PostListReducer = (currPostList, action) => {
  let newPostList = currPostList;

  if (action.type === "ADD_POST") {
    const newPost = {
      id: currPostList.length + 1,
      title: action.payload.postTitle,
      body: action.payload.postBody,
      reaction: action.payload.reactions,
      tags: action.payload.tags,
      userId: currPostList.length + 100,
    };
    newPostList = [...currPostList, newPost];
  } else if (action.type === "ADD_MASS_POST") {
    newPostList = action.payload.posts;
  } else if (action.type === "DELETE_POST") {
    newPostList = currPostList.filter(
      (post) => post.id !== action.payload.postId
    );
  }
  return newPostList;
};

const PostListProvider = ({ children }) => {
  const addPost = ({ userId, postBody, postTitle, reactions, tags }) => {
    disPatchPostList({
      type: "ADD_POST",
      payload: {
        userId,
        postBody,
        postTitle,
        reactions,
        tags,
      },
    });
  };

  const addMassPost = (posts) => {
    disPatchPostList({
      type: "ADD_MASS_POST",
      payload: {
        posts,
      },
    });
  };

  const deletePost = (postId) => {
    disPatchPostList({
      type: "DELETE_POST",
      payload: {
        postId,
      },
    });
  };
  const [postList, disPatchPostList] = useReducer(PostListReducer, []);

  return (
    <PostList.Provider value={{ postList, addPost, deletePost, addMassPost }}>
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
    tags: ["ghd"],
    userId: "user-1",
  },
  {
    id: "4",
    title: "Title-4",
    body: "4-Some quick example text to build on the card title and make up the bulk of the card's content.",
    reactions: 0,
    tags: ["qwqw"],
    userId: "user-1",
  },
  {
    id: "5",
    title: "Title-5",
    body: "5-Some quick example text to build on the card title and make up the bulk of the card's content.",
    reactions: 0,
    tags: ["asda"],
    userId: "user-1",
  },
];

export default PostListProvider;
