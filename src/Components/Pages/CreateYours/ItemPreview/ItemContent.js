import { useEffect, useState } from "react";
import artistThumb from "../../../../Images/author-02.jpg";
function ItemContent({
  itemTitleVal,
  itemThumb,
  itemDescVal,
  itemUserVal,
  itemPriceVal,
}) {
  const [itemImg, setItemImg] = useState();
  const [itemTitle, setItemTitle] = useState("");
  const [itemDesc, setItemDesc] = useState("");
  const [itemUser, setItemUser] = useState("");
  const [itemPrice, setItemPrice] = useState("");
  useEffect(() => {
    setItemImg(itemThumb);
    setItemTitle(itemTitleVal);
    setItemDesc(itemDescVal);
    setItemUser(itemUserVal);
    setItemPrice(itemPriceVal);
  }, [itemThumb, itemTitleVal, itemDescVal, itemUserVal, itemPriceVal]);
  return (
    <div className="flex flex-row flex-wrap m-md:flex-col items-center justify-between">
      <img
        src={itemImg}
        alt="item thumb"
        loading="lazy"
        className="w-[40%] rounded-2xl m-md:w-full m-md:mb-5"
      />
      <div className="w-[57%] text-white m-md:w-full">
        <h4 className="font-bold text-xl mb-5">{itemTitle}</h4>
        <div className="cart-artist flex flex-row items-center mb-7">
          <img
            src={artistThumb}
            alt="artist"
            loading="lazy"
            className="rounded-full w-[8%]"
          />
          <div className="flex flex-col ml-5 text-base">
            <span>{itemUser}</span>
            <a
              href="/itemdetails"
              className="text-mainColor font-bold lowercase"
            >
              @{itemUser.replace(/\s+/g, "")}
            </a>
          </div>
        </div>
        <p className="max-w-full text-sm mb-8 leading-loose">{itemDesc}</p>
        <div className="flex flex-row flex-wrap items-center justify-between m-sm:flex-col m-sm:items-start m-sm:text-left">
          <div className="bid flex flex-col items-center m-sm:text-left m-sm:items-start">
            <span className="text-base">Current Bid:</span>
            <strong className="text-mainColor text-2xl">{itemPrice}ETH</strong>
            <span className="text-[#afafaf]">
              (
              {parseFloat(itemPrice * 184179).toLocaleString("en-US", {
                style: "currency",
                currency: "USD",
                maximumFractionDigits: 2,
              })}
              )
            </span>
          </div>
          <div className="owner flex flex-col items-center m-sm:text-left m-sm:items-start m-sm:mt-3">
            <span className="text-base">Owner</span>
            <strong className="text-mainColor text-2xl">{itemUser}</strong>
            <span className="text-[#afafaf] lowercase">{`(@${itemUser.replace(
              /\s+/g,
              ""
            )})`}</span>
          </div>
          <div className="end flex flex-col items-center m-sm:text-left m-sm:items-start m-sm:mt-3">
            <span className="text-base">Ends In</span>
            <strong className="text-mainColor text-2xl">1D 5H</strong>
            <span className="text-[#afafaf]">(January 22nd, 2023)</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ItemContent;
