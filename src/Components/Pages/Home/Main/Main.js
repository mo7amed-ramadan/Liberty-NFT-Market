import LeftSide from "./LeftSide/LeftSide";
import RightSide from "./RightSide/RightSide";
import "./Main.css";
function Main() {
  return (
    <>
      <div className="container">
        <div className="main bg-homeBg bg-no-repeat bg-cover w-full ps-28 pt-48 pb-60 flex flex-row flex-wrap justify-between items-center m-md:px-8 m-sm:px-4 m-sm:pt-20">
          <LeftSide />
          <RightSide />
        </div>
      </div>
    </>
  );
}

export default Main;
