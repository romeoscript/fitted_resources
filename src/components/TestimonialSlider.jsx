import React from "react";
import avatarIImg from "../assets/1.jpg";
import avatarIIImg from "../assets/2.jpg";
import avatarIIIImg from "../assets/3.jpg";
import avatarIVImg from "../assets/4.png";
import avatarVImg from "../assets/5.jpg";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

// import required modules
import { EffectCoverflow, Navigation, Pagination } from "swiper";

SwiperCore.use([Autoplay]);
export default function TestimonialSlider() {
  return (
    <>
      <section className="w-4/5 m-auto my-[4rem]">
        <div className="main">
          <div className="head-p">
            <span style={{ paddingRight: "5px" }} className='text-[#2173C9] font-bold text-2xl'>
              What Our Clients are Saying{" "}
            </span>
          </div>
          <Swiper
            loop={true}
            loopFillGroupWithBlank={true}
            pagination={{
              clickable: true,
            }}
            autoplay={{ delay: 3000 }}
            navigation={true}
            modules={[EffectCoverflow, Pagination, Navigation]}
            className="mySwiper"
            effect={"coverflow"}
            coverflowEffect={{
              rotate: 10,
              stretch: 50,
              depth: 200,
              modifier: 1,
              slideShadows: true,
            }}
            breakpoints={{
              640: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 30,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 150,
              },
            }}
          >
            <SwiperSlide className="swiper-slide">
              <div
                style={{
                  paddingRight: 20,
                  paddingLeft: 20,
                }}
              >
                <div className="testimonials-profile-circle">
                  <img
                    src={avatarIImg}
                    alt="testimonial-avatar"
                    className="testimonial-avatar rounded-full"
                  />
                </div>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Similique praesentium voluptate natus sunt, molestiae dolorum?
                </p>
                <h6 className="review-by">- Lorem ipsum dolor sit amet.</h6>
              </div>
            </SwiperSlide>

            <SwiperSlide className="swiper-slide">
              <div
                style={{
                  paddingRight: 20,
                  paddingLeft: 20,
                }}
              >
                <div className="testimonials-profile-circle">
                  <img
                    src={avatarIIImg}
                    alt="testimonial-avatar"
                    className="testimonial-avatar rounded-full"
                    loading="lazy"
                  />
                </div>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Distinctio, animi libero facere eligendi illo consectetur!
                </p>
                <h6 className="review-by">- Lorem ipsum dolor sit amet.</h6>
              </div>
            </SwiperSlide>

            <SwiperSlide className="swiper-slide">
              <div
                style={{
                  paddingRight: 20,
                  paddingLeft: 20,
                }}
              >
                <div className="testimonials-profile-circle">
                  <img
                    src={avatarIIIImg}
                    alt="testimonial-avatar"
                    className="testimonial-avatar rounded-full"
                  />
                </div>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Nesciunt id quaerat, quas minus cum provident?
                </p>
                <h6 className="review-by">- Lorem ipsum dolor sit amet.</h6>
              </div>
            </SwiperSlide>

            <SwiperSlide className=" ">
              <div
                style={{
                  paddingRight: 20,

                  paddingLeft: 20,
                }}
              >
                <div className="testimonials-profile-circle">
                  <img
                    src={avatarIVImg}
                    alt="testimonial-avatar"
                    className="testimonial-avatar rounded-full"
                  />
                </div>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Cumque culpa suscipit, ad iure esse nihil?
                </p>
                <h6 className="review-by">- Lorem ipsum dolor sit amet. </h6>
              </div>
            </SwiperSlide>

            <SwiperSlide className="swiper-slide">
              <div
                style={{
                  paddingRight: 20,
                  paddingLeft: 20,
                }}
              >
                <div className="testimonials-profile-circle">
                  <img
                    src={avatarVImg}
                    alt="testimonial-avatar"
                    className="testimonial-avatar rounded-full"
                  />
                </div>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde
                  dicta, quibusdam dolor eligendi quaerat nulla.
                </p>
                <h6 className="review-by">- Lorem ipsum dolor sit amet. </h6>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </section>
    </>
  );
}
