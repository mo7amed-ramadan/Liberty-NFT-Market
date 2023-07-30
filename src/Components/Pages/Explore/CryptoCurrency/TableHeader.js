function TableHeader() {
  return (
    <tr className="table-holder relative">
      <th className="num-header border-r-2 border-white m-sm:pl-2 m-sm:w-[82px] m-sm:max-w-[82px] m-sm:min-w-[82px] m-sm:left-0 m-sm:sticky m-sm:bg-[#24242e] z-10">
        #
      </th>
      <th className="coin pl-2 border-r-2 border-white m-sm:w-[82px] m-sm:max-w-[82px] m-sm:min-w-[82px] m-sm:left-[82px] m-sm:sticky m-sm:bg-[#24242e]">
        Coin
      </th>
      <th className="pl-2 border-r-2 border-white">Name</th>
      <th className="pl-2 border-r-2 border-white">Price in $</th>
      <th className="pl-2 border-r-2 border-white">Price in E£</th>
      <th className="pl-2 border-r-2 border-white">1h</th>
      <th className="pl-2 border-r-2 border-white">24h</th>
      <th className="pl-2 border-r-2 border-white">7d</th>
      <th className="pl-2 border-r-2 border-white">Market cap</th>
    </tr>
  );
}

export default TableHeader;
