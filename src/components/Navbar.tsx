import { useEffect, useState } from "react";
import { Link } from "react-scroll"; // Import Link from react-scroll
import { NavLinks } from "../service/service";
import { logo, menu, close } from "../assets";

const Navbar = () => {
  const [active, setActive] = useState<string>("");
  const [toggle, setToggle] = useState<boolean>(false);
  const [scrolled, setScrolled] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 250) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`
      w-full flex items-center py-5 fixed top-0 z-20 ${
        scrolled ? "bg-black" : "bg-[#F0E7E2]"
      }`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link // Replace "a" with "Link" from react-scroll
          to="top"
          smooth={true}
          duration={500} // Adjust the duration as needed
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img src={logo} alt="logo" className="w-9 h-9 object-contain" />
          <p
            className={`font-mono text-[18px] font-bold cursor-pointer flex ${
              scrolled ? "text-white" : "text-[#3F4C52]"
            }`}
          >
            FIKRI AMANDA
          </p>
        </Link>

        <ul className="list-none hidden sm:flex flex-row gap-10 sm:mr-10">
          {NavLinks.map((nav) => (
            <li
              key={nav.id}
              className={`${
                active === nav.title ? "text-[#3F4C52]" : "text-white"
              } ${
                scrolled ? "text-white" : "text-[#3F4C52]"
              } hover:text-[#3F4C52] text-[18px] font-medium cursor-pointer`}
              onClick={() => setActive(nav.title)}
            >
              <Link
                to={nav.id}
                smooth={true}
                duration={500}
              >
                {nav.title}
              </Link>
            </li>
          ))}
        </ul>

        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-[28px] h-[28px] object-contain mr-5"
            onClick={() => setToggle(!toggle)}
          />

          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 black-gradient absolute top-20 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
          >
            <ul className="list-none flex justify-end items-start flex-1 flex-col gap-4">
              {NavLinks.map((nav) => (
                <li
                  key={nav.id}
                  className={`font-poppins font-medium cursor-pointer text-[16px] ${
                    active === nav.title ? "text-white" : "text-[#3F4C52]"
                  }`}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive(nav.title);
                  }}
                >
                  <Link
                    to={nav.id}
                    smooth={true}
                    duration={500}
                  >
                    {nav.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
