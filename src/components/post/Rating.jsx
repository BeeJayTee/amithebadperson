import { useEffect, useState } from "react";

import { useAddToLocalStorage } from "../../hooks/useAddToLocalStorage";
import { useCheckLocalStorage } from "../../hooks/useCheckLocalStorage";

const Rating = ({ id }) => {
  const [ratingType, setRatingType] = useState("");

  const { addToLocalStorage } = useAddToLocalStorage();
  const { checkLocalStorage } = useCheckLocalStorage();

  useEffect(() => {
    setRatingType(checkLocalStorage(id));
  }, []);

  const handleClick = async (e) => {
    const str = e.target.innerHTML;
    let query = {};
    str.startsWith("not") ? (query.value = "not") : (query.value = "is");
    const response = await fetch("http://localhost:4141/posts/update", {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id,
        value: query.value,
        currentRating: ratingType,
      }),
    });
    const json = await response.json();
    if (response.ok) {
      addToLocalStorage(id, query.value);
      setRatingType(query.value);
    }
  };

  return (
    <div className="rating flex gap-4 text-center mb-8">
      <p
        className={`text-[.75rem]  tracking-tighter font-bold border p-2 ${
          ratingType === "not"
            ? "bg-blue-400 border-blue-900 hover:cursor-default text-blue-800"
            : "bg-blue-50 text-blue-900 border-blue-600 hover:border-blue-900 hover:cursor-pointer hover:text-blue-800"
        } `}
        onClick={(e) => handleClick(e)}
      >
        not the
        <br />
        bad person
      </p>
      <p
        className={`text-[.75rem]  tracking-tighter font-bold border p-2 ${
          ratingType === "is"
            ? "bg-red-400 border-red-900 hover:cursor-default text-red-800"
            : "bg-red-50 text-red-900 border-red-600 hover:border-red-900 hover:cursor-pointer hover:text-red-800"
        } `}
        onClick={(e) => handleClick(e)}
      >
        is the
        <br />
        bad person
      </p>
    </div>
  );
};

export default Rating;
