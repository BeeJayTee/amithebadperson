import { useState } from "react";

const AddPost = () => {
  const [title, setTitle] = useState("AITBP ");
  const [post, setPost] = useState("");
  const [isDisabled, setIsDisabled] = useState(true);

  return (
    <div className="AddPost">
      <form action="/" className="w-1/2 m-auto mt-8">
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text">Title</span>
          </label>
          <input
            type="text"
            placeholder="The Title of Your Post"
            className="input input-bordered w-full bg-white mb-4"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <div className="form-control">
            <label className="label">
              <span className="label-text">The Post</span>
            </label>
            <textarea
              className="textarea textarea-bordered h-64 w-full bg-white mb-8"
              placeholder="Write Your Post Here (minimum 50 words)"
              value={post}
              onChange={(e) => setPost(e.target.post)}
            ></textarea>
          </div>
          <button
            className={`btn btn-bordered ${
              isDisabled
                ? "disabled:text-slate-200"
                : "text-slate-400 hover:text-slate-800"
            } `}
            disabled={isDisabled}
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddPost;
