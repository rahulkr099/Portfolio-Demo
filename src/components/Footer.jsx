import { useTheme } from "../useContext/ThemeContext";
import {motion} from 'framer-motion'
const Footer = () => {
  const {theme} = useTheme()
  return (
    <div className={`${theme==="Light"?'light':'dark'}`}>
    <div 
     
    className=" text-center overflow-hidden bg-gray-200 text-black dark:bg-black dark:text-white py-4 mt-2 font-normal text-md md:text-lg md:p-5 md:mt-4">
      <motion.p
      layout
      initial={{scale:0}}
      animate={{scale:1.1}}
      drag dragConstraints={{left:0,top:0,right:0,bottom:0}}
      >
        Made with ❤️ by <span className="font-bold text-green-400 animate-pulse italic"> Rahul Kumar</span>
      </motion.p>
    </div></div>
  );
};

export default Footer;