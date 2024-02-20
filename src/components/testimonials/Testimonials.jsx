import React from "react";
import "./testimonials.css";
import AVRT1 from "../../assets/avatar1.jpg";
import AVRT2 from "../../assets/avatar2.jpg";
import AVRT3 from "../../assets/avatar3.jpg";
import AVRT4 from "../../assets/avatar4.jpg";

import { Navigation, Pagination, Scrollbar, A11y } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const data = [
  {
    avatar: AVRT1,
    name: "Tina",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaaccusamus quibusdam dolor obcaecati alias nobis molestias delectus nostrum aut et repellat eveniet repellendus ex corporis id provident ipsam dolorum fugit.",
  },
  {
    avatar: AVRT2,
    name: "Tina",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaaccusamus quibusdam dolor obcaecati alias nobis molestias delectus nostrum aut et repellat eveniet repellendus ex corporis id provident ipsam dolorum fugit.",
  },
  {
    avatar: AVRT3,
    name: "Tina",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaaccusamus quibusdam dolor obcaecati alias nobis molestias delectus nostrum aut et repellat eveniet repellendus ex corporis id provident ipsam dolorum fugit.",
  },
  {
    avatar: AVRT4,
    name: "Tina",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaaccusamus quibusdam dolor obcaecati alias nobis molestias delectus nostrum aut et repellat eveniet repellendus ex corporis id provident ipsam dolorum fugit.",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Review from clints</h5>
      <h2>Testimonials</h2>
      <Swiper
        className="container testimonial__container"
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {data.map(({ avatar, name, review }, index) => {
          return (
            <SwiperSlide key={index} className="testimonial">
              <div class="client__avatar">
                <img src={avatar} alt="" />
              </div>
              <h5 className="client__name">{name}</h5>
              <small className="clint__review">{review}</small>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Testimonials;
