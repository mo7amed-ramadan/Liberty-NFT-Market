import Heading from "../../Home/Category Collection/Add-ons/Heading";
import TextHighlight from "../../../TextHighlight";
import ItemContent from "./ItemContent";
function ItemPreview({ titleVal, thumb, descVal, userVal, priceVal }) {
  return (
    <div className="mx-auto w-10/12">
      <Heading
        headingTitle={
          <>
            This Is <TextHighlight highlight="Your Item" /> Preview.
          </>
        }
      />
      <ItemContent
        itemThumb={thumb}
        itemTitleVal={titleVal}
        itemDescVal={descVal}
        itemUserVal={userVal}
        itemPriceVal={priceVal}
      />
    </div>
  );
}

export default ItemPreview;
