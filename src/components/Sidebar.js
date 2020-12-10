import React from "react";
import MovieCard from "./MovieCard";

const Sidebar = ({ response, loading }) => {
  return (
    <div className="bg-dark sideNav">
      <div className="text-center">
        <h3 className="pt-4 text-warning">Movie Details</h3>
        <hr className="text-white" />
        loading ? (
        <h1 className="text-light">Loading...</h1>) : (
        {response && response.map((data) => <MovieCard key={data.id} />)}
      </div>
    </div>
  );
};

export default Sidebar;
