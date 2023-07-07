import Icons from "../../../Icons";

function CreationDetails(props) {
  return (
    <div className="creation-details flex items-start w-2/6 mr-4">
      <div className="content flex flex-col pl-2">
        <Icons img={props.img} icon={props.icon} />
        <h4 className="text-white text-xl font-bold mt-7 mb-4">
          {props.title}
        </h4>
        <p className="text-white text-sm leading-[30px] mr-8">
          {props.description}
        </p>
      </div>
      <div className="h-full flex flex-col items-center">
        <span className="text-white">{props.num}</span>
        <div className="creation-line bg-[#fff3] h-[95%] w-[1px]"></div>
      </div>
    </div>
  );
}

export default CreationDetails;
