import logo from "../../../../Images/logo.png";
import NavLinks from "./NavLinks";
import "./Navbar.css";
import { useEffect } from "react";
function Navbar() {
  // Nav bar style
  const navClass =
    "bg-white rounded-full w-[88%] mx-auto mt-4 py-4 px-7 flex items-center justify-between	";
  // link style
  const linkClass =
    "nav-item px-5 py-2 me-2 rounded-full font-semibold text-md text-[#2a2a2a] cursor-pointer hover:bg-mainColor hover:text-white duration-200";
  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.getElementById("navbar");
      if (window.scrollY > 0) {
        navbar.classList.remove("rounded-full", "w-[88%]", "mx-auto", "mt-4");
        navbar.classList.add("w-[100%]", "shadow-sm");
      } else {
        navbar.classList.remove("w-[100%]", "shadow-sm");
        navbar.classList.add("rounded-full", "w-[88%]", "mx-auto", "mt-4");
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <>
      <nav className={navClass} id="navbar">
        <a className="navbar-brand" href="/">
          <img src={logo} alt="logo" className="logo" />
        </a>
        <ul className="nav-group flex items-center">
          <NavLinks
            name="Home"
            id="home"
            className={`${linkClass} activated`}
          />
          <NavLinks name="Explore" className={linkClass} />
          <NavLinks name="Item Details" className={linkClass} />
          <NavLinks name="Author" className={linkClass} />
          <NavLinks name="Create Yours" className={linkClass} />
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
