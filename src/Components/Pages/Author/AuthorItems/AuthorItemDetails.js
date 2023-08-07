import Buttons from "../../../Buttons";
import "../Author.css";
function AuthorItemDetails(props) {
  return (
    <>
      <div className="author-card h-fit bg-cardColor border border-borderColor rounded-3xl p-5 relative m-md:mt-10 ">
        <img
          src={props.artistImg}
          alt={props.artistName}
          loading="lazy"
          className="rounded-full mx-auto absolute top-5 left-[40%] max-w-[50px]"
        />
        <img
          src={props.img}
          alt={props.title}
          loading="lazy"
          className="rounded-3xl mx-auto max-w-[190px] mt-6"
        />
        <h4 className="mt-7 text-white text-xl font-bold">{props.title}</h4>
        <div className="line h-[1px] w-[90%] bg-borderColor mx-auto my-6"></div>
        <div className="flex flex-col flex-wrap justify-between items-start gap-2 text-white">
          <div className="bid w-full ">
            <span className="text-base">
              Current Bid:
              <strong className="text-lg">{props.eth}</strong>
            </span>
          </div>
          <div className="end w-full mb-6">
            <span className="text-base">
              Ends In:
              <strong className="text-lg">{props.expireDate}</strong>
            </span>
          </div>
        </div>
        <div className="author-btn w-full h-full">
          <Buttons title="View Details" />
        </div>
      </div>
    </>
  );
}

export default AuthorItemDetails;
