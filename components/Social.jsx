import Link from "next/link";
import {
  FaGithub,
  FalinkdinIn,
  FaWhatsapp,
  FaFreeCodeCamp,
} from "react-icons/fa";
import { SiCoursera } from "react-icons/si";

const socials = [
  { icon: <FaGithub />, path: "https://github.com/TioPotter?tab=repositories" },
  {
    icon: <FaWhatsapp />,
    path: "https://api.whatsapp.com/send?phone=59168000629&text=Hola,%20me%20comunico%20contigo%20por",
  },
  {
    icon: <FaFreeCodeCamp />,
    path: "https://www.freecodecamp.org/certification/erick_hidalgo/responsive-web-design",
  },
  {
    icon: <SiCoursera />,
    path: "https://coursera.org/share/b9f1df71290ea59c61db60ae4600ea84",
  },
];

const Social = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      {socials.map((item, index) => {
        return (
          <Link key={index} href={item.path} passHref legacyBehavior>
            <a target="_blank" rel="noopener noreferrer" className={iconStyles}>
              {item.icon}
            </a>
          </Link>
        );
      })}
    </div>
  );
};

export default Social;
