import { Link } from "react-router-dom";
function AuthorPageHeader() {
  return (
    <div className="pageContent mx-auto w-fit py-64 text-center text-white">
      <h2 className="text-xl font-medium mb-5">Author Details</h2>
      <h1 className="text-5xl font-bold mb-6">VIEW DETAILS FOR AUTHOR</h1>
      <span className="text-mainColor text-base">
        <Link to="/">Home</Link> {">"}
        <Link to="/author" className="text-white">
          Author
        </Link>
      </span>
    </div>
  );
}
export default AuthorPageHeader;
