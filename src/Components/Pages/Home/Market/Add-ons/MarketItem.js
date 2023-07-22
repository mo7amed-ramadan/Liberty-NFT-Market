function MarketItem(props) {
  return (
    <div className="card bg-cardColor border-borderColor border flex flex-row flex-nowrap items-center w-[45%] p-8 mt-20 rounded-[20px] m-md:w-full m-sm:flex-col">
      <img
        src={props.nftImg}
        alt="product"
        className=" max-h-80 max-w-[210px] rounded-[20px] mr-8 m-sm:w-full m-sm:mb-4 m-sm:mx-auto"
        loading="lazy"
      />
      <div className="card-content w-full text-white">
        <h4 className="text-lg mb-5 font-bold">{props.title}</h4>
        <div className="artist flex flex-row items-center mb-6">
          <img
            src={props.artistImg}
            alt="author"
            className="rounded-full max-w-[50%] w-[20%] mr-4"
            loading="lazy"
          />
          <div className="flex flex-col">
            <span className="text-base">{props.name}</span>
            <a href="/" className="text-mainColor font-bold">
              @libertyart
            </a>
          </div>
        </div>
        <hr className="border border-[#fff3] rounded-full h-[1px] mb-6 mt-8" />
        <div className="price">
          <span className="text-base">
            Current Bid:
            <strong className="text-xl ml-2">{props.eth}</strong>
          </span>
          <span className="text-sm block text-mainColor text-right">
            {props.price}
          </span>
        </div>
        <div className="expire mt-4">
          <span className="text-base">
            Ends In:
            <strong className="text-lg ml-2">{props.time}</strong>
          </span>
          <span className="text-sm block text-mainColor text-right">
            {props.date}
          </span>
        </div>
        <div className="view-link mt-5 text-center">
          <a
            href="/"
            className="font-bold text-mainColor underline underline-offset-4"
          >
            View Items Details
          </a>
        </div>
      </div>
    </div>
  );
}

export default MarketItem;
