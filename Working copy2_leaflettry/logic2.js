


// // Create a map object.
// var myMap = L.map("map", {
//     center: [37.09, -95.71],
//     zoom: 5
//   });
  
//   // Add a tile layer.
//   L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
//       attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
//   }).addTo(myMap);

//----------------


//   L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
//         'attribution': 'Map data &copy; OpenStreetMap contributors'
//       }).addTo(myMap);

// //--------------
// function createMap(unempCrimeStates) {

//     // Create the tile layer that will be the background of our map.
//     var streetmap = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
//         attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
//     });
  
  
//     // Create a baseMaps object to hold the streetmap layer.
//     var baseMaps = {
//       "Street Map": streetmap
//     };
  
//     // Create an overlayMaps object to hold the bikeStations layer.
//     var overlayMaps = {
//       "UnempCrime Points": unempCrimeStates
//     };
  
//     // Create the map object with options.
//     var myMap = L.map("map", {
//       center: [37.09, -95.71],
//       zoom: 5,
//       layers: [streetmap, unempCrimeStates]
//     });
  
//     // Create a layer control, and pass it baseMaps and overlayMaps. Add the layer control to the map.
//     L.control.layers(baseMaps, overlayMaps, {
//       collapsed: false
//     }).addTo(myMap);
//   }



// //------------------


// function createMarkers(data_var) {

//     // Pull the "stations" property from response.data.
//     // console.log(response);
//     //  var unemp_arr = data_var.length();
//     // console.log(unemp_arr);

//     // Initialize an array to hold Unemployment markers.
//     var unempMarkers = [];

//      // Create a new marker cluster group.
//      var markers = L.markerClusterGroup();
  
//     // Loop through the stations array.
//     for (var index = 0; index < data_var.length; index++) {
//       var unemp = data_var[index];

//       // Set the data location property to a variable.
//       var totcrime = data_var[index].Total_CrimeRate;
//       // Check for the location property.
//     // if (totcrime) {

//     //     // Add a new marker to the cluster group, and bind a popup.
//     //     markers.addLayer(L.marker([totcrime.Latitude, totcrime.Longitude])
//     //       .bindPopup("<h3>" + totcrime.State + "<h3><h3>Year: " + totcrime.Year + "</h3><h3>Year: " + totcrime.Unemployment + "</h3>"));
//     //   }
//     // // Add our marker cluster layer to the map.
//     // myMap.addLayer(markers);

//       // For each station, create a marker, and bind a popup with the station's name.
//       var unempMarker = L.marker([unemp.Latitude, unemp.Longitude])
//         .bindPopup("<h3>" + unemp.State + "<h3><h3>Year: " + unemp.Year + "</h3><h3>Year: " + unemp.Unemployment + "</h3>");
  
//     //   // Add the marker to the bikeMarkers array.
//        unempMarkers.push(unempMarker);
//     }
  
//     // Create a layer group that's made from the bike markers array, and pass it to the createMap function.
//      createMap(L.layerGroup(unempMarkers));
//   }

// // Perform an API call to the Citi Bike API to get the station information. Call createMarkers when it completes.
// d3.json("Export_DataFrame.json").then(createMarkers);


// // Our style object
// var mapStyle = {
//     color: "white",
//     fillColor: "pink",
//     fillOpacity: 0.5,
//     weight: 1.5
//   };
// // Getting our GeoJSON data
// d3.json("Export_DataFrame.json").then(function(data) {
//     // Creating a GeoJSON layer with the retrieved data
//     L.geoJson(data, {
//         // Passing in our style object
//         style: mapStyle
//       }).addTo(myMap);
//   });
// Store our API endpoint as queryUrl.
// var queryUrl = "https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&starttime=2021-01-01&endtime=2021-01-02&maxlongitude=-69.52148437&minlongitude=-123.83789062&maxlatitude=48.74894534&minlatitude=25.16517337";

// Perform a GET request to the query URL/

// const data = require('dataset3.js');
// console.log(data);

// var jsondata = []
// fetch('dataset3.js').then(response => jsondata = response.json());
// console.log(response);


// var div = L.DomUtil.create('div', 'info legend');
// div.innerHTML = '<select><option>1</option><option>2</option><option>3</option></select>';
// div.firstChild.onmousedown = div.firstChild.ondblclick = L.DomEvent.stopPropagation;
// // return div;

// fetch("dataset3.js")
//     .then(Response => Response.json())
//     .then(data => {
//         console.log(data);
//   		// or whatever you wanna do with the data
//     });
   

d3.json("dataset3.js").then(function (data) {

  // Once we get a response, send the data.features object to the createFeatures function.
  createFeatures(data.features);
});

function createFeatures(unempcrimeDatas) {

  // Define a function that we want to run once for each feature in the features array.
  // Give each feature a popup that describes the place and time of the earthquake.
  function onEachFeature(feature, layer) {
      
    layer.bindPopup(`<h3>${feature.properties.State}</h3><hr><h3>${feature.properties.Unemployment}</h3><h3>${feature.properties.Year}</h3>`);
    // <p>${new Date(feature.properties.time)}</p>`);
 
  }

  // Create a GeoJSON layer that contains the features array on the earthquakeData object.
  // Run the onEachFeature function once for each piece of data in the array.
  var unempcrimes = L.geoJSON(unempcrimeDatas, {
    onEachFeature: onEachFeature
  });

  // Send our earthquakes layer to the createMap function/
  createMap(unempcrimes);
}

function createMap(unempcrimes) {

  // Create the base layers.
  var street = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  })

  var topo = L.tileLayer('https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png', {
    attribution: 'Map data: &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, <a href="http://viewfinderpanoramas.org">SRTM</a> | Map style: &copy; <a href="https://opentopomap.org">OpenTopoMap</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)'
  });

  // Create a baseMaps object.
  var baseMaps = {
    "Street Map": street,
    "Topographic Map": topo
  };

  // Create an overlay object to hold our overlay.
  var overlayMaps = {
    UnEmployment: unempcrimes
  };

  // Create our map, giving it the streetmap and earthquakes layers to display on load.
  var myMap = L.map("map", {
    center: [
      37.09, -95.71
    ],
    zoom: 5,
    layers: [street, unempcrimes]
  });

  // Create a layer control.
  // Pass it our baseMaps and overlayMaps.
  // Add the layer control to the map.
  L.control.layers(baseMaps, overlayMaps, {
    collapsed: false
  }).addTo(myMap);

}
