import React from "react";
import MovieCard from "./MovieCard";

const Sidebar = ({
  response,
  loading,
  onClick,
  getMovieId,
}) => {
  const clicker = (mId) => {
    getMovieId(mId);
  };

  return (
    <div className="bg-navyBlue sideNav">
      <div className="text-center">
        <h3 className="pt-4 text-warning">Movie Details</h3>
        <hr className="text-white" />
        {loading ? (
          <h5 className="text-light">
            Search To See Movies
          </h5>
        ) : (
          response &&
          response.map((data) => (
            <button
              key={data.id}
              onClick={() => clicker(data.id)}
              className="my-4">
              <MovieCard
                poster_path={data.poster_path}
                title={data.title}
                release_date={data.release_date}
              />
            </button>
          ))
        )}
      </div>
    </div>
  );
};

export default Sidebar;
