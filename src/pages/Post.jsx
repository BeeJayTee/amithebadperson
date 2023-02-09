import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";

import Rating from "../components/post/Rating";

const Post = () => {
  const { id } = useParams();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  useEffect(() => {
    const fetchPost = async () => {
      const response = await fetch(
        `https://aitbpapi.onrender.com//posts/${id}`
      );
      const json = await response.json();
      if (response.ok) {
        setTitle(json.title);
        setContent(json.content);
      }
    };
    fetchPost();
  }, []);

  return (
    <div className="Post py-16">
      <div className="container m-auto max-w-5xl">
        <div className="content bg-slate-50 mb-8 px-8 md:px-16 py-4 flex flex-col md:justify-between border-slate-400 border-t-4 md:border-l-4">
          <div className="title-content flex flex-col items-center md:items-start">
            <h1 className="text-3xl mb-4 text-slate-900">{title}</h1>
            <Rating id={id} />
          </div>
          <div className="body md:w-full">
            <p className="text-slate-800" style={{ "white-space": "pre-wrap" }}>
              {content}
            </p>
          </div>
        </div>
        <Link to="/" className="font-bold ml-8 hover:text-green-700">
          ⏎ Back Home
        </Link>
      </div>
    </div>
  );
};

export default Post;
