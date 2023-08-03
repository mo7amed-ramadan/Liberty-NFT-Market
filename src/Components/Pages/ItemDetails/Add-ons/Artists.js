function Artists(props) {
  return (
    <div className="flex flex-row flex-no-wrap items-center w-[31%] bg-cardColor border border-borderColor rounded-3xl mt-8 mr-4 m-md:w-full">
      <img
        src={props.img}
        alt={props.name}
        className="rounded-s-3xl m-sm:w-1/2"
        loading="lazy"
      />
      <div className="content text-white flex flex-col items-start mx-5 m-md:w-full">
        <div className="flex flex-col text-base m-sm:text-xs">
          <span className="text-xl font-bold m-sm:text-sm">{props.name}</span>
          <a href="/itemdetails" className="text-mainColor font-bold">
            @davidwalker
          </a>
        </div>
        <div className="line bg-borderColor h-[1px] w-full mx-auto my-6"></div>
        <span className="font-semibold m-sm:text-sm">
          Bid:
          <span className="text-mainColor text-xl font-bold ml-2 m-sm:text-sm">
            0.06 ETH
          </span>
        </span>
        <span className="text-mainColor m-sm:text-xs">24/07/2022, 22:00</span>
      </div>
    </div>
  );
}

export default Artists;
