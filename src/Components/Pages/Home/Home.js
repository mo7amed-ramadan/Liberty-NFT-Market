import Navbar from "./Navbar/Navbar";
import Main from "./Main/Main";
import CategoryCollection from "./Category Collection/CategoryCollection";
function Home() {
  return (
    <div className="home h-full pb-60 m-sm:pb-20" id="home">
      <Navbar />
      <div className="container mx-auto ">
        <Main />
        <CategoryCollection />
      </div>
    </div>
  );
}

export default Home;
