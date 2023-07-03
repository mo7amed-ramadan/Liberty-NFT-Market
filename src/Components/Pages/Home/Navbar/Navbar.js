import "./Navbar.css";
import Logo from "./Logo";
import { useEffect } from "react";
import NavHolder from "./NavHolder";
import Bar from "../../../Bar";
function Navbar() {
  // Function to sticky navbar
  const stickyNavbar = () => {
    const stick = window.scrollY;
    const navbar = document.getElementById("navbar");
    if (stick > 100) {
      navbar.classList.remove("rounded-full", "w-[88%]", "absolute");
      navbar.classList.add("w-full", "stickynav");
    } else {
      navbar.classList.remove("w-full", "stickynav");
      navbar.classList.add("rounded-full", "w-[88%]", "absolute");
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", stickyNavbar);
  }, []);
  // Show navbar
  const showNavbar = () => {
    let navLinksHolder = document.getElementById("navLinksHolder");
    let bar = document.getElementById("bar");
    navLinksHolder.classList.toggle("show");
    bar.classList.toggle("bar-closed");
  };
  return (
    <>
      <nav
        className="navbar bg-white rounded-full w-[88%] mt-4 py-4 px-7 flex items-center justify-between absolute m-md:rounded-none m-md:w-full m-md:mt-0"
        id="navbar"
      >
        <Logo />
        <NavHolder />
        <Bar function={showNavbar} />
      </nav>
    </>
  );
}

export default Navbar;
