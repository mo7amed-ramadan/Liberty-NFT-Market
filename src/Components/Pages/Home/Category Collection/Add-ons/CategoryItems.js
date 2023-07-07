import Icons from "../../../../Icons";
import Arrow from "./Arrow";

function Items(props) {
  return (
    <>
      <div className="items  flex flex-col items-center border border-borderColor rounded-[20px] text-center p-7 relative m-md:justify-center m-md:mb-10 m-sm:w-full">
        <Icons img={props.Img} icon={props.icon} />
        <h4 className="mt-4 text-white text-xl font-bold"> {props.name} </h4>
        <div className="arrow opacity-0 invisible transition-all">
          <Arrow />
        </div>
      </div>
    </>
  );
}

export default Items;
