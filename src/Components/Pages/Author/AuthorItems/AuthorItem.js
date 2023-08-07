import { useState } from "react";
import ItemDetails from "../../Home/Market/ItemsDetails";
import AuthorItemDetails from "./AuthorItemDetails";
import Heading from "../../Home/Category Collection/Add-ons/Heading";
import TextHighlight from "../../../TextHighlight";
function AuthorItem() {
  const [authorItem, setAuthorItem] = useState(ItemDetails.slice(1, 5));
  return (
    <div className="author-items mt-24">
      <Heading
        headingTitle={
          <>
            Melanie Smith's <TextHighlight highlight="Items" /> .
          </>
        }
      />
      <div className="flex flex-row flex-wrap justify-between m-sm:flex-col m-md:items-center m-md:justify-around">
        {authorItem.map((item) => {
          return (
            <AuthorItemDetails
              key={item.id}
              artistImg={item.artistImg}
              artistName={item.artistName}
              img={item.img}
              title={item.title}
              eth={item.eth}
              expireDate={item.expireDate}
            />
          );
        })}
      </div>
    </div>
  );
}

export default AuthorItem;
