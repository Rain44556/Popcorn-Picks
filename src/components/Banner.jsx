// import React from 'react';

// const Banner = () => {
//     return (
//         <div>
            
//         </div>
//     );
// };

// export default Banner;


import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Banner = () => {
  const movies = [
    {
      title: "Turning Red",
      description: "A thirteen-year-old girl is torn between staying her mother's dutiful daughter and the changes of adolescence. And as if the challenges were not enough, whenever she gets overly excited she transforms into a giant red panda",
      poster: "https://i.ibb.co.com/NNNdbh6/banner.webp",
      year: 2022,
      rating: 4.2,
    },
    {
      title: "Luck",
      description: "The story of Sam Greenfield, the unluckiest person in the world. Suddenly finding herself in the never-before-seen Land of Luck, she must unite with the magical creatures there to turn her luck around.",
      poster: "https://i.ibb.co.com/gDdXMzk/banner3.jpg",
      year: 2022,
      rating: 4.0,
    },
    {
      title: "Puss in Boots",
      description: "Puss in Boots discovers that his passion for adventure has taken its toll when he learns that he has burnt through eight of his nine lives. Puss sets out on an epic journey to find the mythical Last Wish and restore his nine lives",
      poster: "https://i.ibb.co.com/SPS0RwN/puss-in-boots-1.jpg",
      year: 2022,
      rating: 4.5,
    },
  ];

  return (
    <div className="max-w-4xl mx-auto my-8">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        loop={true}
      >
        {movies.map((movie, index) => (
          <SwiperSlide key={index}>
            <div className="flex flex-col items-center bg-gray-800 text-white rounded-lg shadow-lg">
              <img
                src={movie.poster}
                alt={movie.title}
                className="rounded-t-lg w-full h-[400px] object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-bold">{movie.title}</h3>
                <p className="text-sm mt-2">{movie.description}</p>
                <p className="mt-2 text-gray-400">
                  Release Year: <span>{movie.year}</span>
                </p>
                <p className="mt-1 text-gray-400">
                  Rating: <span>{movie.rating}</span>
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Banner;




