import { Navigation, Scrollbar } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

export default function BuySlider({ images }) {
  const imgSlider = {
    width: '100%',
    height: '100%'
  };
  return (
    <>
      <Swiper
        modules={[Navigation, Scrollbar]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        scrollbar={{ draggable: true }}
      >
        {images.map((img) => (
          <SwiperSlide key={img}>
            <img style={imgSlider} src={img} alt="product" />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
