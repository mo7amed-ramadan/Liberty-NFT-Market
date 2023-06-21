import LeftSide from "./LeftSide/LeftSide";
import RightSide from "./RightSide";
import "./Main.css";
function Main() {
  return (
    <>
      <div className="container">
        <div className="main w-1/2 mx-auto">
          <LeftSide />
          <RightSide />
        </div>
      </div>
    </>
  );
}

export default Main;
