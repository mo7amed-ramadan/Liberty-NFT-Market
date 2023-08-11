import Heading from "../../Home/Category Collection/Add-ons/Heading";
import TextHighlight from "../../../TextHighlight";
import ItemPreview from "../ItemPreview/ItemPreview";
import InputHolder from "./InputHolder";
import itemThumb from "../../../../Images/item-details-01.jpg";
import { useEffect, useState } from "react";
function AddItem() {
  // the image of item
  const [thumb, setThumb] = useState(itemThumb);
  // the title of item
  const [titleVal, setTitleVal] = useState("Colored Ape");
  // the description of item
  const [descVal, setDescVal] = useState(
    "Lorem ipsum dolor sit amet, consectetu dipiscingei elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  );
  // the username of item
  const [userVal, setUserVal] = useState("@kataleey");
  // the price of item
  const [priceVal, setPriceVal] = useState("0.06 ETH");
  useEffect(() => {
    // the image of item
    const file = document.getElementById("file");
    // the title of item
    const title = document.getElementById("title");
    // the description of item
    const description = document.getElementById("description");
    // the username of item
    const userName = document.getElementById("userName");
    // the price of item
    const itemPrice = document.getElementById("itemPrice");
    // submit button
    const inputBtn = document.getElementById("input-btn");
    // when click change the value of items to the new values
    inputBtn.addEventListener("click", () => {
      // Set new Value to the title
      setTitleVal(title.value);
      // Set new Value to the description
      setDescVal(description.value);
      // Set new Value to the user name
      setUserVal(userName.value);
      // Set new Value to the price of item
      setPriceVal(itemPrice.value);
      //  Set new value to image
      // Create a FileReader to read the contents of the file
      const reader = new FileReader();
      reader.onloadend = () => {
        // The file's text will be printed here
        setThumb(reader.result);
      };
      // Read the file as a data URL
      reader.readAsDataURL(file.files[0]);
    });
  }, []);

  return (
    <>
      <Heading
        headingTitle={
          <>
            Add Your <TextHighlight highlight="Item" /> Here.
          </>
        }
      />
      <InputHolder />
      <div className="py-40">
        <ItemPreview
          thumb={thumb}
          titleVal={titleVal}
          descVal={descVal}
          userVal={userVal}
          priceVal={priceVal}
        />
      </div>
    </>
  );
}

export default AddItem;
