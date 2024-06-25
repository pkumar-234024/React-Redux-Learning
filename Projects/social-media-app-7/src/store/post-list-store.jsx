import {
  createContext,
  useCallback,
  useMemo,
  useReducer,
  useEffect,
  useState,
} from "react";

export const PostList = createContext({
  postList: [],
  addPost: () => {},
  deletePost: () => {},
});

const PostListReducer = (currPostList, action) => {
  let newPostList = currPostList;

  if (action.type === "ADD_POST") {
    newPostList = [action.payload.post, ...currPostList];
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
  const [postList, disPatchPostList] = useReducer(PostListReducer, []);
  // const [fetching, setFetching] = useState(false);
  // const controller = new AbortController();
  // const signal = controller.signal;

  const addPost = (post) => {
    disPatchPostList({
      type: "ADD_POST",
      payload: {
        post,
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

  const deletePost = useCallback(
    (postId) => {
      disPatchPostList({
        type: "DELETE_POST",
        payload: {
          postId,
        },
      });
    },
    [disPatchPostList]
  );

  // useEffect(() => {
  //   setFetching(true);
  //   fetch("https://dummyjson.com/posts", { signal })
  //     .then((res) => res.json())
  //     .then((data) => {
  //       addMassPost(data.posts);
  //       setFetching(false);
  //     });

  //   return () => {
  //     controller.abort();
  //   };
  // }, []);
  //  //useMemo
  //   const arr = [5, 4, 3, 2, 1];
  //   const sortedArray = useMemo(() => arr.sort(), [arr]);
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
