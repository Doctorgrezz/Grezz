dataSetVersion = "2018-07-06"; // Change this when creating a new data set version. YYYY-MM-DD format.
dataSet[dataSetVersion] = {};

dataSet[dataSetVersion].options = [
  {
    name: "Filter by Series Entry",
    key: "series",
    tooltip: "Check this to restrict to certain series.",
    checked: false,
    sub: [
      { name: "Handgun", key: "HG" },
      { name: "Assault Rifle", key: "AR" },
      { name: "Shotgun", key: "SG" },
      { name: "Machine Gun", key: "MG" },
      { name: "Sniper Rifle", key: "SR" },
      { name: "Sub Machine Gun", key: "SMG" },
    ]
];

dataSet[dataSetVersion].characterData = [
  {
    name: "Bren Ten",
    img: "N0UY8qV.png",
    opts: {
      series: [ "HG" ]
    }
 },
  {
    name: "FNP-9",
    img: "43JLCcX.png",
	opts: {
		series: [ "HG" ]
	}
  },
  {
	name: "M1911",
	img: "OP5ZCPT.png",
	opts: {
		series: [ "HG" ]
	}
  }
];