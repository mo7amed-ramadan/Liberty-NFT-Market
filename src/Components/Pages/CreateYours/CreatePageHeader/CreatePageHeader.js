import { Link } from "react-router-dom";
function CreatePageHeader() {
  return (
    <div className="pageContent mx-auto w-fit py-64 text-center text-white">
      <h2 className="text-xl font-medium mb-5">Liberty NFT Market</h2>
      <h1 className="text-5xl font-bold mb-6">CREATE YOUR NFT NOW.</h1>
      <span className="text-mainColor text-base">
        <Link to="/">Home</Link> {">"}
        <Link to="/createyours" className="text-white">
          Create Yours
        </Link>
      </span>
    </div>
  );
}

export default CreatePageHeader;
