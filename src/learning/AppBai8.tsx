/** @format */

// import { useState } from "react";

const reviews = [
  {
    name: "Evondev",
    image: "",
    stars: 5,
    premiumUser: true,
    date: "05/09/2022",
  },
  {
    name: "CharkaUI",
    image: "",
    stars: 4,
    premiumUser: false,
    date: "03/08/2022",
  },
  {
    name: "React Query",
    image: "",
    stars: 3,
    premiumUser: true,
    date: "04/08/2022",
  },
];

function AppBai8() {
  // NOTE: optional: premiumUser?: boolean -> không bắt buộc
  function displayReview(
    totalReviews: number,
    name: string,
    premiumUser?: boolean
  ) {
    return (
      <>
        Review total <strong>{totalReviews}</strong> | Last reviewed by{" "}
        <strong>{name}</strong> {premiumUser === true ? `⭐️` : ""}
      </>
    );
  }
  return (
    <div>
      <div className="review">
        <div className="review-image">
          <img src="https://source.unsplash.com/random" alt="" />
        </div>
        <div className="review-info">
          {displayReview(
            reviews.length,
            reviews[reviews.length - 1].name,
            reviews[reviews.length - 1].premiumUser
          )}
        </div>
      </div>
    </div>
  );
}

export default AppBai8;
