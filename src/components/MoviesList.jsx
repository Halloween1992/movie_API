import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Keyboard, Pagination, Navigation } from "swiper";

import "./MoviesList.css";

const MovieList = (props) => {
  return (
    <>
      <Swiper
        slidesPerView={4}
        spaceBetween={40}
        keyboard={{
          enabled: true,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Keyboard, Pagination, Navigation]}
        className={"movie__container"}
        breakpoints={{
          769: {
            slidesPerView: 4,
            slidesPerGroup: 4,
          },
        }}
      >
        <div className="movies__container">
          {props.movies.map((movie) => (
            <SwiperSlide className={"movie__item"}>
              <div className="content">
                <img src={movie.image} alt={movie.title} />
                <div className="decription">
                  <h4>{movie.title}</h4>
                  <p>{movie.description}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </div>
      </Swiper>
    </>
  );
};

export default MovieList;
