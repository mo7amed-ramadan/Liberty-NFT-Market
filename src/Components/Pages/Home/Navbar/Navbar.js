import "./Navbar.css";
import Logo from "./Logo";
import { useEffect } from "react";
import NavHolder from "./NavHolder";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
function Navbar() {
  // Function to sticky navbar
  const stickyNavbar = () => {
    const stick = window.scrollY;
    const navbar = document.getElementById("navbar");
    if (stick >= 200) {
      navbar.classList.remove("rounded-full", "w-[88%]", "absolute");
      navbar.classList.add("w-full", "sticky");
    } else {
      navbar.classList.remove("w-full", "sticky");
      navbar.classList.add("rounded-full", "w-[88%]", "absolute");
    }
  };
  // Show navbar
  const showNavbar = () => {
    let navLinksHolder = document.getElementById("navLinksHolder");
    navLinksHolder.classList.toggle("show");
  };
  useEffect(() => {
    window.addEventListener("scroll", stickyNavbar);
    return window.addEventListener("scroll", stickyNavbar);
  }, []);
  return (
    <>
      <nav
        className="bg-white rounded-full w-[88%] mx-auto mt-4 py-4 px-7 flex items-center justify-between absolute m-md:rounded-none m-md:w-full m-md:mt-0 m-md:static"
        id="navbar"
      >
        <Logo />
        <NavHolder />
        <FontAwesomeIcon
          icon={faBars}
          className="text-2xl text-mainColor cursor-pointer hidden m-md:block"
          id="bar"
          onClick={showNavbar}
        />
      </nav>
    </>
  );
}

export default Navbar;
