function TableHeader() {
  return (
    <tr className="table-holder">
      <th className="border-r-2 border-white">#</th>
      <th className="pl-2 border-r-2 border-white">Coin</th>
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
