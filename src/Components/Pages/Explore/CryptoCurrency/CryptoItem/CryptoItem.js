function CryptoItem(props) {
  return (
    <>
      <tr className="crypto-item w-[90%] mx-auto">
        <td className="border-r-2 border-white">{props.num}</td>
        <td className="coin-thumb pl-2 py-3 border-r-2 border-white">
          <img src={props.img} alt="bitcoin" loading="lazy" />
        </td>
        <td className="pl-2 border-r-2 border-white">{props.name}</td>
        <td className="pl-2 border-r-2 border-white">{props.priceUSD}</td>
        <td className="pl-2 border-r-2 border-white">{props.priceEGP}</td>
        <td
          id="hour"
          className={`pl-2 border-r-2 border-white ${
            props.hour < 0 ? "text-red-600" : " text-green-600"
          }`}
        >
          {props.hour}%
        </td>
        <td
          id="day"
          className={`pl-2 border-r-2 border-white ${
            props.day < 0 ? "text-red-600" : " text-green-600"
          }`}
        >
          {props.day}%
        </td>
        <td
          id="week"
          className={`pl-2 border-r-2 border-white ${
            props.week < 0 ? "text-red-600" : " text-green-600"
          }`}
        >
          {props.week}%
        </td>
        <td id="market" className="pl-2">
          {props.marketCap}
        </td>
      </tr>
    </>
  );
}

export default CryptoItem;
