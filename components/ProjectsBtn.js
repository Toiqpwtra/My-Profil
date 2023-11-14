import Image from "next/image";
import Link from "next/link";
import {HiArrowRight} from "react-icons/hi2";


const ProjectsBtn = () => {
  return (
    <div className="mx-auto xl:mx-0 sm:w-full md:w-[50%] lg:w-[33%]">
    <a href={'/about'} className="relative w-[185px] h-[185px] flex justify-center items-center  bg-cover bg-center
    bg-no-repeat group">
     <Image
        src="/about.png"
        width={141}
        height={148}
        alt=""
        className="w-full h-full max-w-[200px] max-h-[210px] mt-[-140px] group-hover:opacity-0 transition-all duration-500"
      />
      <HiArrowRight className="absolute text-4xl group-hover:translate-x-2 mt-[-150px] transition-all duration-300"
      />
    </a>
  </div>
  );
};

export default ProjectsBtn;
