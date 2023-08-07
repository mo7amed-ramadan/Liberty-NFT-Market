import AuthorImg from "../../../../Images/single-author.jpg";
import RightSide from "./RightSide";

function AuthorDetails() {
  return (
    <div className="flex flex-row flex-wrap justify-between m-md:flex-col m-md:items-center m-md:gap-8">
      <div className="left-side flex flex-row items-center">
        <img
          src={AuthorImg}
          alt="author"
          className="rounded-full m-sm:w-[45%]"
          loading="lazy"
        />
        <div className="text-white flex flex-col justify-center ml-8">
          <span className="font-bold text-xl">Melanie Smith</span>
          <a href="/author" className="text-mainColor font-bold text-base">
            @melanie32
          </a>
        </div>
      </div>
      <RightSide />
    </div>
  );
}

export default AuthorDetails;
