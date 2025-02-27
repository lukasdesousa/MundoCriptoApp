import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import { Navigation, Pagination } from 'swiper/modules';

const videos = [
  { id: '2verMICybCg', title: 'Altcoin Season Chegou no Mercado Cripto?' },
  { id: 's8jk9Et9mFE', title: 'Bitcoin 100K: Quais Altcoins vão Explodir?' },
  { id: 'LEhF8tznX7E', title: 'A Ascensão das Criptomoedas — Oportunidade da década' },
];

const WeekVideos: React.FC = () => {
  return (
    <Swiper
      modules={[Navigation, Pagination]}
      navigation
      pagination={{ clickable: true }}
      slidesPerView={1}
      style={{ width: '100%', maxWidth: '800px' }}
    >
      {videos.map((video) => (
        <SwiperSlide key={video.id}>
            <div className="box">
              <div style={{ position: 'relative', paddingBottom: '59.25%', height: 0 }}>
                <iframe
                  src={`https://www.youtube.com/embed/${video.id}`}
                  title={video.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    borderRadius: 8,
                    padding: '0px 40px'
                  }}
                ></iframe>
              </div>
              <p style={{ textAlign: 'center', marginTop: '10px' }}>{video.title}</p><br />
            </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default WeekVideos;
