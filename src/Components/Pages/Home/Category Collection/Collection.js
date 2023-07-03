import TextHighlight from "../../../TextHighlight";
import CollectionSlider from "./Add-ons/CollectionSlider";
import Heading from "./Add-ons/Heading";

function Collection() {
  return (
    <div className="container mx-auto">
      <div className="collection mt-36">
        <Heading
          headingTitle={
            <>
              Explore Some Hot <TextHighlight highlight="Collections" /> In
              Market.
            </>
          }
        />
        <div className="collection-slider w-[90%] h-[500px] mx-auto">
          <CollectionSlider />
        </div>
      </div>
    </div>
  );
}

export default Collection;
