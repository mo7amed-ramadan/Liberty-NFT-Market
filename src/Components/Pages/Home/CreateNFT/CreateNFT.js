import Buttons from "../../../Buttons";
import Heading from "../Category Collection/Add-ons/Heading";
import "./CreateNFT.css";
import CreationDetails from "./CreationDetails";
import DigitalArt from "../../../../Images/icon-02.png";
import VirtualWorld from "../../../../Images/icon-04.png";
import TripleNFT from "../../../../Images/icon-06.png";
function CreateNFT() {
  return (
    <div className="create-nft bg-createNftBg bg-cover bg-no-repeat bg-center container mx-auto px-16 py-32">
      <header className="flex flex-row items-center justify-between w-full">
        <Heading headingTitle="Create Your NFT & Put It On The Market." />
        <Buttons title="Create Your NFT Now" />
      </header>
      <div className="flex flex-row mt-24">
        {/* First */}
        <CreationDetails
          img={DigitalArt}
          icon={DigitalArt}
          title="Set Up Your Wallet"
          description="NFT means Non-Fungible Token that are used in digital cryptocurrency markets. There are many different kinds of NFTs in the industry."
          num="1"
        />
        {/* Second */}
        <CreationDetails
          img={VirtualWorld}
          icon={VirtualWorld}
          title="Add Your Digital NFT"
          description="There are 5 different HTML pages included in this NFT website template. You can edit or modify any section on any page as you required."
          num="2"
        />
        {/* Third */}
        <CreationDetails
          img={TripleNFT}
          icon={TripleNFT}
          title="Sell Your NFT & Make Profit"
          description="If you would like to support our TemplateMo website, please visit our contact page to make a PayPal contribution. Thank you."
        />
      </div>
    </div>
  );
}

export default CreateNFT;
