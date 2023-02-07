import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

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
      console.log(json);
    };
    fetchPost();
  }, []);

  return (
    <div className="Post">
      <div className="container m-auto mt-16 max-w-5xl bg-slate-200 px-32 py-4">
        <div className="rating">
          <p>NTBP</p>
          <p>YTBP</p>
        </div>
        <div className="title text-center text-2xl mb-8">
          <h1>{title}</h1>
        </div>
        <div className="content">
          <p>{content}</p>
        </div>
      </div>
    </div>
  );
};

export default Post;
