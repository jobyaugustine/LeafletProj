var map = L.map('map', {
    'center': [0, 0],
    'zoom': 0,
    'layers': [
      L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        'attribution': 'Map data &copy; OpenStreetMap contributors'
      })
    ]
  });
  
  var maxBounds = L.latLngBounds(
    L.latLng(5.499550, -167.276413),
    L.latLng(83.162102, -52.233040)
  );
  
  map.setMaxBounds(maxBounds);
  map.fitBounds(maxBounds);