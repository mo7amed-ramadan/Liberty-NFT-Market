import LeftBtn from "./LeftBtn";
import MainContent from "./MainContent";

function LeftSide() {
  return (
    <>
      <div className="flex flex-col items-start w-1/2 m-sm:w-full m-md:w-7/12">
        <MainContent />
        <LeftBtn firstLink="Explore Top NFTs" />
      </div>
    </>
  );
}

export default LeftSide;
