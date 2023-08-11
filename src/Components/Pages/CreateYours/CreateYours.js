import Navbar from "../Home/Navbar/Navbar";
import AddItem from "./AddItem/AddItem";
import CreatePageHeader from "./CreatePageHeader/CreatePageHeader";
import Footer from "../../Footer";
import "./CreateYours.css";
function CreateYours() {
  return (
    <>
      <div className="bg-exploreBg w-full h-full bg-cover bg-no-repeat">
        <Navbar />
        <CreatePageHeader />
      </div>
      <div className="bg-categoryCollectionBg w-full h-full bg-no-repeat bg-cover py-40">
        <AddItem />
      </div>
      <Footer />
    </>
  );
}

export default CreateYours;
