
require(["esri/config", "esri/Map", "esri/views/MapView"], function(esriConfig, Map, MapView) {

    esriConfig.apiKey = "YOUR_API_KEY";

    const map = new Map({
      basemap: "arcgis-imagery" // Basemap layer service
    });

    const view = new MapView({
      map: map,
      center: [121.5, 25.027], // Longitude, latitude
      zoom: 10, // Zoom level
      container: "viewDiv" // Div element
    });

  });