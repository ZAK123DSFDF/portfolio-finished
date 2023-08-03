import { useState, useEffect } from "react";
import menuLinks from "./MenuLinks";
import { BiMenu } from "react-icons/bi";
const Navbar = () => {
  const [sticky, setSticky] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 0 ? setSticky(true) : setSticky(false);
    });
  });
  return (
    <nav
      className={`fixed w-full z-[999] justify-between flex  ${
        sticky ? "bg-white/60 text-gray-900" : "text-white"
      }`}
    >
      <h4 className="text-xl font-bold mx-7 my-3">VISUALS</h4>

      <ul
        className={`${
          sticky ? "md:bg-white/0" : "bg-white"
        } text-gray-900 hidden px-10 font-medium rounded-bl-full items-center md:flex gap-16 py-5 text-lg`}
      >
        {menuLinks?.map((menu, i) => (
          <li key={i} className="hover:text-cyan-600">
            <a href={menu?.link}>{menu?.name}</a>
          </li>
        ))}
      </ul>

      <BiMenu
        onClick={() => setOpen(!open)}
        className={`z-[999] ${
          open ? "text-gray-900" : "text-gray-100"
        } text-3xl md:hidden m-5`}
      />

      <ul
        className={` flex flex-col justify-center gap-10 items-center text-lg md:hidden text-gray-900 absolute w-2/3 h-screen px-7 font-medium bg-white top-0 duration-300 ${
          open ? "right-0" : "right-[-999px]"
        }`}
      >
        {menuLinks?.map((menu, i) => (
          <li
            key={i}
            onClick={() => setOpen(false)}
            className="hover:text-cyan-600"
          >
            <a href={menu?.link}>{menu?.name}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
