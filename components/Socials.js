import Link from "next/link";
import {RiYoutubeLine, RiInstagramLine, RiFacebookLine} from 'react-icons/ri'

const Socials = () => {
  return (
    <div className="flex items-center gap-x-5 text-lg">
    <a href={'https://www.youtube.com/channel/UC31Zv25NxH0-P7QefYw4W-A'} className="hover:text-accent transition-all duration-300">
      <RiYoutubeLine/>
    </a>
    <a href={'https://m.facebook.com/Toriq17.pawitra/'} className="hover:text-accent transition-all duration-300">
      <RiFacebookLine/>
    </a>
    <a href={'https://www.instagram.com/toriq.pawitra/'} className="hover:text-accent transition-all duration-300">
      <RiInstagramLine/>
    </a>
  </div>
  );
  
};

export default Socials;
