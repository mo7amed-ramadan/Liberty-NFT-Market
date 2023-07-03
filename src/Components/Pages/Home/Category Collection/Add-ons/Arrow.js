import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
function Arrow() {
  return (
    <div className="angle flex items-center justify-center w-12 h-12 bg-white text-lg text-mainColor rounded-full absolute top-[85%] right-[34%] cursor-pointer hover:bg-mainColor hover:text-white transition-all">
      <FontAwesomeIcon icon={faAngleRight} />
    </div>
  );
}

export default Arrow;
