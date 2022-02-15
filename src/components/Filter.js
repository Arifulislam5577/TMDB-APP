import React, { useEffect } from "react";

const Filter = ({ movies, setFiltered, setActive, active }) => {
  useEffect(() => {
    if (active === 0) {
      setFiltered(movies);
      return;
    }

    const popular = movies.filter((m) => m.genre_ids.includes(active));
    setFiltered(popular);
  }, [setActive, movies, setFiltered, active]);
  return (
    <div>
      <button
        className={`py-2 px-10  rounded-md text-white mr-2 ${
          active === 0 ? "bg-blue-900" : "bg-blue-500"
        }`}
        onClick={() => setActive(0)}
      >
        All
      </button>
      <button
        className={`py-2 px-10  rounded-md text-white mr-2 ${
          active === 35 ? "bg-blue-900" : "bg-blue-500"
        } `}
        onClick={() => setActive(35)}
      >
        Comedy
      </button>
      <button
        className={`py-2 px-10  rounded-md text-white mr-2 ${
          active === 28 ? "bg-blue-900" : "bg-blue-500"
        } `}
        onClick={() => setActive(28)}
      >
        Action
      </button>
    </div>
  );
};

export default Filter;
