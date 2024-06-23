import { useContext } from "react";
import { useRef } from "react";
import { PostList } from "../store/post-list-store";
import { useNavigate } from "react-router-dom";

const CreatePost = () => {
  const { addPost } = useContext(PostList);
  const navigate = useNavigate();
  const userIdElement = useRef();
  const postTitleElement = useRef();
  const postBodyElement = useRef();
  const reationsElement = useRef();
  const tagsElement = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log("submit handle clicked");
    const userId = userIdElement.current.value;
    const postTitle = postTitleElement.current.value;
    const postBody = postBodyElement.current.value;
    const reactions = reationsElement.current.value;
    const tags = tagsElement.current.value.split(" ");

    userIdElement.current.value = "";
    postTitleElement.current.value = "";
    postBodyElement.current.value = "";
    reationsElement.current.value = "";
    tagsElement.current.value = "";

    fetch("https://dummyjson.com/posts/add", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        title: postTitle,
        body: postBody,
        userId: userId,
        reactions: reactions,
        tags: tags,
        /* other post data */
      }),
    })
      .then((res) => res.json())
      .then((resObj) => {
        addPost(resObj);
        navigate("/");
      });
  };
  return (
    <form className="creat-post" onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="foruserId" className="form-label">
          Enter your User Id here
        </label>
        <input
          type="text"
          className="form-control"
          id="userId"
          ref={userIdElement}
          title="How are you feeling today ....."
          placeholder="Enter Title"
        />
      </div>

      <div className="mb-3">
        <label htmlFor="fortitle" className="form-label">
          Post Title
        </label>
        <input
          type="text"
          className="form-control"
          id="title"
          ref={postTitleElement}
          placeholder="How are you feeling today ....."
        />
      </div>

      <div className="mb-3">
        <label htmlFor="forbody" className="form-label">
          Post Content
        </label>
        <textarea
          type="text"
          rows={4}
          className="form-control"
          ref={postBodyElement}
          id="body"
          placeholder="tell us more about this"
        />
      </div>

      <div className="mb-3">
        <label htmlFor="forreactions" className="form-label">
          Numder Of reaction
        </label>
        <input
          type="text"
          className="form-control"
          id="reactions"
          ref={reationsElement}
          placeholder="How many people reacted to this"
        />
      </div>

      <div className="mb-3">
        <label htmlFor="fortags" className="form-label">
          Tags
        </label>
        <input
          type="text"
          className="form-control"
          id="tsgs"
          ref={tagsElement}
          placeholder="Please enter tags using space"
        />
      </div>

      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
};

export default CreatePost;
