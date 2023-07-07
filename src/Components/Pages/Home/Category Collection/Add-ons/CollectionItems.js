import Buttons from "../../../../Buttons";
function CollectionItems(props) {
  return (
    <div className="collection-items relative">
      <div className="explore-btn">
        <Buttons title={props.btn} btnClass="explore-btn" />
      </div>
      {/* Item Holder */}
      <div className=" flex flex-col">
        <img src={props.Img} alt={props.title} className="rounded-t-3xl" />
        {/* Content */}
        <div className="content bg-cardColor border border-borderColor p-[30px] rounded-b-3xl flex-1">
          {/* title */}
          <h4 className="text-white text-lg font-bold pb-5 mb-5 border-b border-[#fff3] m-md:text-base">
            {props.title}
          </h4>
          <div className="w-full flex flex-row flex-wrap justify-between mb-4">
            <span className="text-white text-sm font-medium w-[50%] m-md:text-xs">
              Items In Collection:
              <span className="block text-white font-bold text-xl m-md:text-lg">
                {props.num}
              </span>
            </span>
            <span className="w-[50%] text-right text-white text-sm font-medium m-md:text-xs">
              Category:
              <span className="block text-white font-bold text-xl m-md:text-lg">
                {props.category}
              </span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CollectionItems;
