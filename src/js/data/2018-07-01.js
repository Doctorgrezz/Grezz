dataSetVersion = "2018-07-01"; // Change this when creating a new data set version. YYYY-MM-DD format.
dataSet[dataSetVersion] = {};

dataSet[dataSetVersion].options = [
  {
    name: "Filter by Gun Type",
    key: "Series",
    tooltip: "Check this to restrict to certain series.",
    checked: false,
    sub: [
      { name: "Handgun", key: "HD" },
      { name: "Assault Rifle", tooltip: "Assault", key: "AR" },
      { name: "Shotgun", tooltip: "Shot", key: "SG" },
      { name: "Sniper Rifle", tooltip: "Sniper", key: "SR" },
      { name: "Sub Machine Gun", tooltip: "Sub", key: "SMG" },
      { name: "Machine Gun", tooltip: "Machine", key: "LMG" },
    ]
  },
];

dataSet[dataSetVersion].characterData = [
  {
    name: "Bren Ten",
    img: "1.png",
    opts: {
      series: [ "HD" ],
    }
  },
  {
    name: "FNP-9",
    img: "tJnkSzK.png",
    opts: {
      series: [ "HD" ],
    }
  }
];
