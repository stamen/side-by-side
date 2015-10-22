var default_A = 'Stamen Toner';
var default_B = 'CartoDB Positron';

var sources = {
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
    name: "Stamen Terrain",
    url: "http://{s}.tile.stamen.com/terrain/{z}/{x}/{y}.png"
  },
  positron: {
    name: "CartoDB Positron",
    url: "http://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png"
  }
}