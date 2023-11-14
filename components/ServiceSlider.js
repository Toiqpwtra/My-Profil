// import swiper
import {Swiper, SwiperSlide} from 'swiper/react';

// import swiper slider
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';


// icons
import {
  RxCrop,
  RxPencil2,
  RxDesktop,
  RxReader,
  RxRocket,
  RxArrowTopRight,
} from "react-icons/rx";

import {
  GiIsland,
  GiLuckyFisherman,
} from "react-icons/gi";

import {
  AiOutlineNodeCollapse,
} from "react-icons/ai";

import {
  MdOutlineAttachMoney,
} from "react-icons/md";

// import required modules
import {FreeMode, Pagination} from 'swiper';

// data
const serviceData = [
  {
    icon: <GiIsland />,
    title: 'Marine Conservation',
    description: 'Information on conservation efforts to protect marine ecosystems and endangered species.',
  },
  {
    icon: <AiOutlineNodeCollapse />,
    title: 'marine technology',
    description: 'Recent developments in marine technology, and marine environmental monitoring systems.',
  },
  {
    icon: <RxDesktop />,
    title: 'Development',
    description: 'create a website within the marine science community to be used by fishermen and researchers.',
  },
  {
    icon: <MdOutlineAttachMoney />,
    title: 'Marine Economics',
    description: 'Marine roles in the global economy, including tourism, trade, industry, and natural resources sectors.',
  },
  {
    icon: <GiLuckyFisherman />,
    title: 'Fisheries Resource Management',
    description: 'How to manage fish populations and prevent exploitation.',
  },
];

const ServiceSlider = () => {
  return (
  <Swiper breakpoints={{
      320: {
          slidesPerView: 1,
          spaceBetween: 15
        },
        640: {
          slidesPerView: 3,
          spaceBetween: 15
        }
      }}
      freeMode={true}
      pagination={{
          clickable: true
      }}
      modules={[FreeMode, Pagination]}
      className='h-[240px] sm:h-[340px]'
    >
      {serviceData.map((item, index)=>{
          return (
            <SwiperSlide key={index}>
              <div className='bg-[rgba(65,47,123,0.15)] h-max rounded-lg px-6
              py-8 flex sm:flex-col gap-x-6 sm:gap-x-0 group cursor-pointer hover:bg-[rgba(89,65,169,0.15)]
              transition-all duration-300'
              >
                {/* Icon */}
                <div className='text-4xl text-accent mb-4'>{item.icon}</div>
                {/* title & desc*/}
                <div className='mb-8'>
                  <div className='mb-2 text-lg'>{item.title}</div>
                  <p className='max-w-[350px] leading-normal'>{item.description}</p>
                </div>
                {/* Arrow */}
                <div className='text-3xl'>
                  <RxArrowTopRight className='group-hover:rotate-45 group-hover:text-accent transition-all duration-300'/>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
    </Swiper>
  );
};

export default ServiceSlider;
