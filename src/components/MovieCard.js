import React from "react";

const MovieCard = ({
  poster_path,
  title,
  release_date,
}) => {
  return (
    <div className="bg-navyBlue1 my-4">
      <div className="row">
        <div className="col-4">
          <img
            alt="image_poster"
            width="130%"
            src={`${process.env.REACT_APP_BASE_IMAGE_URL}${poster_path}`}
          />
        </div>
        <div className="col-8 text-center text-light pt-2">
          <p>
            <strong>Movie Name: </strong>
            <br />
            {title}
          </p>
          <hr />
          <p>
            <strong>Release Date: </strong>
            <br />
            {release_date}
          </p>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
