import LeftSide from "./LeftSide/LeftSide";
import RightSide from "./RightSide/RightSide";
import "./Main.css";
function Main() {
  return (
    <>
      <div className="container">
        <div className="main w-full ps-28 pt-36 flex flex-row flex-wrap justify-between items-center">
          <LeftSide />
          <RightSide />
        </div>
      </div>
    </>
  );
}

export default Main;
