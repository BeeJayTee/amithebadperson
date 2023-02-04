import RatingBar from "./listing/RatingBar";

function Listing({ rating, title }) {
  return (
    <div className="border-2 min-w-full lg:min-w-0 p-4 px-8 lg:basis-80 bg-white hover:cursor-pointer hover:border-[#8d99ae]">
      <div className="flex flex-col justify-between">
        <h4 className="text-xl">{title}</h4>
        <RatingBar rating={rating} />
      </div>
    </div>
  );
}

export default Listing;
