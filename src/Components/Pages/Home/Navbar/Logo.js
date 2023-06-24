import logo from "../../../../Images/logo.png";

function Logo() {
  return (
    <>
      <a className="navbar-brand" href="/">
        <img src={logo} alt="logo" className="logo m-md:w-28" />
      </a>
    </>
  );
}

export default Logo;
