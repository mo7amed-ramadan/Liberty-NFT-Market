import Category from "./Category";
import Collection from "./Collection";
import "./CategoryCollection.css";
function CategoryCollection() {
  return (
    <>
      <div className=" bg-categoryCollectionBg bg-center bg-no-repeat bg-cover pt-32 pb-36 flex items-center">
        <div className="container">
          <Category />
          <Collection />
        </div>
      </div>
    </>
  );
}

export default CategoryCollection;
