import { useState, useEffect } from "react";

const AddPost = () => {
  const [title, setTitle] = useState("AITBP ");
  const [titleError, setTitleError] = useState("");
  const [post, setPost] = useState("");
  const [isDisabled, setIsDisabled] = useState(true);

  useEffect(() => {
    let properTitle = false;
    let properPost = false;
    title.startsWith("AITBP") && title.split(" ").length > 2
      ? (properTitle = true)
      : (properTitle = false);

    post.split(" ").length > 24 ? (properPost = true) : (properPost = false);

    if (properTitle && properPost) {
      setIsDisabled(false);
    }
    properTitle && properPost ? setIsDisabled(false) : setIsDisabled(true);
  }, [title, post]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submitted");
  };

  return (
    <div className="AddPost">
      <form action="" className="w-1/2 m-auto mt-8">
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text">
              Title
              <span className="text-xs text-slate-500">
                {" "}
                (must start with "AITB" and be at least three words)
              </span>
            </span>
            {titleError && <span className="text-red-600">{titleError}</span>}
          </label>
          <input
            type="text"
            placeholder='The Title of Your Post Must Start With "AITBP"'
            className="input input-bordered w-full bg-white mb-4"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <div className="form-control">
            <label className="label">
              <span className="label-text">
                The Post
                <span className="text-xs text-slate-500">
                  {" "}
                  (minimum of 25 words)
                </span>
              </span>
            </label>
            <textarea
              className="textarea textarea-bordered h-64 w-full bg-white mb-8"
              placeholder="Write Your Post Here (minimum 50 words)"
              value={post}
              onChange={(e) => setPost(e.target.value)}
            ></textarea>
          </div>
          <button
            className={`btn btn-bordered ${
              isDisabled
                ? "disabled:text-slate-200"
                : "text-slate-500 hover:text-slate-800"
            } `}
            disabled={isDisabled}
            onClick={(e) => handleSubmit(e)}
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddPost;
