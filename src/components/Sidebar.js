import React from "react";
import MovieCard from "./MovieCard";

const Sidebar = ({ response, loading }) => {
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
            <MovieCard
              key={data.id}
              poster_path={data.poster_path}
              title={data.title}
              release_date={data.release_date}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default Sidebar;
