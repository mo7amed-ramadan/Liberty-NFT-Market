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
        <Link to={props.link}>{props.name}</Link>
      </Link>
    </>
  );
}

export default NavLinks;
