import NavLinks from "./NavLinks";
import { useLocation } from "react-router-dom";
import { useState } from "react";

function NavHolder() {
  const location = useLocation();
  const linkClass =
    "nav-item px-5 py-2 me-2 rounded-full font-medium text-sm text-[#2a2a2a] cursor-pointer hover:bg-mainColor hover:text-white duration-200 m-md:text-xs m-md:px-3 m-md:my-2 m-md:rounded-none m-md:w-full m-md:me-0 m-md:text-center";

  const [activeLink, setActiveLink] = useState("");

  function handleLinkClick(linkName) {
    setActiveLink(linkName);
  }

  return (
    <div className="m-md:transition-all" id="navLinksHolder">
      <ul className="nav-group flex items-center m-md:absolute m-md:flex m-md:flex-col m-md:left-[-100%] m-md:top-[64px] m-md:bg-white m-md:w-full py-3 m-md:z-20 m-md:transition-all">
        <NavLinks
          name="Home"
          id="home"
          className={`${linkClass} ${
            location.pathname === "/" && activeLink !== "Explore"
              ? "activated"
              : ""
          }`}
          link="/"
          onClick={() => handleLinkClick("Home")}
        />
        <NavLinks
          name="Explore"
          className={`${linkClass} ${
            location.pathname === "/explore" && activeLink !== "Home"
              ? "activated"
              : ""
          }`}
          link="/explore"
          onClick={() => handleLinkClick("Explore")}
        />
        <NavLinks name="Item Details" className={linkClass} />
        <NavLinks name="Author" className={linkClass} />
        <NavLinks name="Create Yours" className={linkClass} />
      </ul>
    </div>
  );
}

export default NavHolder;
