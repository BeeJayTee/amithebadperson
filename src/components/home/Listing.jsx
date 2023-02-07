import { useNavigate } from "react-router-dom";

import RatingBar from "./listing/RatingBar";

function Listing({ rating, title, id }) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/post/${id}`);
  };

  return (
    <div
      className="border-2 border-slate-400 min-w-full lg:min-w-0 p-4 px-8 lg:basis-80 bg-white hover:cursor-pointer hover:border-slate-500"
      onClick={handleClick}
    >
      <div className="flex flex-col justify-between">
        <h4 className="text-xl font-semibold text-slate-800">{title}</h4>
        <RatingBar rating={rating} />
      </div>
    </div>
  );
}

export default Listing;
