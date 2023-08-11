function Buttons(props) {
  return (
    <>
      <button
        className={`main-btn text-white text-sm font-medium tracking-[0.5px] bg-mainColor py-3 px-8 rounded-full transition-all hover:bg-white hover:text-mainColor relative m-sm:px-5 m-sm:text-xs ${props.btnClass}`}
        id={props.id}
      >
        <a href={props.link} target="_blank" rel="noreferrer">
          {props.title}
        </a>
      </button>
    </>
  );
}

export default Buttons;
