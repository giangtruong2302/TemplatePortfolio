import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
import "swiper/swiper.min.css";
import "swiper/swiper-bundle.css";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import "swiper/modules/pagination/pagination.min.css";
import "swiper/modules/navigation/navigation.min.css";
import "swiper/modules/effect-coverflow/effect-coverflow.min.css";
// import "swiper/css/effect-cards";
import styled from "styled-components";
import { EffectCards, Pagination, Navigation, Autoplay } from "swiper";
import img1 from "../assets/avaG2.jpg";
import img2 from "../assets/avaG2.jpg";
import img3 from "../assets/avaG2.jpg";
import arrow from "../assets/Arrow.svg";
const Container = styled.div`
  width: 25vw;
  height: 70vh;
  .swiper {
    width: 100%;
    height: 100%;
  }
  .swiper-slide {
    background-color: "#fff";
    border-radius: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .swiper-button-next {
    color: ${(props) => props.theme.text};
    right: 0;
    top: 60%;
    background: url(${arrow});
    background-position: center;
    background-size: cover;
    width: 4rem;
    &::after {
      display: none;
    }
  }
  .swiper-button-prev {
    color: ${(props) => props.theme.text};
    left: 0;
    top: 60%;
    background: url(${arrow});
    transform: rotate(180deg);
    background-position: center;
    background-size: cover;
    width: 4rem;
    &::after {
      display: none;
    }
  }
`;
const Carousel = () => {
  return (
    <Container>
      <Swiper
        autoplay={{ delay: 2000, disableOnInteraction: false }}
        pagination={{ type: "fraction" }}
        effect={"cards"}
        navigation={true}
        grabCursor={true}
        draggable={true}
        scrollbar={{ draggable: true }}
        modules={[EffectCards, Navigation, Pagination, Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={img1} alt="nfts" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img2} alt="nfts" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img3} alt="nfts" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img1} alt="nfts" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img2} alt="nfts" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img3} alt="nfts" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img1} alt="nfts" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img1} alt="nfts" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img1} alt="nfts" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img1} alt="nfts" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img1} alt="nfts" />
        </SwiperSlide>
      </Swiper>
    </Container>
  );
};

export default Carousel;
