import { Link } from "react-router-dom";
function NavLinks(props) {
  return (
    <>
      <li className={props.className} id={props.id} onClick={props.changeColor}>
        <Link to={props.link}>{props.name}</Link>
      </li>
    </>
  );
}

export default NavLinks;
