import { Link } from "react-router-dom";
function ItemPageHeader() {
  return (
    <div className="pageContent mx-auto w-fit py-64 text-center text-white">
      <h2 className="text-xl font-medium mb-5">Liberty NFT Market</h2>
      <h1 className="text-5xl font-bold mb-6">VIEW ITEM DETAILS</h1>
      <span className="text-mainColor text-base">
        <Link to="/">Home</Link> {">"}
        <Link to="/itemdetails" className="text-white">
          Item Details
        </Link>
      </span>
    </div>
  );
}
export default ItemPageHeader;
