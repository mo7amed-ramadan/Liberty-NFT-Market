import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeart,
  faHand,
  faDollarSign,
} from "@fortawesome/free-solid-svg-icons";
import Buttons from "../../../Buttons";
function RightSide() {
  return (
    <div className="right-side w-2/5 bg-cardColor border border-borderColor rounded-3xl px-8 py-5 m-md:w-full">
      <div className="flex flex-row flex-wrap justify-between items-center w-full mb-5">
        <div className="flex flex-col flex-wrap items-start">
          <FontAwesomeIcon
            icon={faHeart}
            className="text-mainColor text-2xl m-sm:text-lg"
          />
          <span className="text-white mt-1">
            <strong className="text-mainColor text-xl pr-1 m-sm:text-base">
              1238
            </strong>
            Likes
          </span>
        </div>
        <div className="flex flex-col flex-wrap items-start">
          <FontAwesomeIcon
            icon={faHand}
            className="text-mainColor text-2xl m-sm:text-lg"
          />
          <span className="text-white mt-1">
            <strong className="text-mainColor text-xl pr-1 m-sm:text-base">
              1238
            </strong>
            Likes
          </span>
        </div>
        <div className="flex flex-col flex-wrap items-start">
          <FontAwesomeIcon
            icon={faDollarSign}
            className="text-mainColor text-2xl m-sm:text-lg"
          />
          <span className="text-white mt-1">
            <strong className="text-mainColor text-xl pr-1 m-sm:text-base">
              1238
            </strong>
            Likes
          </span>
        </div>
      </div>
      <div className="flex flex-row justify-between items-center w-full m-sm:flex-col m-sm:items-start m-sm:gap-3">
        <span className="text-xl text-[#afafaf] font-bold m-sm:text-lg">
          559 Followers
        </span>
        <Buttons title="Follow @Melanie32" />
      </div>
    </div>
  );
}

export default RightSide;
