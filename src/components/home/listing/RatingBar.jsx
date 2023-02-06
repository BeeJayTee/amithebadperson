function RatingBar({ rating }) {
  const styles = {
    width: `${rating}%`,
  };

  const getRating = (rating) => {
    const difFromFifty = 50 - rating;
    if (difFromFifty === 0) {
      return "neutral";
    } else if (Math.abs(difFromFifty) < 10) {
      return "relatively neutral";
    } else if (difFromFifty > 0) {
      let final;
      Math.abs(difFromFifty) > 30
        ? (final = "totally not the bad person")
        : (final = "mildly not the bad person");
      return final;
    } else if (difFromFifty < 0) {
      let final;
      Math.abs(difFromFifty) > 20
        ? (final = "totally the bad person")
        : (final = "mildly the bad person");
      return final;
    }
  };

  return (
    <div className="">
      <div className="flex w-full justify-between mt-4 items-center">
        <p className="text-xs leading-3 mb-2">
          Not<br></br>Bad<br></br>Person
        </p>
        <p className="text-center text-xs font-semibold w-1/2">
          {getRating(rating)}
        </p>
        <p className="text-xs text-right leading-3 mb-2">
          Yes<br></br>Bad<br></br>Person
        </p>
      </div>
      <div className="flex h-8 bg-gradient-to-r from-[#2b2d42] to-[#d90429]">
        <div className="border-r-4" style={styles}></div>
      </div>
    </div>
  );
}

export default RatingBar;
