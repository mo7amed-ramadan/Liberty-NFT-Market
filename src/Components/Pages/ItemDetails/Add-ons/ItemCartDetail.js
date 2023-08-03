import Buttons from "../../../Buttons";
import ItemDetailsImg from "../../../../Images/item-details-01.jpg";
import ArtistsHolder from "./ArtistsHolder";

function ItemCartDetail(props) {
  return (
    <div className="flex flex-row flex-wrap m-md:flex-col items-center justify-between">
      <img
        src={ItemDetailsImg}
        alt={props.title}
        loading="lazy"
        className="w-[47%] rounded-2xl m-md:w-full m-md:mb-5"
      />
      <div className="w-[47%] text-white m-md:w-full">
        <h4 className="font-bold text-xl mb-5">{props.title}</h4>
        <div className="cart-artist flex flex-row items-center mb-7">
          <img
            src={props.artistImg}
            alt={props.artistName}
            loading="lazy"
            className="rounded-full w-[8%]"
          />
          <div className="flex flex-col ml-5 text-base">
            <span>{props.artistName}</span>
            <a href="/itemdetails" className="text-mainColor font-bold">
              @Libertyart
            </a>
          </div>
        </div>
        <p className="max-w-full text-sm mb-8 leading-loose">
          Aute sit et do culpa proident voluptate velit consequat deserunt sit
          amet culpa magna. Do velit voluptate tempor et ea enim tempor qui sit
          sit. Pariatur non proident est aute cupidatat elit adipisicing eu
          tempor aliquip. Cupidatat aute ipsum aliquip ad adipisicing. Ea non
          irure ex velit nisi veniam. Aliquip mollit ad ad aliquip pariatur
          magna do nisi.
        </p>
        <div className="flex flex-row flex-wrap items-center justify-between m-sm:flex-col m-sm:items-start m-sm:text-left">
          <div className="bid flex flex-col items-center">
            <span className="text-base">Current Bid:</span>
            <strong className="text-mainColor text-2xl">{props.eth}</strong>
            <span className="text-[#afafaf]">({props.price})</span>
          </div>
          <div className="owner flex flex-col items-center m-sm:text-left m-sm:items-start mt-3">
            <span className="text-base">Owner</span>
            <strong className="text-mainColor text-2xl">David Walker</strong>
            <span className="text-[#afafaf]">{`(@davidwalker)`}</span>
          </div>
          <div className="end flex flex-col items-center m-sm:text-left m-sm:items-start mt-3">
            <span className="text-base">Ends In</span>
            <strong className="text-mainColor text-2xl">
              {props.expireTime}
            </strong>
            <span className="text-[#afafaf]">{props.expireDate}</span>
          </div>
          <div className="flex flex-row items-center mt-8 m-sm:flex-col m-sm:items-start">
            <span className="text-[#afafaf]">Place Bid:</span>
            <span className="mx-4 py-2 px-4 rounded-full border border-mainColor text-lg m-sm:mx-0 m-sm:my-3">
              {props.eth}
            </span>
            <Buttons title="Submit Now" />
          </div>
        </div>
      </div>
      <ArtistsHolder />
    </div>
  );
}

export default ItemCartDetail;
