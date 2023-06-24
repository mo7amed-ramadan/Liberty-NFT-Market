import Navbar from "./Navbar/Navbar";
import Main from "./Main/Main";
function Home() {
  return (
    <div
      className="home bg-homeBg bg-no-repeat bg-cover h-full pb-60 pt-5 m-md:pt-0 m-sm:pb-20"
      id="home"
    >
      <Navbar />
      <div className="container mx-auto ">
        <Main />
      </div>
    </div>
  );
}

export default Home;
