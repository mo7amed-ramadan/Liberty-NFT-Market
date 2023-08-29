import { Link } from "react-router-dom";
function NavLinks(props) {
  return (
    <>
      <Link
        to={props.link}
        className={props.className}
        id={props.id}
        onClick={props.changeColor}
      >
        <a href={props.link}>{props.name}</a>
      </Link>
    </>
  );
}

export default NavLinks;
