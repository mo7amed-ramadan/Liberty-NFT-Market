import { Link } from "react-router-dom";

function PageContent() {
  return (
    <div className="pageContent mx-auto w-fit py-64 text-center text-white">
      <h2 className="text-xl font-medium mb-5">Liberty NFT Market</h2>
      <h1 className="text-5xl font-bold mb-6">DISCOVER NFT MARKET</h1>
      <span className="text-mainColor text-base">
        <Link to="/">Home</Link> {">"}
        <Link to="/explore" className="text-white">
          Explore
        </Link>
      </span>
    </div>
  );
}

export default PageContent;
