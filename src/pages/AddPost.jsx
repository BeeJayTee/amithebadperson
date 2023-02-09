import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const AddPost = () => {
  const [title, setTitle] = useState("AITBP for ");
  const [content, setContent] = useState("");
  const [isDisabled, setIsDisabled] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    let properTitle = false;
    let properPost = false;
    title.startsWith("AITBP") && title.split(" ").length > 3
      ? (properTitle = true)
      : (properTitle = false);

    content.split(" ").length > 24 ? (properPost = true) : (properPost = false);

    if (properTitle && properPost) {
      setIsDisabled(false);
    }
    properTitle && properPost ? setIsDisabled(false) : setIsDisabled(true);
  }, [title, content]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(content.split("/n"));
    const response = await fetch(
      "http://aitbpapi.thebrandontucker.com/posts/add",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          title: title,
          content: content,
        }),
      }
    );
    const json = await response.json();
    console.log(response);
    if (response.ok) {
      navigate("/");
    }
  };

  return (
    <div className="AddPost">
      <form
        action=""
        className="md:w-1/2 px-8 md:px-0 w-full m-auto mt-8"
        onSubmit={(e) => handleSubmit(e)}
      >
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text">
              Title
              <span className="text-xs text-slate-500">
                {" "}
                (must start with "AITB" and be at least three words)
              </span>
            </span>
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
              value={content}
              onChange={(e) => setContent(e.target.value)}
            ></textarea>
          </div>
          <button
            className={`btn btn-bordered ${
              isDisabled
                ? "disabled:text-slate-200"
                : "text-slate-500 hover:text-slate-800"
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
