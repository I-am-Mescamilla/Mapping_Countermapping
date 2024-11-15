mapboxgl.accessToken = 'pk.eyJ1IjoibWVzY2FtaWxsYS1hcmNoIiwiYSI6ImNtMXRpMXpoNTAybzAyanB4OTFuZnJ1c24ifQ.5yAwDGHE56G-z1ZzjxhWCw';

const map = new mapboxgl.Map({
  container: 'marcos', // container id
  style: 'mapbox://styles/mescamilla-arch/cm1tj3pn9006201qn9ulv43o3', // replace this with your style URL
  center: [-122.42285, 37.76869],
  zoom: 13,
  pitch: 30.00,
  bearing: 0.00,
  minZoom: 13

});

map.on('load', function () {
	// console.log("My name is Marcos");

	map.addSource('restaurantSource',{
        'type':'vector',
        'url': 'mapbox://mescamilla-arch.ae45nlzi'
      });

	map.addLayer({
        'id':'inspections',
        'type':'circle',
        'source':'restaurantSource',
        'source-layer':'Historical_Restaurant_Inspect-1upl0v',
        'paint':{
			'circle-opacity': 0.5,
			'circle-color':
				['step',
					['to-number', ['get', 'inspection_score']],
					'#aaaaaa',  
					45, '#440154',  // (45 - 80)
					80, '#3b528b',  // (80 - 85)
					85, '#21908d',  // (85 - 90)
					90, '#5dc963',  // (90 - 95)
					95, '#fde725'   // (95 - 100)
					]
        }
  })

	map.on('mouseenter', 'inspections', (e) => {
        // console.log(e.features[0]['properties']['business_name']);
        var name = e.features[0]['properties']['business_name'];
        var textField = document.getElementById('restText');
        textField.innerHTML = name;
    })
})