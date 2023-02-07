import { useEffect, useState } from "react";

import Listing from "../components/home/Listing";

function Content() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const getPosts = async () => {
      const response = await fetch("http://localhost:4141/posts");
      const json = await response.json();
      if (response.ok) {
        setPosts(json);
      }
    };
    getPosts();
  }, []);

  return (
    <div className="container m-auto mt-16 max-w-5xl">
      <div className="flex flex-col px-8 md:px-32 lg:px-0 items-center lg:flex-row lg:flex-wrap gap-8">
        {posts.map((post) => (
          <Listing
            key={post._id}
            rating={post.rating}
            title={post.title}
            id={post._id}
          />
        ))}
      </div>
    </div>
  );
}

export default Content;
