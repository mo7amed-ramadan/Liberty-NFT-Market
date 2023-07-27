import Navbar from "../Home/Navbar/Navbar";
import ItemCart from "./Add-ons/ItemCart";
import ItemPageHeader from "./Add-ons/ItemPageHeader";
import Heading from "../Home/Category Collection/Add-ons/Heading";
import TextHighlight from "../../TextHighlight";
import CreateNFT from "../Home/CreateNFT/CreateNFT";
import Footer from "../../Footer";
function ItemDetailsPage() {
  return (
    <>
      <div className="container mx-auto">
        <div className="bg-exploreBg w-full h-full bg-cover bg-no-repeat">
          <Navbar />
          <ItemPageHeader />
        </div>
        <div className="item-cart bg-categoryCollectionBg w-full h-full bg-no-repeat py-40">
          <div className="mx-auto w-10/12">
            <Heading
              headingTitle={
                <>
                  View Details <TextHighlight highlight="For Item" /> Here.
                </>
              }
            />
            <ItemCart />
          </div>
        </div>
        <CreateNFT />
        <Footer />
      </div>
    </>
  );
}

export default ItemDetailsPage;
