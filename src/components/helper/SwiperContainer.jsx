import 'swiper/css';
import 'swiper/css/navigation';
import { Swiper } from 'swiper/react';
import { Navigation } from 'swiper/modules';

const breakpoints = {
  100: {
    slidesPerView: 1,
    spaceBetween: 4
  },
  300: {
    slidesPerView: 1,
    spaceBetween: 4
  },
  480: {
    slidesPerView: 2,
    spaceBetween: 4
  },
  768: {
    slidesPerView: 3,
    spaceBetween: 4
  },
  1440: {
    slidesPerView: 4,
    spaceBetween: 8
  }
};

const SwiperContainer = ({ children }) => {
  return (
    <div style={{ overflow: 'hidden' }}>
      <Swiper
        modules={[Navigation]}
        navigation
        spaceBetween={2}
        slidesPerView={4}
        // onSlideChange={() => console.log('slide change')}
        breakpoints={breakpoints}
      >
        {children}
      </Swiper>
    </div>
  );
};

export default SwiperContainer;
