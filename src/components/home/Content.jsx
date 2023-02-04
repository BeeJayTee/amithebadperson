import Listing from "./Listing";

function Content() {
  const posts = [
    {
      title: "AITBP for giving my kid the last butterfinger?",
      post: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas et excepturi alias eos animi. Repellat voluptate natus expedita, saepe facilis quisquam rerum dolore, et reprehenderit, vitae quod nihil enim ut!",
      rating: 55,
      id: 1,
    },
    {
      title: "AITBP for letting my dog poop on my neighbors lawn?",
      post: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas et excepturi alias eos animi. Repellat voluptate natus expedita, saepe facilis quisquam rerum dolore, et reprehenderit, vitae quod nihil enim ut!",
      rating: 24,
      id: 2,
    },
    {
      title: "AITBP for jumping off a bench?",
      post: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas et excepturi alias eos animi. Repellat voluptate natus expedita, saepe facilis quisquam rerum dolore, et reprehenderit, vitae quod nihil enim ut!",
      rating: 94,
      id: 3,
    },
    {
      title: "AITBP for eating chicken?",
      post: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas et excepturi alias eos animi. Repellat voluptate natus expedita, saepe facilis quisquam rerum dolore, et reprehenderit, vitae quod nihil enim ut!",
      rating: 52,
      id: 4,
    },
  ];

  return (
    <div className="container m-auto mt-16 max-w-5xl">
      <div className="flex flex-col px-8 md:px-32 lg:px-0 items-center lg:flex-row lg:flex-wrap gap-8">
        {posts.map((post) => (
          <Listing key={post.id} rating={post.rating} title={post.title} />
        ))}
      </div>
    </div>
  );
}

export default Content;
