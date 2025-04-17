export const SocialMedia = () => {
  const img = [
    "https://res.cloudinary.com/dnfbik3if/image/upload/v1743008360/Green_and_White_Eco_Fashion_Store_Grand_Opening_Flyer_1_q8xkgc.jpg",
    ,
    "https://res.cloudinary.com/dnfbik3if/image/upload/v1743007896/marcus-loke-xXJ6utyoSw0-unsplash_sbrvjc.jpg",

    "https://res.cloudinary.com/dnfbik3if/image/upload/v1743008360/Green_and_White_Eco_Fashion_Store_Grand_Opening_Flyer_x56zho.jpg",
    "https://res.cloudinary.com/dnfbik3if/image/upload/v1743007905/md-salman-tWOz2_EK5EQ-unsplash_ba3wfc.jpg",

    "https://res.cloudinary.com/dnfbik3if/image/upload/v1743008360/Cream_Black_and_Orange_Illustrative_Fashion_Store_Promotion_Poster_ziytut.jpg",
    "https://res.cloudinary.com/dnfbik3if/image/upload/v1743008546/Beige_and_Green_Clothing_Store_Sustainable_Beauty_Instagram_Stories_vevzo0.jpg",
  ];
  return (
    <div className=" relative ">
      <div className=" max-w-[160vh] w-screen mx-auto mt-5 grid md:grid-cols-6 grid-cols-2  gap-0 md:gap-2 mb-10 md:px-4">
        {img.map((item) => (
          <div className="">
            <img
              src={item}
              alt="social media"
              className="md:h-[50vh] object-fill md:object-cover h-[20vh] w-50 md:w-full"
            ></img>
          </div>
        ))}
      </div>
      <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-3 bg-gray-700 text-white md:text-lg font-bold md:py-3 md:px-6 text-sm p-2">
        <a>Follow Us On Instagram</a>
      </span>
    </div>
  );
};
