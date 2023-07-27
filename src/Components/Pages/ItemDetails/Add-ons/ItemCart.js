import { useState } from "react";
import ItemsDetails from "../../Home/Market/ItemsDetails";
import ItemCartDetail from "./ItemCartDetail";
function ItemCart() {
  const [item, setItem] = useState([ItemsDetails[4]]);

  return (
    <>
      {item.map((product) => {
        return (
          <ItemCartDetail
            key={product.id}
            title={product.title}
            artistImg={product.artistImg}
            artistName={product.artistName}
            eth={product.eth}
            price={product.price}
            expireTime={product.expireTime}
            expireDate={product.expireDate}
          />
        );
      })}
    </>
  );
}

export default ItemCart;
