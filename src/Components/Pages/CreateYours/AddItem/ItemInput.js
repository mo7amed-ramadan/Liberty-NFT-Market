function ItemInput(props) {
  return (
    <fieldset className="flex flex-col gap-2 w-fit m-md:w-full">
      <label className="font-semibold text-white text-base">{props.name}</label>
      <input
        type={props.type}
        placeholder={props.placeholder}
        autoComplete="on"
        required
        className="h-12 px-4 bg-cardColor border border-borderColor rounded-full text-[#afafaf] font-bold focus:border-0 focus:outline-none"
        min={props.min}
        max={props.max}
        id={props.id}
      />
    </fieldset>
  );
}

export default ItemInput;
