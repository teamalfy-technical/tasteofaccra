import { useState } from "react";
import logo from "../assets/images/taste-of-accra-logo.png";
import close from "../assets/images/icons/close.svg";
import menu from "../assets/images/icons/menu.svg";
import { navLinks } from "../constants/index.js";
const Navbar = () => {
  const [active, SetActive] = useState("");
  const [toggle, setToggle] = useState(false);

  const scrollToSection = (sectionId) => (event) => {
    event.preventDefault();
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="w-full flex sticky top-0 z-20">
      <nav className=" px-[1%] w-full m-auto flex flex-wrap items-center justify-between font-manrope bg-white">
        <div className="flex justify-center">
          <img
            src={logo}
            alt="logo"
            className="object-contain w-26 h-20  cursor-pointer"
          />
        </div>

        <div className="md:hidden">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="cursor-pointer w-8 h-8 sm:w-10 sm:h-10"
            onClick={() => setToggle(!toggle)}
          />
          <div
            className={`${!toggle ? 'hidden' : 'flex'
              } bg-white w-[60%] sm:w-[50%] md:w-[40%] p-4 absolute top-16 left-0 min-w-[140px] rounded-3xl z-20 gap-4 flex-col shadow-lg`}
          >
            <ul className="list-none transition-all duration-600 flex flex-col gap-4">
              {navLinks.map((link) => (
                <li
                  key={link.id}
                  className={`${active === link.title ? 'text-[#f9f9f9]' : 'text-black'
                    } text-[16px] sm:text-[18px] cursor-pointer hover:underline`}
                  onClick={() => {
                    SetActive(link.title);
                    scrollToSection(link.id);
                  }}
                >
                  <a href={`#${link.id}`}>{link.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="hidden md:flex lg:gap-8 md:gap-6 items-center">
          <ul className="inline-flex gap-4 md:gap-6 w-auto">
            {navLinks.map((link) => (
              <li
                key={link.id}
                className={`${active === link.title ? 'text-green' : 'text-black'
                  } text-[14px] sm:text-[16px] md:text-[20px] lg:text-[20px] font-normal cursor-pointer hover:underline hover-underline`}
                onClick={() => SetActive(link.title)}
              >
                <a href={`#${link.id}`}>{link.title}</a>
              </li>
            ))}
          </ul>
        </div>
        <div className="hidden lg:flex ">
          <button onClick={() => {
            const registerElement = document.getElementById('register');
            if (registerElement) {
              registerElement.scrollIntoView({ behavior: 'smooth' });
            }
          }} href="#booking" className="bg-[#CC5396] hover:bg-Green text-[16px] font-manrope text-white px-10 py-4">
            Book your Seat
          </button>
        </div>
      </nav>
    </div>
  );
};
export default Navbar;