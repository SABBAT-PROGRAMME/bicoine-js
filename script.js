// currencies

const currencies = [
  { symbol: "ARS", name: "Peso argentin", country: "Argentine", flag: "🇦🇷" },
  {
    id: 1,
    symbol: "AUD",
    name: "Dollar australien",
    country: "Australie",
    flag: "🇦🇺",
  },
  {
    id: 2,
    symbol: "BRL",
    name: "Réal brésilien",
    country: "Brésil",
    flag: "🇧🇷",
  },
  {
    id: 3,
    symbol: "CAD",
    name: "Dollar canadien",
    country: "Canada",
    flag: "🇨🇦",
  },
  { id: 4, symbol: "CHF", name: "Franc suisse", country: "Suisse", flag: "🇨🇭" },
  { id: 5, symbol: "CLP", name: "Peso chilien", country: "Chili", flag: "🇨🇱" },
  { symbol: "CNY", name: "Yuan renminbi", country: "Chine", flag: "🇨🇳" },
  {
    id: 6,
    symbol: "CZK",
    name: "Couronne tchèque",
    country: "République tchèque",
    flag: "🇨🇿",
  },
  {
    id: 7,
    symbol: "DKK",
    name: "Couronne danoise",
    country: "Danemark",
    flag: "🇩🇰",
  },
  { id: 8, symbol: "EUR", name: "Euro", country: "Zone euro", flag: "🇪🇺" },
  { symbol: "GBP", name: "Livre sterling", country: "Royaume-Uni", flag: "🇬🇧" },
  {
    id: 9,
    symbol: "HKD",
    name: "Dollar de Hong Kong",
    country: "Hong Kong",
    flag: "🇭🇰",
  },
  {
    id: 10,
    symbol: "HRK",
    name: "Kuna croate",
    country: "Croatie",
    flag: "🇭🇷",
  },
  {
    id: 11,
    symbol: "HUF",
    name: "Forint hongrois",
    country: "Hongrie",
    flag: "🇭🇺",
  },
  {
    id: 12,
    symbol: "INR",
    name: "Roupie indienne",
    country: "Inde",
    flag: "🇮🇳",
  },
  {
    id: 13,
    symbol: "ISK",
    name: "Couronne islandaise",
    country: "Islande",
    flag: "🇮🇸",
  },
  { id: 14, symbol: "JPY", name: "Yen japonais", country: "Japon", flag: "🇯🇵" },
  {
    id: 15,
    symbol: "KRW",
    name: "Won sud-coréen",
    country: "Corée du Sud",
    flag: "🇰🇷",
  },
  {
    id: 16,
    symbol: "NGN",
    name: "Naira nigérian",
    country: "Nigéria",
    flag: "🇳🇬",
  },
  {
    id: 17,
    symbol: "NZD",
    name: "Dollar néo-zélandais",
    country: "Nouvelle-Zélande",
    flag: "🇳🇿",
  },
  {
    id: 18,
    symbol: "PLN",
    name: "Zloty polonais",
    country: "Pologne",
    flag: "🇵🇱",
  },
  {
    id: 19,
    symbol: "RON",
    name: "Leu roumain",
    country: "Roumanie",
    flag: "🇷🇴",
  },
  {
    id: 20,
    symbol: "RUB",
    name: "Rouble russe",
    country: "Russie",
    flag: "🇷🇺",
  },
  {
    id: 21,
    symbol: "SEK",
    name: "Couronne suédoise",
    country: "Suède",
    flag: "🇸🇪",
  },
  {
    id: 22,
    symbol: "SGD",
    name: "Dollar de Singapour",
    country: "Singapour",
    flag: "🇸🇬",
  },
  {
    id: 23,
    symbol: "THB",
    name: "Baht thaïlandais",
    country: "Thaïlande",
    flag: "🇹🇭",
  },
  {
    id: 24,
    symbol: "TRY",
    name: "Livre turque",
    country: "Turquie",
    flag: "🇹🇷",
  },
  {
    id: 25,
    symbol: "TWD",
    name: "Nouveau dollar taïwanais",
    country: "Taïwan",
    flag: "🇹🇼",
  },
  {
    id: 26,
    symbol: "USD",
    name: "Dollar américain",
    country: "États-Unis",
    flag: "🇺🇸",
  },
];

// selecteur

// Sélection de la liste <ol>
const currencyList = document.querySelector("#currency-list");

// Parcourir chaque devise
currencies.forEach((currency) => {
  // Création d'un élément <li> pour chaque devise
  const listItem = document.createElement("li");
  listItem.className =
    "list-group-item d-flex justify-content-between align-items-start";

  // Contenu principal de l'élément
  const contentDiv = document.createElement("div");
  contentDiv.className = "ms-2 me-auto";

  // Texte avec le symbole, le nom, le pays et le drapeau
  contentDiv.innerHTML = `
    <div class="fw-bold"><b>${currency.symbol}</b></div>
    <span class="text-muted currencies">${currency.name}</span>: 
    <span class="country">${currency.country}</span> 
    <span class="flag">${currency.flag}</span>
  `;

  // Ajout du contenu à l'élément <li>
  listItem.appendChild(contentDiv);

  // Ajout de l'élément <li> à la liste <ol>
  currencyList.appendChild(listItem);
});
