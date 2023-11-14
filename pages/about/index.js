import React, {useState} from "react";

// icons
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaWordpress,
  FaFigma,
  FaAnchor,
  FaFish,
  FaSwimmer,
} from "react-icons/fa";

import {
  SiNextdotjs,
  SiFramer,
  SiAdobexd,
  SiAdobephotoshop,
} from "react-icons/si";

import {
  DiCodeigniter
} from "react-icons/di";

import {
  MdScubaDiving
} from "react-icons/md";



//  data
const aboutData = [
  {
    title: 'skills',
    info: [
      {
        title: 'Web Development',
        icons: [
          <FaHtml5 />,
          <FaCss3 />,
          <FaJs />,
          <FaReact />,
          <DiCodeigniter />,
        ],
      },
      {
        title: 'Marine & Fisheries',
        icons: [
        <FaAnchor />,
        <FaFish />,
        <FaSwimmer />,
        <MdScubaDiving />,
      ],
      },
    ],
  },
  {
    title: 'Certificate',
    info: [
      {
        title: 'Pelatihan Dasar K3 - BPPP banyuwangi',
        stage: '6 april 2023',
      },
      {
        title: 'SAP Analytics Cloud Training - ASEAN DSE',
        stage: '2023',
      },
      {
        title: 'Buddidaya Perikanan Ikan Clarias sp - BNSP',
        stage: '2022',
      },
      {
        title: 'GeoSight - KHHAM',
        stage: 'Terbit 10 Juli 2023',
      },
    ],
  },
  {
    title: 'experience',
    info: [
      {
        title: 'Prosesor.AI',
        stage: 'Jan 2020 - Aug 2022',
      },
      {
        title: 'BBPBAT (Balai Besar Perikanan Budidaya Air Tawar)',
        stage: '2020 - 2021',
      },
      {
        title: 'Freelance Data Entry',
        stage: '2022 - 2023',
      },
    ],
  },
  // credemsial
  // {
  //   title: 'credentials',
  //   info: [
  //     {
  //       title: 'Web Development - ABC University, LA, CA',
  //       stage: '2011',
  //     },
  //     {
  //       title: 'Computer Science Diploma - AV Technical Institute',
  //       stage: '2009',
  //     },
  //     {
  //       title: 'Certified Graphic Designer - ABC Institute, Los Angeles, CA',
  //       stage: '2006',
  //     },
  //   ],
  // },
];


import Avatar from '../../components/Avatar';
import Circles from '../../components/Circles';

import {motion} from 'framer-motion';
import {fadeIn} from '../../variants';
import { icons } from "react-icons";

import CountUp from "react-countup";

const About = () => {
  const [index, setIndex] = useState(0);
  console.log(index);
  return (
    <div className="h-full bg-primary/30 py-32 text-center xl:text-left">
      <Circles/>
      {/* avatar image */}
      <motion.div 
        variants={fadeIn('right', 0.2)}
        initial='hidden'
        animate='show'
        exit='hidden'
        className="hidden xl:flex absolute bottom-0 -left-[370px]"
      >
        <Avatar/>
      </motion.div>
      <div className="container mx-auto h-full flex flex-col items-center xl:flex-row gap-x-6">
        {/* text */}
        <div className="flex-1 flex flex-col justify-center">
            <motion.h2 
              variants={fadeIn('right', 0.2)}
              initial='hidden'
              animate='show'
              exit='hidden'
              className="h2"
            >
              Ocean exploration, to realize <span className="text-accent">the dream!</span>
            </motion.h2>
            <motion.p 
              variants={fadeIn('right', 0.4)}
              initial='hidden'
              animate='show'
              exit='hidden'
              className="max-w-[500px] mx-auto xl:mx-0 mb-6 xl:mb-12 px-2 xl:px-0 xl:text-xl"
            >
              Three years ago, I started a journey in the marine and fisheries world. 
              Since then, I have combined my internship and work experience in the marine 
              sector. Currently, I am studying in the Marine Information Systems study program. 
              Combining marine expertise with information systems is a tremendous opportunity that 
              opens the door to deeper understanding and sustainable innovation.
            </motion.p>
            {/* Counters */}
            <motion.div 
              variants={fadeIn('right', 0.6)}
              initial='hidden'
              animate='show'
              exit='hidden'
              className="hidden md:flex md:max-w-xl xl:max-w-none mx-auto xl:mx-0 mb-8"
            >
              <div className="flex flex-0 xl:gap-x-6 ">
                {/* Experience */}
                <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute
                after:top-0 after:right-0 xl:text-xl">
                  <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                    <CountUp start={0} end={3} duration={5} /> +
                  </div>
                  <div className="text-xs uppercase tracking-[1px] leading-[1.4] 
                  max-w-[100px]">Years of experience</div>
                </div>
                {/* Clients */}
                {/* <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute
                after:top-0 after:right-0 xl:text-xl">
                  <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                    <CountUp start={0} end={250} duration={5} /> +
                  </div>
                  <div className="text-xs uppercase tracking-[1px] leading-[1.4] 
                  max-w-[100px]">Satisfied Clients</div>
                </div> */}
                {/* Project */}
                <div className="relative flex-1">
                  <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                    <CountUp start={0} end={8} duration={5} /> +
                  </div>
                  <div className="text-xs uppercase tracking-[1px] leading-[1.4] 
                  max-w-[100px]">Finished Project</div>
                </div>
              </div>
            </motion.div>
        </div>
        {/* info */}
        <motion.div 
          variants={fadeIn('left', 0.4)}
          initial='hidden'
          animate='show'
          exit='hidden'
          className="flex flex-col w-full xl:max-w-[44%] h-[65%]"
        >
          {/* bar nav */}
          <div className="flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4">
            {aboutData.map((item, itemIndex) => {
              return (
                <div
                  key={itemIndex}
                  className={`${
                    index === itemIndex &&
                    'text-accent after:w-[100%] after:bg-accent after:transition-all after:duration-300'
                  } cursor-pointer capitalize xl:text-xl relative after:w-8 after:h-[2px] after:bg-white after:absolute after:-bottom-1 after:left-0`}
                  onClick={() => setIndex(itemIndex)}
                >
                  {item.title}
                </div>
              );
            })}
          </div>
          <div className="py-2 xl:py-6 flex flex-col gap-y-2 xl:gap-y-4 items-center xl:items-start">
            {aboutData[index].info.map((item, itemIndex) => {
              return (
                <div
                  key={itemIndex}
                  className="flex-1 flex flex-col md:flex-row max-w-max gap-x-2 items-center xl:text-lg text-white/60"
                >
                  {/* title */}
                  <div className="font-light mb-2 md:mb-0">{item.title}</div>
                  <div className="hidden md:flex">-</div>
                  <div>{item.stage}</div>
                  <div className="flex gap-x-4">
                    {/* icon */}
                    {item.icons?.map((icon, iconIndex) => {
                      return (
                        <div key={iconIndex} className="text-2xl text-white">
                          {icon}
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </div>
  );
  
};

export default About;
