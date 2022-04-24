import React from "react";

function Review() {
  return (
    <>
      <div class="d-flex justify-content-around p-2 ">
        <div className="col-lg-4">
          
          <h2>Joker</h2>
          <p class="text-info ">
            IMDb Users 1,181,885 IMDb users have given a weighted average vote
            of 8.4 / 10
          </p>
          <p>
            <a className="btn btn-secondary" href="https://www.netflix.com/in/">
              Watch Now »
            </a>
          </p>
        </div>
        !
        <div className="col-lg-4">
         
          <h2>Jersey</h2>
          <p class="text-info ">
            IMDb Users 2,553 IMDb users have given a weighted average vote of
            7.4 / 10
          </p>
          <p>
            <a className="btn btn-secondary" href="https://www.netflix.com/in/">
              Watch Now »
            </a>
          </p>
        </div>
        <div className="col-lg-4">
          

          <h2>Friends</h2>
          <p class="text-info ">
            IMDb RATING 8.9/IMDb Users 947,159 IMDb users have given a weighted
            average vote of 8.9 / 10 10
          </p>
          <p>
            <a className="btn btn-secondary" href="https://www.netflix.com/in/">
              Watch Now »
            </a>
          </p>
        </div>
      </div>
    </>
  );
}

export default Review;
