import { useEffect, useState } from "react";
import { fetchCryptoCurrency } from "../../../Api/CryptoApi";
import CryptoItem from "./CryptoItem/CryptoItem";
import Heading from "../../Home/Category Collection/Add-ons/Heading";
import TextHighlight from "../../../TextHighlight";
import TableHeader from "./TableHeader";
import Buttons from "../../../Buttons";
import Footer from "../../../Footer";
import "./CryptoCurrency.css";
function CryptoCurrency() {
  const [crypto, setCrypto] = useState([]);
  var [num, setNum] = useState(0);
  const cryptoArray = Object.values(crypto).slice(0, 10);

  useEffect(() => {
    const getCrypto = async () => {
      const data = await fetchCryptoCurrency();
      setCrypto(data);
    };
    getCrypto();
  }, []);
  useEffect(() => {
    setNum(num + 1);
  }, []);
  return (
    <>
      <div className="container">
        <div className="crypto-market bg-categoryCollectionBg bg-cover bg-no-repeat bg-center py-28">
          <Heading
            headingTitle={
              <>
                Browse Our <TextHighlight highlight="Crypto" /> Market Here.
              </>
            }
          />
          <table className="text-white mx-auto w-5/6 text-left">
            <thead>
              <TableHeader />
            </thead>
            <tbody>
              {cryptoArray.map((item) => {
                // return console.log(item);
                return (
                  <CryptoItem
                    key={item.id}
                    num={num++}
                    img={item.image.thumb}
                    name={item.id}
                    priceUSD={parseFloat(
                      item.market_data.current_price.usd
                    ).toLocaleString("en-US", {
                      style: "currency",
                      currency: "USD",
                      maximumFractionDigits: 2,
                    })}
                    priceEGP={parseFloat(
                      item.market_data.current_price.usd * 30.85
                    ).toLocaleString("en-US", {
                      style: "currency",
                      currency: "EGP",
                      maximumFractionDigits: 2,
                    })}
                    hour={
                      +parseFloat(
                        item.market_data.price_change_percentage_1h_in_currency
                          .usd
                      ).toFixed(1)
                    }
                    day={
                      +parseFloat(
                        item.market_data.market_cap_change_percentage_24h
                      ).toFixed(1)
                    }
                    week={
                      +parseFloat(
                        item.market_data.price_change_percentage_7d
                      ).toFixed(1)
                    }
                    marketCap={parseFloat(
                      item.market_data.market_cap.usd
                    ).toLocaleString("en-US", {
                      style: "currency",
                      currency: "USD",
                      maximumFractionDigits: 0,
                    })}
                  />
                );
              })}
            </tbody>
          </table>
          <div className="w-fit mx-auto" style={{ marginTop: "56px" }}>
            <Buttons
              title="Click Here To See Full Market"
              link="https://www.coingecko.com/"
            />
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default CryptoCurrency;
