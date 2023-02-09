import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import Listing from "../components/home/Listing";

function Content() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const getPosts = async () => {
      const response = await fetch(
        "http://aitbpapi.thebrandontucker.com/posts"
      );
      const json = await response.json();
      if (response.ok) {
        json.length < 10
          ? setPosts(json.reverse())
          : setPosts(json.reverse().slice(0, 9));
      }
    };
    getPosts();
  }, []);

  return (
    <div className="container m-auto py-16 max-w-5xl">
      <div className="text-center mb-16 md:w-1/3 m-auto px-8 md:px-0">
        <h1 className="font-bold text-4xl text-slate-900 mb-2">
          AmITheBadPerson
        </h1>
        <h3 className="font-semibold text-sm text-slate-500 uppercase mb-4">
          post your story, and let others vote on whether you're the bad person
          or not
        </h3>
        <Link
          to="/add"
          className="text-green-700 text-center hover:text-green-500 hover:cursor-pointer px-2 py-1.5 border border-green-700 hover:border-green-500 box-border"
        >
          + post
        </Link>
      </div>
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
