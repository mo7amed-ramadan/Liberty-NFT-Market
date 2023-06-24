function LeftBtn() {
  return (
    <div className="btn-holder mt-8">
      <button className="main-btn text-white text-sm font-medium tracking-[0.5px] bg-transparent py-3 px-8 mr-4 border border-mainColor rounded-full transition-all hover:bg-mainColor relative m-sm:px-5 m-sm:text-xs">
        <a href="/">Explore Top NFTs</a>
      </button>
      <button className="main-btn text-white text-sm font-medium tracking-[0.5px] bg-mainColor py-3 px-8 rounded-full transition-all hover:bg-white hover:text-mainColor relative m-sm:px-5 m-sm:text-xs">
        <a href="/">Watch our videos</a>
      </button>
    </div>
  );
}

export default LeftBtn;
