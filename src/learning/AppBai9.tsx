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

// NOTE: const obj: {}
// NOTE: unionType: |
const user: {
  firstName: string;
  lastName: string;
  age: number;
  isStudent: boolean;
  address: (string | number)[];
  scores: number[];
} = {
  firstName: "Vo",
  lastName: "Minh Kha",
  age: 22,
  isStudent: false,
  address: [
    "Can Tho University",
    "Ton Duc Thang University",
    "FPT University",
    36,
  ],
  scores: [10, 9, 8, 7, 6],
};

function AppBai9() {
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
          {user.firstName}
        </div>
      </div>
    </div>
  );
}

export default AppBai9;
