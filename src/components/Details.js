import React from "react";

const Details = () => {
  return (
    <div className="p-3">
      <h2 className="text-center text-warning">
        Information
      </h2>
      <hr className="bg-light" />
      <div className="row">
        <div className="col-4">
          <img
            src="https://image.tmdb.org/t/p/original/gfJGlDaHuWimErCr5Ql0I8x9QSy.jpg"
            width="100%"
            alt="poster_path"
          />
        </div>
        <div className="col-8 p-3 text-light">
          <p>
            <strong>Title: </strong>Wonder Woman
          </p>
          <p>
            <strong>Overview: </strong>An Amazon princess
            comes to the world of Man in the grips of the
            First World War to confront the forces of evil
            and bring an end to human conflict.
          </p>
          <p>
            <strong>Release Date: </strong>2017-05-30
          </p>
          <p>
            <strong>Popularity: </strong>117.878
          </p>
          <p>
            <strong>Rate: </strong>7.8
          </p>
          <p>
            <strong>Original Language: </strong> English
          </p>
          <p>
            <strong>Adult : </strong> False
          </p>
        </div>
      </div>
    </div>
  );
};

export default Details;
