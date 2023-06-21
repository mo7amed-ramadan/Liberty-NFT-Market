function NavLinks(props) {
  return (
    <>
      <li className={props.className} id={props.id}>
        <a href="/">{props.name}</a>
      </li>
    </>
  );
}

export default NavLinks;
