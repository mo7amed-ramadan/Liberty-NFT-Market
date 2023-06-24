import Navbar from "./Navbar/Navbar";
import "./Home.css";
import Main from "./Main/Main";
function Home() {
  return (
    <div
      className="home bg-homeBg bg-cover bg-center bg-no-repeat h-full pb-60"
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
