import Navbar from "./Navbar/Navbar";

function Home() {
  return (
    <div className="home bg-homeBg bg-cover bg-center bg-no-repeat h-screen">
      <div className="container mx-auto pt-6">
        <Navbar />
      </div>
    </div>
  );
}

export default Home;
