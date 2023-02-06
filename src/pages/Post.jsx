import { useParams } from "react-router-dom";
import { useEffect } from "react";

const Post = () => {
  const { id } = useParams();

  useEffect(() => {
    const fetchPost = async () => {
      const response = await fetch(`http://localhost:4141/posts/${id}`);
      const json = await response.json();
      console.log(response);
      console.log(json);
    };
    fetchPost();
  }, []);

  return (
    <div className="Post">
      <h1>Post</h1>
      <p>Post Content</p>
    </div>
  );
};

export default Post;
