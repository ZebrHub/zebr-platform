import { Swiper, SwiperSlide } from 'swiper/react';

// import's slide Banner
import { register } from 'swiper/element/bundle';
register();
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import './style.scss';

export function BannerPrincipal() {

    const data = [
        { id: '1', image: 'https://img.lovepik.com/background/20211021/large/lovepik-blue-technology-banner-background-image_500362377.jpg' },
        { id: '2', image: 'https://img.lovepik.com/background/20211021/small/lovepik-cool-line-technology-banner-background-image_400112106.jpg' }
    ];

    return (
        <div className='bannerPrincipal-container'>
            <Swiper
                slidesPerView={1}
                pagination={{ clickable: true }}
                navigation
                autoplay={{ delay: 7000 }}
                loop={true}
            >
                {data.map((item) => (
                    <SwiperSlide key={item.id}>
                        <img
                            src={item.image}
                            alt="Slider"
                            className='slider-item'
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}