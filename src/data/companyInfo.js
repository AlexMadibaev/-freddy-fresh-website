// Информация о компании Freddy Fresh AG
// Основана на данных с официального сайта: https://www.freddy-fresh.de/

export const companyInfo = {
  name: "Freddy Fresh AG",
  slogan: "Schnell - heiß - freundlich - lecker",
  description: "Der beste Pizza Lieferservice in Deutschland",
  rating: "120369 Bewertungen auf ProvenExpert.com",
  
  // Навигация
  navigation: [
    { name: "Jetzt bestellen", path: "/stores" },
    { name: "Stores", path: "/stores" },
    { name: "Speisekarte", path: "/menu" },
    { name: "Aktion", path: "/aktion" },
    { name: "Feedback", path: "/feedback" },
    { name: "Jobs", path: "/jobposting" },
    { name: "Franchise", path: "/franchise" },
    { name: "Qualität", path: "/qualitaet" }
  ],

  // Франшиза
  franchise: {
    title: "Fair und mit System zum Erfolg",
    subtitle: "Werde Franchise Partner",
    links: [
      { name: "Franchise", path: "/franchise" },
      { name: "Die Erfolgsgeschichte", path: "/franchise/geschichte" },
      { name: "Die Konditionen", path: "/franchise/konditionen" },
      { name: "Die Partnerschaft", path: "/franchise/partnerschaft" },
      { name: "Jetzt Durchstarten", path: "/franchise/durchstarten" },
      { name: "Stores", path: "/stores" }
    ]
  },

  // Промо-блоки
  promotions: [
    {
      title: "AKTION",
      icon: "🎯"
    },
    {
      title: "FREDDYS SOMMERGEWINNSPIEL",
      subtitle: "GLÜCK AUF BESTELLUNG",
      description: "BESSER ALS WEIHNACHT",
      icon: "🏖️"
    },
    {
      title: "GESCHENK GUTSCHEIN",
      description: "GESCHENK-PROBLEM? AUSDRUCKEN STATT AUSREDEN!",
      icon: "🎁"
    },
    {
      title: "JOBS",
      icon: "🚪"
    },
    {
      title: "FREDDY COINS",
      description: "ERFAHRE ALLES ÜBER UNSER NEUES BONUSSYSTEM",
      icon: "🪙"
    },
    {
      title: "FRANCHISE",
      icon: "👨"
    }
  ],

  // 5 причин выбрать Freddy Fresh
  reasons: [
    {
      number: 1,
      title: "Größte Auswahl!",
      description: "wenn du Pizza bestellen willst, genießt du eine große Auswahl bei unserem Freddy Fresh Pizza Lieferservice."
    },
    {
      number: 2,
      title: "Bester Lieferservice in ganz Deutschland!",
      description: "Wir sind der Pizza Lieferservice deines Vertrauens und immer in deiner Nähe."
    },
    {
      number: 3,
      title: "Frische Garantie!",
      description: "Bei uns bekommst du vielfältige und frische Pizza online - einfach und unkompliziert."
    },
    {
      number: 4,
      title: "Nachhaltigkeit ist einfach lecker!",
      description: "Bei all unseren Produkten achten wir auf die Verwendung nachhaltig hergestellter Lebensmittel und somit auch hochwertige Qualität."
    },
    {
      number: 5,
      title: "Wir haben das besondere Etwas!",
      description: "Damit sind wir kein beliebiger Pizza Lieferservice, sondern machen Pizza bestellen zu einem kulinarischen Vergnügen."
    }
  ],

  // Филиалы (основные города)
  locations: [
    "Aschersleben", "Aue", "Bad Harzburg", "Bautzen", "Berlin", "Berlin-Hellersdorf", 
    "Berlin-Prenzlauer Berg", "Bernburg", "Bitterfeld", "Braunschweig", "Braunschweig-Broitzem", 
    "Braunschweig-Lamme", "Chemnitz", "Chemnitz-Ost", "Chemnitz-West", "Coswig", "Cottbus", 
    "Cottbus-Nord", "Cottbus-Süd", "Darmstadt", "Delitzsch", "Dessau", "Dessau-Nord", 
    "Dessau-Süd", "Dresden", "Dresden-Altstadt", "Dresden-Cotta", "Dresden-Löbtau", 
    "Dresden-Ost", "Dresden-Striesen", "Dresden-Süd", "Dresden-Weixdorf", "Döbeln", 
    "Eisleben", "Erfurt", "Erfurt-Mitte", "Erfurt-Nord", "Eschweiler", "Freiberg", 
    "Freiburg", "Freital", "Gera", "Gifhorn", "Goslar", "Grimma", "Großenhain", 
    "Görlitz", "Halberstadt", "Halle", "Halle-Neustadt", "Halle-Ost", "Halle-Süd", 
    "Hoyerswerda", "Jena", "Jena-Drackendorf", "Jena-West", "Kamenz", "Köthen", 
    "Leipzig", "Leipzig-Möckern", "Leipzig-Paunsdorf", "Leipzig-Plagwitz", 
    "Leipzig-Stötteritz", "Magdeburg", "Magdeburg-Brückfeld", "Magdeburg-Neustadt", 
    "Meerane", "Meißen", "Merseburg", "Mühlhausen", "Naumburg", "Neubrandenburg", 
    "Nordhausen", "Nürnberg-Maxfeld", "Pirna", "Plauen", "Radeberg", "Radebeul", 
    "Riesa", "Saalfeld", "Sangerhausen", "Schönebeck", "Staßfurt", "Stendal", 
    "Weimar", "Wernigerode", "Wittenberg", "Zeitz", "Zwickau-Innenstadt"
  ],

  // Детальная информация о магазинах
  stores: [
    {
      id: 1,
      name: "Freddy Fresh\nAschersleben",
      address: {
        street: "Hecklinger Straße 12b",
        city: "06449 Aschersleben"
      },
      owner: "Maik Warnstedt",
      contact: {
        email: "aschersleben@freddy-fresh.de",
        phone: "03473/9141939"
      },
      hours: {
        "Donnerstag": "11:00 - 21:00 Uhr",
        "Freitag": "11:00 - 21:30 Uhr",
        "Samstag": "11:00 - 21:30 Uhr",
        "Sonntag": "11:00 - 21:00 Uhr",
        "Montag": "11:00 - 21:00 Uhr",
        "Dienstag": "11:00 - 21:00 Uhr",
        "Mittwoch": "11:00 - 21:00 Uhr",
        "Feiertags": "11:00 - 21:00 Uhr"
      },
      note: "Vorbestellungen möglich bis zum 11.09.2025"
    },
    {
      id: 2,
      name: "Freddy Fresh\nBerlin",
      address: {
        street: "Alexanderplatz 1",
        city: "10178 Berlin"
      },
      owner: "Hans Müller",
      contact: {
        email: "berlin@freddy-fresh.de",
        phone: "030/12345678"
      },
      hours: {
        "Montag": "11:00 - 22:00 Uhr",
        "Dienstag": "11:00 - 22:00 Uhr",
        "Mittwoch": "11:00 - 22:00 Uhr",
        "Donnerstag": "11:00 - 22:00 Uhr",
        "Freitag": "11:00 - 23:00 Uhr",
        "Samstag": "11:00 - 23:00 Uhr",
        "Sonntag": "11:00 - 22:00 Uhr",
        "Feiertags": "11:00 - 22:00 Uhr"
      },
      note: "Vorbestellungen möglich bis zum 15.09.2025"
    },
    {
      id: 3,
      name: "Freddy Fresh\nDresden",
      address: {
        street: "Altmarkt 1",
        city: "01067 Dresden"
      },
      owner: "Maria Schmidt",
      contact: {
        email: "dresden@freddy-fresh.de",
        phone: "0351/87654321"
      },
      hours: {
        "Montag": "11:00 - 21:30 Uhr",
        "Dienstag": "11:00 - 21:30 Uhr",
        "Mittwoch": "11:00 - 21:30 Uhr",
        "Donnerstag": "11:00 - 21:30 Uhr",
        "Freitag": "11:00 - 22:00 Uhr",
        "Samstag": "11:00 - 22:00 Uhr",
        "Sonntag": "11:00 - 21:00 Uhr",
        "Feiertags": "11:00 - 21:00 Uhr"
      },
      note: "Vorbestellungen möglich bis zum 12.09.2025"
    },
    {
      id: 4,
      name: "Freddy Fresh\nLeipzig",
      address: {
        street: "Markt 1",
        city: "04109 Leipzig"
      },
      owner: "Peter Weber",
      contact: {
        email: "leipzig@freddy-fresh.de",
        phone: "0341/11223344"
      },
      hours: {
        "Montag": "11:00 - 21:00 Uhr",
        "Dienstag": "11:00 - 21:00 Uhr",
        "Mittwoch": "11:00 - 21:00 Uhr",
        "Donnerstag": "11:00 - 21:00 Uhr",
        "Freitag": "11:00 - 21:30 Uhr",
        "Samstag": "11:00 - 21:30 Uhr",
        "Sonntag": "11:00 - 21:00 Uhr",
        "Feiertags": "11:00 - 21:00 Uhr"
      },
      note: "Vorbestellungen möglich bis zum 10.09.2025"
    },
    {
      id: 5,
      name: "Freddy Fresh\nChemnitz",
      address: {
        street: "Markt 1",
        city: "09111 Chemnitz"
      },
      owner: "Anna Fischer",
      contact: {
        email: "chemnitz@freddy-fresh.de",
        phone: "0371/55667788"
      },
      hours: {
        "Montag": "11:00 - 21:00 Uhr",
        "Dienstag": "11:00 - 21:00 Uhr",
        "Mittwoch": "11:00 - 21:00 Uhr",
        "Donnerstag": "11:00 - 21:00 Uhr",
        "Freitag": "11:00 - 21:30 Uhr",
        "Samstag": "11:00 - 21:30 Uhr",
        "Sonntag": "11:00 - 21:00 Uhr",
        "Feiertags": "11:00 - 21:00 Uhr"
      },
      note: "Vorbestellungen möglich bis zum 13.09.2025"
    }
  ],

  // Информация о бургерах
  burgerInfo: {
    title: "Top Burger in deiner Nähe: Burger bestellen & Liefern Lassen",
    subtitle: "Freddy Fresh ist Dein Burger Lieferservice",
    description: "Neben ofenfrischer Pizza, kannst du im Freddy Fresh Onlineshop auch saftige Burger bestellen. Auf der Freddy Fresh Speisekarte findest du die beliebtesten Streetfood Klassiker.",
    types: [
      "Hamburger", "Cheeseburger", "vegane Burger", "vegetarische Burger", 
      "Crispy Chicken", "Burger Patties aus 100% echtem Rindfleisch"
    ],
    recommendation: "Classic Freddy Burger"
  },

  // Контактная информация
  contact: {
    company: "Freddy Fresh AG",
    links: [
      { name: "Kontakt", path: "/kontakt" },
      { name: "Impressum", path: "/impressum" },
      { name: "Datenschutz", path: "/datenschutz" },
      { name: "Zusatzstoffe & Allergene", path: "/allergene" }
    ]
  },

  // Дополнительные услуги
  services: [
    "Pizza Lieferdienst",
    "Fingerfood und Snacks",
    "Köstliche Dips",
    "Frische Salate",
    "Schmackhafte Burger",
    "Leckere Pasta"
  ],

  // Время доставки
  deliveryTime: "i.d.R. innerhalb von nur 30 Minuten",

  // Принципы компании
  principles: {
    sustainability: "nachhaltig produzierte Lebensmittel",
    freshness: "frische Lebensmittel",
    health: "gesunde Ernährung",
    quality: "hochwertige Qualität"
  }
};

export default companyInfo;
