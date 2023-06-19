function NavLinks(props) {
  return (
    <>
      <li
        className="nav-item ps-3 pe-3 font-semibold text-sm text-[#2a2a2a]"
        id={props.id}
      >
        <a href="#">{props.name}</a>
      </li>
    </>
  );
}

export default NavLinks;
