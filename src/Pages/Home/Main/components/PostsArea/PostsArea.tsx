import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import { Navigation, Pagination } from 'swiper/modules';
import { WeekPost, WeekPost2, WeekPost3 } from './weekPosts';

const PostsArea: React.FC = () => {
  return (
    <Swiper
      modules={[Navigation, Pagination]}
      navigation
      pagination={{ clickable: true }}
      slidesPerView={1}
    >
      <SwiperSlide>
        <WeekPost />
      </SwiperSlide>
      <SwiperSlide>
        <WeekPost2 />
      </SwiperSlide>
      <SwiperSlide>
        <WeekPost3 />
      </SwiperSlide>
    </Swiper>
  );
};

export default PostsArea;
