import ItemInput from "./ItemInput";
import Buttons from "../../../Buttons";
function InputHolder() {
  return (
    <div className="input-holder bg-addItemColor w-[90%] py-8 px-4 mx-auto rounded-3xl flex flex-row flex-wrap gap-8 items-center justify-between m-md:flex-col m-md:items-start">
      <ItemInput
        name="Item Title"
        type="text"
        placeholder="Colored Cat Dancing"
        id="title"
      />
      <ItemInput
        name="Description For Item"
        type="text"
        placeholder="Give us your idea"
        id="description"
      />
      <ItemInput
        name="Your Username"
        type="text"
        placeholder="Ex. Mohammed Ramadan 25"
        id="userName"
      />
      <ItemInput
        name="Price Of Item"
        type="text"
        placeholder="Price of item depends on quality. Ex.2.53ETH"
        id="itemPrice"
      />
      <ItemInput
        name="Royalties"
        type="number"
        placeholder="Common royalties 1-25%"
        min="1"
        max="25"
      />
      <fieldset className="flex flex-col gap-2 w-fit">
        <label className="font-semibold text-white text-base">Your File</label>
        <input type="file" required id="file" />
      </fieldset>
      <Buttons title="Submit" btnClass="w-[40%] h-[50px]" id="input-btn" />
    </div>
  );
}

export default InputHolder;
