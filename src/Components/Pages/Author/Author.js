import Navbar from "../Home/Navbar/Navbar";
import AuthorPageHeader from "./AuthorPageHeader/AuthorPageHeader";
import AuthorDetails from "./AuthorDetails/AuthorDetails";
import AuthorItem from "./AuthorItems/AuthorItem";
import CreateNFT from "../Home/CreateNFT/CreateNFT";
import Footer from "../../Footer";
function Author() {
  return (
    <>
      <div className="container mx-auto">
        <div className="bg-exploreBg w-full h-full bg-cover bg-no-repeat">
          <Navbar />
          <AuthorPageHeader />
        </div>
        <div className="bg-categoryCollectionBg w-full h-full bg-no-repeat bg-cover py-40">
          <div className="mx-auto w-10/12">
            <AuthorDetails />
            <AuthorItem />
          </div>
        </div>
        <CreateNFT />
        <Footer />
      </div>
    </>
  );
}

export default Author;
