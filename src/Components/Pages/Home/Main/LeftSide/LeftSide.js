import LeftBtn from "./LeftBtn";
import MainContent from "./MainContent";

function LeftSide() {
  return (
    <>
      <div className="flex flex-col items-start w-1/2 m-sm:w-full">
        <MainContent />
        <LeftBtn />
      </div>
    </>
  );
}

export default LeftSide;
