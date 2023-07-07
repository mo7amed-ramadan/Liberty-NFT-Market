import Heading from "./Add-ons/Heading";
import CategoryItems from "./Add-ons/CategoryItems";
import TextHighlight from "../../../TextHighlight";
// Import images
import BlockChain from "../../../../Images/icon-01.png";
import DigitalArt from "../../../../Images/icon-02.png";
import MusicArt from "../../../../Images/icon-03.png";
import VirtualWorld from "../../../../Images/icon-04.png";
import Valuable from "../../../../Images/icon-05.png";
import TripleNFT from "../../../../Images/icon-06.png";
function Category() {
  return (
    <div className="category flex flex-col items-center justify-center">
      <Heading
        headingTitle={
          <>
            Browse Through Our <TextHighlight highlight="Categories" /> Here.
          </>
        }
      />
      <div className="items-group w-4/5 mx-auto flex flex-row flex-wrap justify-between">
        <CategoryItems
          Img={BlockChain}
          icon="Blockchain icon"
          name="Blockchain"
        />
        <CategoryItems
          Img={DigitalArt}
          icon="Digital Art icon"
          name="Digital Art"
        />
        <CategoryItems Img={MusicArt} icon="Music Art icon" name="Music Art" />
        <CategoryItems
          Img={VirtualWorld}
          icon="Virtual World icon"
          name="Virtual World"
        />
        <CategoryItems Img={Valuable} icon="Valuable icon" name="Valuable" />
        <CategoryItems
          Img={TripleNFT}
          icon="TripleNFT icon"
          name="Triple NFT"
        />
      </div>
    </div>
  );
}

export default Category;
