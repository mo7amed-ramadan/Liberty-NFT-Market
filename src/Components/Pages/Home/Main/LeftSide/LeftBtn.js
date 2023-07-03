import Buttons from "../../../../Buttons";

function LeftBtn(props) {
  return (
    <div className="btn-holder mt-8">
      <button className="main-btn text-white text-sm font-medium tracking-[0.5px] bg-transparent py-3 px-8 mr-4 border border-mainColor rounded-full transition-all hover:bg-mainColor relative m-sm:px-5 m-sm:text-xs">
        <a href="/">{props.firstLink}</a>
      </button>
      <Buttons title="Watch our videos" />
    </div>
  );
}

export default LeftBtn;
