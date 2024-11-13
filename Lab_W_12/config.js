var config = {
    style: 'mapbox://styles/mescamilla-arch/cm2y1e1zo00i101pc6hgh5uur',
    accessToken: 'pk.eyJ1IjoibWVzY2FtaWxsYS1hcmNoIiwiYSI6ImNtMXRpMXpoNTAybzAyanB4OTFuZnJ1c24ifQ.5yAwDGHE56G-z1ZzjxhWCw',
    //'pk.eyJ1IjoiaWFtd2Z4IiwiYSI6ImNqNGFnMnIyMzEwZzgycXJ1ODdqbG14eGMifQ.3AqBqXZlcbsbEhxddAPB-g',
    showMarkers: false,
    markerColor: '#000000',
    projection: 'globe',
    //Read more about available projections here
    //https://docs.mapbox.com/mapbox-gl-js/example/projections/
    inset: false,
    theme: 'light',
    use3dTerrain: true, //set true for enabling 3D maps.
    title: 'Public and Affordable Housing Flood Risk',
    subtitle: 'Is flooding a coincidence?',
    byline: 'Marcos Escamilla-Guerrero',
    para1:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris facilisis nisi non egestas tempor. Nullam et finibus sapien. Vivamus id pulvinar ligula, quis accumsan velit. Phasellus at molestie lacus. Integer nec dui libero. Suspendisse mollis urna lacinia consectetur accumsan. Phasellus interdum magna libero, in congue risus convallis sed. Mauris cursus volutpat sapien, non iaculis purus convallis sed. Phasellus ac imperdiet neque.',
    para2:'Donec sollicitudin justo nec nibh dapibus fermentum. Ut vel ipsum dictum ante aliquet fermentum in pellentesque lorem. Etiam vitae pulvinar ipsum. Mauris eleifend viverra orci, eu porta est auctor eget. Nunc quis pulvinar mauris. Sed fringilla tincidunt nisi sed semper. Phasellus at dapibus lorem. Nunc dapibus, velit vel volutpat consectetur, velit velit hendrerit leo, sit amet malesuada dui libero non nunc. Cras pulvinar bibendum purus et porta. Donec ut tincidunt tortor. Curabitur ornare, libero sed lacinia auctor, lorem dui consequat sapien, nec consectetur augue leo eget metus. Fusce nibh sapien, consequat vitae euismod eget, bibendum quis ipsum.',
    footer: 'Source: source citations, etc. <br> Created using <a href="https://github.com/mapbox/storytelling" target="_blank">Mapbox Storytelling</a> template.',
    chapters: [
        {
            id: 'overview',
            alignment: 'left',
            hidden: false,
            title: 'NYC Flooding',
            image: 'images/flooding_a.jpg',
            description:"In the fall of 2012, New York City was hit with hurricane that left tens of thousands of public housing residents <a href = 'https://www1.nyc.gov/site/nycha/about/press/pr-2012/nycha-has-restored-power-to-buildings-affected-by-hurricane-sandy.page'>without power for days or even weeks</a>. New York City Housing Authority public housing developments were affected. <a href='https://furmancenter.org/files/publications/SandysEffectsOnHousingInNYC.pdf'>24,000 government-subsidized apartments and 40,000 rent-stabilized apartments were also affected</a>. <br> <br> With rising sea levels from climate change and the <a href='https://www.nytimes.com/2017/04/18/magazine/when-rising-seas-transform-risk-into-certainty.html'>promise</a> of more flooding, which areas and <i>who</i> will likely be most affected? How is affordable housing construction responding to this?", 
            location: {
                center: [-73.97035, 40.77895],
                zoom: 10.00,
                pitch: 0.00,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'second-identifier',
            alignment: 'right',
            hidden: false,
            title: 'Red Hook Houses',
            image: 'images/flooding_b.jpg',
            description: "One of the most affected sites by the huracane was the public housing complex <b>Red Hook Houses<b> <a href = 'https://en.wikipedia.org/wiki/Red_Hook_Houses'>learn more about it here</a>.",
            location: {
                center: [-74.00518, 40.67531],
                zoom: 15.00,
                pitch: 31.66,
                bearing: 20.80
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [
                 {
                     layer: 'pluto-hous-type-master-featu-7b5u7f',
                     opacity: 1,
                     duration: 2000
                 },
                 {
                     layer: 'sandy-inundation-zone-4qcajo',
                     opacity: 0
                 }
            ],
            onChapterExit: []
        },
        {
            id: 'interlude',
            alignment: 'center',
            hidden: false,
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ultricies tempor purus, eget tempus sem bibendum vel. Maecenas at justo non felis accumsan condimentum vitae et leo. Sed sodales nec risus maximus congue. Ut quis tincidunt leo. Pellentesque sapien nisl, congue tempus mauris in, pulvinar mattis turpis. Nullam sit amet justo egestas, laoreet mauris ut, pulvinar ipsum. Pellentesque vehicula imperdiet iaculis. Nam in tellus metus. Donec a est non orci efficitur ornare id mattis eros. Aliquam vel facilisis ligula. Nullam tincidunt, sapien vitae bibendum consequat, nibh eros eleifend ligula, et aliquam enim justo eget felis. Sed nec vehicula metus. Pellentesque rutrum dui quis egestas hendrerit. Nullam auctor et tortor sit amet congue.',
            video: 'images/902-1_902-2364-PD2_preview.mp4',
            location: {
              center: [-74.00518, 40.67531],
              zoom: 15.00,
              pitch: 31.66,
              bearing: 20.80
            },  
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [
                 {
                     layer: 'pluto-hous-type-master-featu-7b5u7f',
                     opacity: 1,
                     duration: 2000
                 },
                 {
                     layer: 'sandy-inundation-zone-4qcajo',
                     opacity: 0
                 }
            ],
            onChapterExit: []  
        },
        {
            id: 'third-identifier',
            alignment: 'right',
            hidden: false,
            title: 'Huracane Sandy Affected Area',
            image: 'images/flooding_c.jpg',
            description: "The zone in blue represents the affected area in 2012 by Sandy. The debastation in <b>Red Hook Houses<b> reached infrastructural levels after <a href = 'https://www.nytimes.com/2012/10/30/nyregion/red-hook-residents-defy-evacuation-warnings-drinks-in-hand.html'>generating power failures</a>.",
            location: {
                center: [-74.00518, 40.67531],
                zoom: 16.00,
                pitch: 31.66,
                bearing: 20.80,
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [
                 {
                     layer: 'sandy-inundation-zone-4qcajo',
                     opacity: 1,
                     duration: 2000
                 },
                 {
                     layer: 'futurefloodplains-2020-100yr-du18hr',
                     opacity: 0
                 },
                 {
                     layer: 'futurefloodplains-2050-100yr-6nepei',
                     opacity: 0
                 },
                 {
                     layer: 'futurefloodplains-2100-100yr-cqwfrw',
                     opacity: 0
                 }
            ],
            onChapterExit: [
                 {
                     layer: 'sandy-inundation-zone-4qcajo',
                     opacity: 0
                 },
                 {
                     layer: 'pluto-hous-type-master-featu-7b5u7f',
                     opacity: 0
                 }
            ]
        },
        {
            id: 'fourth-chapter',
            alignment: 'left',
            hidden: false,
            title: 'Future Flooding',
            image: 'images/flooding_d.jpg',
            description: 'After Sandy 2012, multiple design approaches have been taken. Architects and Planners have imagined different strategies in order to mitigate the risks. <br> <br> The following areas represent the pottential floodings in 100 yrs probability for 2020, 2050 and 2100 in order of appeareance.',
            location: {
                center: [-74.00518, 40.67531],
                zoom: 14.00,
                pitch: 31.66,
                bearing: 20.80,
                speed: 0.8,
                curve: 1
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                     layer: 'futurefloodplains-2020-100yr-du18hr',
                     opacity: 1,
                     duration: 2000
                 },
                 {
                     layer: 'futurefloodplains-2050-100yr-6nepei',
                     opacity: 1,
                     duration: 5000
                 },
                 {
                     layer: 'futurefloodplains-2100-100yr-cqwfrw',
                     opacity: 1,
                     duration: 8000
                 },
                 {
                     layer: 'sandy-inundation-zone-4qcajo',
                     opacity: 0
                 }
                ],
            onChapterExit: [
                {
                     layer: 'futurefloodplains-2020-100yr-du18hr',
                     opacity: 0
                 },
                 {
                     layer: 'futurefloodplains-2050-100yr-6nepei',
                     opacity: 0
                 },
                 {
                     layer: 'futurefloodplains-2100-100yr-cqwfrw',
                     opacity: 0
                 }

                ]
        }
    ]
};
