function CryptoItem(props) {
  return (
    <>
      <tr className="crypto-item w-[90%] mx-auto">
        <td className="num border-r-2 border-white m-sm:text-xs m-sm:px-2 m-sm:text-left m-sm:w-[82px] m-sm:max-w-[82px] m-sm:min-w-[82px] m-sm:left-0 m-sm:sticky m-sm:bg-[#24242e] ">
          {props.num}
        </td>
        <td className="coin-thumb pl-2 py-3 border-r-2 border-white m-sm:w-[82px] m-sm:max-w-[82px] m-sm:min-w-[82px] m-sm:left-[82px] m-sm:sticky m-sm:bg-[#24242e] ">
          <img src={props.img} alt="bitcoin" loading="lazy" />
        </td>
        <td className="pl-2 border-r-2 border-white m-md:text-sm m-sm:text-xs">
          {props.name}
        </td>
        <td className="pl-2 border-r-2 border-white m-md:text-sm m-sm:text-xs">
          {props.priceUSD}
        </td>
        <td className="pl-2 border-r-2 border-white m-md:text-sm m-sm:text-xs">
          {props.priceEGP}
        </td>
        <td
          id="hour"
          className={`pl-2 border-r-2 border-white m-md:text-sm m-sm:text-xs ${
            props.hour < 0 ? "text-red-600" : " text-green-600"
          }`}
        >
          {props.hour}%
        </td>
        <td
          id="day"
          className={`pl-2 border-r-2 border-white m-md:text-sm m-sm:text-xs ${
            props.day < 0 ? "text-red-600" : " text-green-600"
          }`}
        >
          {props.day}%
        </td>
        <td
          id="week"
          className={`pl-2 border-r-2 border-white m-md:text-sm m-sm:text-xs ${
            props.week < 0 ? "text-red-600" : " text-green-600"
          }`}
        >
          {props.week}%
        </td>
        <td id="market" className="pl-2 m-md:text-sm m-sm:text-xs">
          {props.marketCap}
        </td>
      </tr>
    </>
  );
}

export default CryptoItem;
