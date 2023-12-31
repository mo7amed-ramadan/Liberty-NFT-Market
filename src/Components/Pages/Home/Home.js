import Navbar from "./Navbar/Navbar";
import Main from "./Main/Main";
import CategoryCollection from "./Category Collection/CategoryCollection";
import CreateNFT from "./CreateNFT/CreateNFT";
import Market from "./Market/Market";
import Footer from "../../Footer";
function Home() {
  return (
    <div className="home h-full" id="home">
      <Navbar />
      <div className="container mx-auto ">
        <Main />
        <CategoryCollection />
        <CreateNFT />
        <Market />
        <Footer />
      </div>
    </div>
  );
}

export default Home;
