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
    };
    fetchPost();
  }, []);

  const handleClick = (e) => {
    const str = e.target.innerHTML;
    if (str.startsWith("not")) {
      console.log("not the bad person");
    } else if (str.startsWith("is")) {
      console.log("is the bad person");
    }
  };

  return (
    <div className="Post">
      <div className="container m-auto mt-16 max-w-5xl">
        <div className="content bg-slate-100 px-8 md:px-8 py-4 flex justify-between">
          <div className="title-content">
            <h1 className="text-3xl mb-4">{title}</h1>
            <div className="rating flex gap-4 text-center">
              <p
                className="text-xs border border-slate-400 hover:border-[#2b2d42] hover:cursor-pointer p-2"
                onClick={(e) => handleClick(e)}
              >
                not the
                <br />
                bad person
              </p>
              <p
                className="text-xs border border-slate-400 hover:border-[#d90429] hover:cursor-pointer p-2"
                onClick={(e) => handleClick(e)}
              >
                is the
                <br />
                bad person
              </p>
            </div>
          </div>
          <div className="body w-1/2">
            <p>{content}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
