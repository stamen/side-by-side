var default_A = 'Stamen Terrain (deployed)';
var default_B = 'Terrain Classic (local dev)';

var sources = {
  localterrain: {
    name: "Terrain Classic (local dev)",
    url: "http://localhost:8080/{z}/{x}/{y}.png"
  },
  google: {
    name: "Google Maps",
    url: "http://sm.mapstack.stamen.com/google_refreshed/{z}/{x}/{y}.png"
  },
  default: {
    name: "OSM default",
    url: "http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
  },
  toner: {
    name: "Stamen Toner",
    url: "http://{s}.tile.stamen.com/toner/{z}/{x}/{y}.png"
  },
  terrain: {
    name: "Stamen Terrain (deployed)",
    url: "http://{s}.tile.stamen.com/terrain/{z}/{x}/{y}.png"
  },
  positron: {
    name: "CartoDB Positron",
    url: "http://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png"
  }
}