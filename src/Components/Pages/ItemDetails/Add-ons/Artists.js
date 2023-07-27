function Artists(props) {
  return (
    <div className="flex flex-row flex-no-wrap items-center w-[31%] bg-cardColor border border-borderColor rounded-3xl mt-8 mr-4">
      <img
        src={props.img}
        alt={props.name}
        className=" rounded-s-3xl"
        loading="lazy"
      />
      <div className="content text-white flex flex-col items-start ml-5">
        <div className="flex flex-col text-base">
          <span className="text-xl font-bold">{props.name}</span>
          <a href="/itemdetails" className="text-mainColor font-bold">
            @davidwalker
          </a>
        </div>
        <div className="line bg-borderColor h-[1px] w-full mx-auto my-6"></div>
        <span className="font-semibold">
          Bid:{" "}
          <span className="text-mainColor text-xl font-bold">0.06 ETH</span>
        </span>
        <span className="text-mainColor">24/07/2022, 22:00</span>
      </div>
    </div>
  );
}

export default Artists;
