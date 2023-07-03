function Heading(props) {
  return (
    <div className="heading-title mb-20 flex flex-col items-center ">
      <div className=" bg-mainColor h-[2px] w-28 mb-7"></div>
      <h2 className="text-3xl text-white font-bold mt-3 m-sm:text-lg">
        {props.headingTitle}
      </h2>
    </div>
  );
}

export default Heading;
