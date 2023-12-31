import Artists from "./Artists";
import Artist01 from "../../../../Images/current-01.jpg";
import Artist02 from "../../../../Images/current-02.jpg";
import Artist03 from "../../../../Images/current-03.jpg";
import Artist04 from "../../../../Images/current-04.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

function ArtistsHolder() {
  return (
    <>
      <div className="artist-header w-full flex flex-row justify-between mt-32 mb-8 m-sm:flex-col m-sm:mb-5">
        <span className="text-white text-xl font-bold bg-mainColor px-5 py-2 rounded-3xl m-sm:text-base">
          Current Bidding Prices (ETH)
        </span>
        <span className="text-white font-semibold cursor-pointer m-sm:w-fit m-sm:mt-3 m-sm:ml-auto">
          sort By: Late
          <FontAwesomeIcon
            icon={faChevronDown}
            className="text-xs ml-5 text-borderColor"
          />
        </span>
      </div>
      <br />
      <div className="flex flex-row flex-wrap items-center m-sm:flex-col m-md:w-full">
        <Artists name="David Walker" img={Artist01} />
        <Artists name="David Walker" img={Artist02} />
        <Artists name="David Walker" img={Artist03} />
        <Artists name="David Walker" img={Artist04} />
        <Artists name="David Walker" img={Artist01} />
        <Artists name="David Walker" img={Artist02} />
      </div>
    </>
  );
}

export default ArtistsHolder;
