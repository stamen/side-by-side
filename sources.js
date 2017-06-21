var mapACurrentKey = 'toner';
var mapBCurrentKey = 'positron';

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
    url: "http://{s}.tile.stamen.com/toner/{z}/{x}/{y}" + (L.Browser.retina ? '@2x' : '') + ".png"
  },
  terrain: {
    name: "Stamen Terrain",
    url: "http://{s}.tile.stamen.com/terrain/{z}/{x}/{y}" + (L.Browser.retina ? '@2x' : '') + ".png"
  },
  positron: {
    name: "CartoDB Positron",
    url: "http://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}" + (L.Browser.retina ? '@2x' : '') + ".png"
  }
}
