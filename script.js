// currencies

const currencies = [
  { symbol: "ARS", name: "Peso argentin", country: "Argentine", flag: "🇦🇷" },
  {
    symbol: "AUD",
    name: "Dollar australien",
    country: "Australie",
    flag: "🇦🇺",
  },
  { symbol: "BRL", name: "Réal brésilien", country: "Brésil", flag: "🇧🇷" },
  { symbol: "CAD", name: "Dollar canadien", country: "Canada", flag: "🇨🇦" },
  { symbol: "CHF", name: "Franc suisse", country: "Suisse", flag: "🇨🇭" },
  { symbol: "CLP", name: "Peso chilien", country: "Chili", flag: "🇨🇱" },
  { symbol: "CNY", name: "Yuan renminbi", country: "Chine", flag: "🇨🇳" },
  {
    symbol: "CZK",
    name: "Couronne tchèque",
    country: "République tchèque",
    flag: "🇨🇿",
  },
  { symbol: "DKK", name: "Couronne danoise", country: "Danemark", flag: "🇩🇰" },
  { symbol: "EUR", name: "Euro", country: "Zone euro", flag: "🇪🇺" },
  { symbol: "GBP", name: "Livre sterling", country: "Royaume-Uni", flag: "🇬🇧" },
  {
    symbol: "HKD",
    name: "Dollar de Hong Kong",
    country: "Hong Kong",
    flag: "🇭🇰",
  },
  { symbol: "HRK", name: "Kuna croate", country: "Croatie", flag: "🇭🇷" },
  { symbol: "HUF", name: "Forint hongrois", country: "Hongrie", flag: "🇭🇺" },
  { symbol: "INR", name: "Roupie indienne", country: "Inde", flag: "🇮🇳" },
  {
    symbol: "ISK",
    name: "Couronne islandaise",
    country: "Islande",
    flag: "🇮🇸",
  },
  { symbol: "JPY", name: "Yen japonais", country: "Japon", flag: "🇯🇵" },
  {
    symbol: "KRW",
    name: "Won sud-coréen",
    country: "Corée du Sud",
    flag: "🇰🇷",
  },
  { symbol: "NGN", name: "Naira nigérian", country: "Nigéria", flag: "🇳🇬" },
  {
    symbol: "NZD",
    name: "Dollar néo-zélandais",
    country: "Nouvelle-Zélande",
    flag: "🇳🇿",
  },
  { symbol: "PLN", name: "Zloty polonais", country: "Pologne", flag: "🇵🇱" },
  { symbol: "RON", name: "Leu roumain", country: "Roumanie", flag: "🇷🇴" },
  { symbol: "RUB", name: "Rouble russe", country: "Russie", flag: "🇷🇺" },
  { symbol: "SEK", name: "Couronne suédoise", country: "Suède", flag: "🇸🇪" },
  {
    symbol: "SGD",
    name: "Dollar de Singapour",
    country: "Singapour",
    flag: "🇸🇬",
  },
  { symbol: "THB", name: "Baht thaïlandais", country: "Thaïlande", flag: "🇹🇭" },
  { symbol: "TRY", name: "Livre turque", country: "Turquie", flag: "🇹🇷" },
  {
    symbol: "TWD",
    name: "Nouveau dollar taïwanais",
    country: "Taïwan",
    flag: "🇹🇼",
  },
  {
    symbol: "USD",
    name: "Dollar américain",
    country: "États-Unis",
    flag: "🇺🇸",
  },
];

// selecteur

let symbol = document.getElementById("symbol");
let name = document.getElementById("name");
let country = document.getElementById("country");
let flag = document.getElementById("flag");

console.log(symbol);

currencies.forEach((currency) => {
  console.log(`>>>> ${currency.name}`);
  console.log(`>>>> ${currency.country}`);
  console.log(`>>>> ${currency.flag}`);
  console.log("\n");
});
