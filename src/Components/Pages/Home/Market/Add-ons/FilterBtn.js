function FilterBtn(props) {
  return (
    <>
      <button
        className={props.class}
        onClick={props.function}
        value={props.value}
        id={props.id}
      >
        {props.title}
      </button>
    </>
  );
}

export default FilterBtn;
