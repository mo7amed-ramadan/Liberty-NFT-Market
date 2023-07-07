import MarketHeader from "./Add-ons/MarketHeader";
import MarketItem from "./Add-ons/MarketItem";
import "./Market.css";
import ItemsDetails from "./ItemsDetails";
import { useState } from "react";

function Market() {
  const [item, setItem] = useState(ItemsDetails);
  const [selectedCategory, setSelectedCategory] = useState("All");

  const handleFilterBtnClick = (event) => {
    const clickedBtn = event.target;
    const filterBtns = document.querySelectorAll(".filters-btn > *");
    setSelectedCategory(clickedBtn.value);
    filterBtns.forEach((btn) => {
      if (btn === clickedBtn) {
        btn.classList.add("activated");
      } else {
        btn.classList.remove("activated");
      }
    });
  };

  const filteredItems =
    selectedCategory === "All"
      ? item
      : item.filter((elem) => elem.category.includes(selectedCategory));

  return (
    <div className="market bg-categoryCollectionBg bg-cover bg-no-repeat py-28">
      <div className="container w-[90%] mx-auto">
        <MarketHeader functions={handleFilterBtnClick} />
        <div className="flex flex-row flex-wrap items-center justify-between duration-200">
          {filteredItems.map((elem) => {
            return (
              <MarketItem
                key={elem.id}
                title={elem.title}
                artistImg={elem.artistImg}
                nftImg={elem.img}
                name={elem.artistName}
                eth={elem.eth}
                price={elem.price}
                time={elem.expireTime}
                date={elem.expireDate}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
export default Market;
