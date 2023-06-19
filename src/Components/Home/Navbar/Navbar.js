import logo from "../../../Images/logo.png";
import NavLinks from "./NavLinks";
function Navbar() {
  return (
    <>
      <div className="container mx-auto">
        <nav className=" bg-white rounded-full w-4/5 mx-auto py-3 ps-5 pe-5 flex items-center justify-between">
          <div className="navbar-brand">
            <img src={logo} alt="logo" className="logo" />
          </div>
          <ul className="nav-group flex items-center">
            <NavLinks name="Home" id="home" />
            <NavLinks name="Explore" />
            <NavLinks name="Item Details" />
            <NavLinks name="Author" />
            <NavLinks name="Create Yours" />
          </ul>
        </nav>
      </div>
    </>
  );
}

export default Navbar;
