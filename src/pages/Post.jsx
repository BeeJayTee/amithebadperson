import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";

import Rating from "../components/post/Rating";

const Post = () => {
  const { id } = useParams();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  useEffect(() => {
    const fetchPost = async () => {
      const response = await fetch(`http://localhost:4141/posts/${id}`);
      const json = await response.json();
      if (response.ok) {
        setTitle(json.title);
        setContent(json.content);
      }
    };
    fetchPost();
  }, []);

  return (
    <div className="Post">
      <div className="container m-auto mt-16 max-w-5xl">
        <div className="content bg-slate-50 mb-8 px-8 py-4 flex flex-col md:justify-between md:flex-row border-slate-400 border-t-4 md:border-l-4">
          <div className="title-content flex flex-col items-center md:items-start">
            <h1 className="text-3xl mb-4 text-slate-900">{title}</h1>
            <Rating id={id} />
          </div>
          <div className="body md:w-1/2">
            <p className="text-slate-800">{content}</p>
          </div>
        </div>
        <Link to="/">Back Home</Link>
      </div>
    </div>
  );
};

export default Post;
