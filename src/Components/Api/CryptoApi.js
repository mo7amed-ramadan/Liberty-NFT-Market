const fetchCryptoCurrency = async () => {
  const response = await fetch("https://api.coingecko.com/api/v3/coins/");
  const data = await response.json();
  return data;
};
export { fetchCryptoCurrency };
