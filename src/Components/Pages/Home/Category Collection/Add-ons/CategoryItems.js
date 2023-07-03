import Arrow from "./Arrow";

function Items(props) {
  return (
    <>
      <div className="items  flex flex-col items-center border border-[#404245] rounded-[20px] text-center p-7 relative m-md:justify-center m-md:mb-10 m-sm:w-full">
        <div className="bg-white flex items-center justify-center w-16 h-16 text-center rounded-full">
          <img src={props.Img} alt={props.icon} className="max-w-[31px]" />
        </div>
        <h4 className="mt-4 text-white text-xl font-bold"> {props.name} </h4>
        <div className="arrow opacity-0 invisible transition-all">
          <Arrow />
        </div>
      </div>
    </>
  );
}

export default Items;
