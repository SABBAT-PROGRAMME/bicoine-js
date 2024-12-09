// currencies

const currencies = [
  {
    id: 0,
    symbol: "ARS",
    name: "Peso argentin",
    country: "Argentine",
    flag: "🇦🇷",
  },
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

let list = document.querySelector(".list");

for (key in currencies) {
  let currency = currencies[key];
  let id = currency.id;
  let symbol = currency.symbol;
  let name = currency.name;
  let country = currency.country;
  let flag = currency.flag;

  console.log(id);
  console.log(symbol);
  console.log(name);
  console.log(country);
  console.log(flag);
  console.log("\n");

  list.innerHTML += `
    <div class="list">
      <span class="id">${id}</span>
      <span class="symbol">${symbol}</span>
      <span class="name">${name}</span>
      <span class="country">${country}</span>
      <span class="flag">${flag}</span>
    </div>
  `;
}

// api fetch

let url = "https://blockchain.info/ticker";

// Fonction pour récupérer les données
async function recuperPrix() {
  try {
    const requete = await fetch(url, { method: "GET" });

    if (!requete.ok) {
      throw new Error("Une erreur est survenue !");
    }

    const reponse = await requete.json();

    // Cibler le conteneur principal
    const container = document.querySelector("#currencies-container");

    // Vider le conteneur avant d'ajouter les nouvelles données
    container.innerHTML = "";

    // Parcourir les devises et créer des éléments dynamiques
    for (const key in reponse) {
      const currency = reponse[key];

      console.log(currency);

      // Créer un conteneur pour chaque devise
      const currencyDiv = document.createElement("div");
      currencyDiv.className = "currency";

      // Ajouter les informations
      currencyDiv.innerHTML = `
        <h3>${key}</h3>
        <p class="price"><strong>15 min moyenne :</strong> ${currency["15m"]}</p>
        <p><strong>Dernier prix :</strong> ${currency.last}</p>
        <p><strong>Achat :</strong> ${currency.buy}</p>
        <p><strong>Vente :</strong> ${currency.sell}</p>
      `;

      // Ajouter ce conteneur au conteneur principal
      container.appendChild(currencyDiv);
    }
  } catch (error) {
    alert(error.message);
  }
}

// Actualiser toutes les 5 secondes
setInterval(recuperPrix, 5000);
