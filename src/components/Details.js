import React from "react";

const Details = ({ movieData, loading }) => {
  return (
    <div
      className="p-3"
      style={{
        overflowY: "auto",
        overflowX: "hidden",
        height: "100vh",
        width: "70vw",
      }}>
      <h2 className="text-center text-warning">
        Information
      </h2>
      <hr className="bg-light" />
      {loading ? (
        <h5 className="text-light">
          Search To See Movies Information
        </h5>
      ) : (
        <div className="row">
          <div className="col-4">
            <img
              src={`${process.env.REACT_APP_BASE_IMAGE_URL}${movieData.poster_path}`}
              width="100%"
              alt="poster_path"
            />
          </div>
          <div className="col-8 p-3 text-light">
            <p>
              <strong>Title: </strong>
              {movieData.title}
            </p>
            <p>
              <strong>Overview: </strong>
              {movieData.overview}
            </p>
            <p>
              <strong>Release Date: </strong>
              {movieData.release_date}
            </p>
            <p>
              <strong>Popularity: </strong>
              {movieData.popularity}
            </p>
            <p>
              <strong>Rate: </strong>
              {movieData.vote_average}
            </p>
            <p>
              <strong>Original Language: </strong>{" "}
              {movieData.original_language}
            </p>
            <p>
              <strong>Adult : </strong>{" "}
              {movieData.adult ? "True" : "False"}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Details;
