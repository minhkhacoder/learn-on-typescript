/** @format */

// NOTE: Array Object: {...}[] = [{}]
const reviews: {
  name: string;
  image: string;
  stars: number;
  premiumUser: boolean;
  date: string;
}[] = [
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

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const travelItem: {
  image: string;
  name: string;
  totalReviews: number;
  rating: number;
  location: string;
  price: number;
  date: string;
  departure: string;
  features: {
    freeWifi: boolean;
    freeParking: boolean;
    specialOffer: boolean;
  };
}[] = [
  {
    image: "https://source.unsplash.com/random",
    name: "Zuich, Switzerland",
    totalReviews: 148,
    rating: 4.8,
    location: "Switzerland",
    price: 300,
    date: "01/09/2023",
    departure: "Brazil",
    features: {
      freeWifi: true,
      freeParking: true,
      specialOffer: true,
    },
  },
];

function AppBai10() {
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

  // const travelItem: image, name, totalReviews, rating, location, price, date, departure, features:
  // wifi, parking, offer

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

export default AppBai10;
