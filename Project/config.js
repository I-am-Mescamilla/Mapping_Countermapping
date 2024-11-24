var config = {
    style: 'mapbox://styles/mescamilla-arch/cm3ouwe3t00q601r2dty54ym7',
    accessToken: 'pk.eyJ1IjoibWVzY2FtaWxsYS1hcmNoIiwiYSI6ImNtMXRpMXpoNTAybzAyanB4OTFuZnJ1c24ifQ.5yAwDGHE56G-z1ZzjxhWCw',
    showMarkers: false,
    markerColor: '#000000',
    projection: 'globe',
    inset: false,
    theme: 'dark',
    use3dTerrain: true, //set true for enabling 3D maps.
    title: 'The Price of Passage',
    subtitle: 'A Decade of Migration Through Mexico in the Shadow of Insecurity and Cartel Power',
    byline: 'Marcos Escamilla-Guerrero',
    
    para1:'The ongoing international migration through Mexico has escalated into a humanitarian crisis marked by a complex interplay of human rights violations, geopolitical challenges, environmental factors, and rising crime rates. According to the International Organization for Migration (IOM), only in 2022, 686 deaths and migrant disappearances were documented on the US-Mexico border. However, if the whole Mexican territory is evaluated, the numbers rise. Sadly, non-governmental organizations have led the majority of efforts to address this crisis by managing shelters and healthcare checkpoints spread across the country. On the other hand, the Mexican government\'s actions have proven to be insufficient in mitigating the worsening conditions. To this date, Mexico’s position towards the future seems uncertain. The recent presidential transition in Mexico and the upcoming elections in the United States (2024) have increased the speculation and stress over this topic. Furthermore, the policies implemented under former President Andrés Manuel López Obrador, particularly his "Abrazos no Balazos" (Hugs no Shots) strategy, have not only failed to alleviate the general violence in the Mexican territory but have, in many cases, exacerbated the insecurity faced by migrants.',
    para2:'One of the most significant obstacles in addressing the migration crisis, as highlighted by the United Nations, is the constant lack of accurate information and the spread of misinformation. However, the project managed by the same institution, “Missing Migrants Project,” now has over a decade of data regarding the disappearances and deaths of migrants. Using the United Nation\'s resources, among others, this project seeks to shed light on the true implications and meaning of crossing Mexico as a migrant, with a particular focus on insecurity factors. A legitimate concern is that, with the end of López Obrador\'s term and the rise in cartel violence, Mexico is on track to become even more dangerous, with over 200,000 murders and 150,000 disappearances during the past six-year presidential term (sexenio). The previous numbers represent the most violent presidential period ever. Furthermore, drug cartels have expanded their influence, making migrants a key target for extortion, forced recruitment, and violence. According to a report by the Mexican government, between 2019 (the beginning of López Obrador\'s term) and 2022, more than 2,000 crimes were committed against migrants.',
    para3:'This website focuses on the relationship between migration, criminal rates, and cartel violence. By mapping out the hardships migrants face, including the number of territories, climates, and cartel-controlled zones they must navigate, the project illustrates how deeply intertwined these issues are. The site visually depicts correlations between migrant deaths, migration routes, crime hotspots, and the distribution of shelters and support infrastructure across Mexico.',


    footer: 'Source: source citations, etc. <br> Created using <a href="https://github.com/mapbox/storytelling" target="_blank">Mapbox Storytelling</a> template.',

    chapters:[
        {
            id: 'globe-heatmap',
            alignment: 'left',
            hidden: false,
            title: 'Western Hemisphere Migration',
            image: 'images/Migrant_Caravan.jpg',
            description:"According to the report of UN, the migration route inside Mexico has become one of the deadliest one in the world. However to understand that phenonmenon it is critical to track where the migration flows take place. The migration routes can be classified into three main zones, Pacific, Center and Gulf. (BBVA, 2020)", 
            location: {
                center: [-110.13462, 22.60563],
                zoom: 2,
                pitch: 0.00,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback:() => {
                document.getElementById("routes_legend").style.visibility = "hidden";
                document.getElementById("routes_dead_legend").style.visibility = "hidden";
                document.getElementById("routes_deadtype_legend").style.visibility = "hidden";
                document.getElementById("routes_insecurity_legend").style.visibility = "hidden";
                document.getElementById("routes_climate_legend").style.visibility = "hidden";
                document.getElementById("crossed_territories").style.visibility = "hidden";
                document.getElementById("routes_height").style.visibility = "hidden";
                document.getElementById("INM_legend").style.visibility = "hidden";
                document.getElementById("CNDH_legend").style.visibility = "hidden";
            },
            onChapterEnter: [
                 {layer: 'mexico-weather', opacity: 0}, /*Mexico Weather*/
                 {layer: 'migration-cities-dots', opacity: 0}, /*Migration Cities*/
                 {layer: 'mexico-states', opacity: 0}, /*Mexico State*/
                 {layer: 'mexico-states-cndh', opacity: 0}, /*Mexico State Crime CNDH*/
                 {layer: 'mexico-states-inm', opacity: 0}, /*Mexico Stare Crime INM*/
                 {layer: 'simple-drugcartels', opacity: 0}, /*Drug Cartel Territorial Control*/
                 {layer: 'simple-drugcartels-conf', opacity: 0}, /*Cartel Chapiza vs CJNG*/
                 {layer: 'simple-drugcartels-index', opacity: 0}, /*Cartels Conflicts*/
                 {layer: 'mexico-heatwave', opacity: 0}, /*Mexico Heatwave*/
                 {layer: 'Train_Migration_Routes', opacity: 0}, /*Mexico Train Routes*/
                 {layer: 'migration-cities-labels', opacity: 0}, /*Migraiton Cities Label*/
                 {layer: '2024_MissingMigrants-84ch0i', opacity: 0}, /*Missing Migrants*/
                 {layer: '2024_MissingMigrants-type', opacity: 0}, /*Missing Migrants by Cause of Dead*/
                 {layer: '2024_MissingMigrants-heatmap', opacity: 1}, /*Missing Migrants Heat Map*/
                 {layer: '2024-ins-perception', opacity: 0}, /*Insecurity perception*/
                 {layer: '2020-23-migrantencounters', opacity: 0}, /*Migrants Encounters by INM*/
                 {layer: 'migration-infrastructure-5ancfj', opacity: 0}, /*Migration Support Infrastructure*/
                 {layer: 'super-municipality-height', opacity: 0}, /*Municipality Height*/
                 {layer: 'super-municipality-bivariant', opacity: 0}, /*Municiplalities BiVariant*/
                 {layer: 'super-municipality-criminal rate', opacity: 0}, /*Municipality Crime Rate 1-1000*/
                 {layer: 'super-municipality-simple', opacity: 0}, /*Crossed Municipalities*/
                 {layer: 'super-municipality-simple_h', opacity: 0}, /*Crossed Height*/
                ],
            onChapterExit: [],
        },
        {
            id: 'Main Routes',
            alignment: 'left',
            hidden: false,
            title: 'Migration Routes',
            image: 'images/Migrant_Train.webp',
            description: "One of the most affected sites by the huracane was the public housing complex <b>Red Hook Houses<b> <a href = 'https://en.wikipedia.org/wiki/Red_Hook_Houses'>learn more about it here</a>.",
            location: {
                center: [-109.41145, 22.31081],
                zoom: 4.8,
                pitch: 0.00,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: () => {
                document.getElementById("routes_legend").style.visibility = "visible";
                document.getElementById("routes_dead_legend").style.visibility = "hidden";
                document.getElementById("routes_deadtype_legend").style.visibility = "hidden";
                document.getElementById("routes_insecurity_legend").style.visibility = "hidden";
                document.getElementById("routes_climate_legend").style.visibility = "hidden";
                document.getElementById("crossed_territories").style.visibility = "hidden";
                document.getElementById("routes_height").style.visibility = "hidden";
                document.getElementById("INM_legend").style.visibility = "hidden";
                document.getElementById("CNDH_legend").style.visibility = "hidden";
            },
            onChapterEnter: [
                 {layer: 'mexico-weather', opacity: 0}, /*Mexico Weather*/
                 {layer: 'migration-cities-dots', opacity: 0}, /*Migration Cities*/
                 {layer: 'mexico-states', opacity: 0}, /*Mexico Stare Crime CNDH*/
                 {layer: 'mexico-states-cndh', opacity: 0}, /*Mexico State Crime CNDH*/
                 {layer: 'mexico-states-inm', opacity: 0}, /*Mexico Stare Crime INM*/
                 {layer: 'simple-drugcartels', opacity: 0}, /*Drug Cartel Territorial Control*/
                 {layer: 'simple-drugcartels-conf', opacity: 0}, /*Cartel Chapiza vs CJNG*/
                 {layer: 'simple-drugcartels-index', opacity: 0}, /*Cartels Conflicts*/
                 {layer: 'mexico-heatwave', opacity: 0}, /*Mexico Heatwave*/
                 {layer: 'Train_Migration_Routes', opacity: 1}, /*Mexico Train Routes*/
                 {layer: 'migration-cities-labels', opacity: 0}, /*Migraiton Cities Label*/
                 {layer: '2024_MissingMigrants-84ch0i', opacity: 0}, /*Missing Migrants*/
                 {layer: '2024_MissingMigrants-type', opacity: 0}, /*Missing Migrants by Cause of Dead*/
                 {layer: '2024_MissingMigrants-heatmap', opacity: 0}, /*Missing Migrants Heat Map*/
                 {layer: '2024-ins-perception', opacity: 0}, /*Insecurity perception*/
                 {layer: '2020-23-migrantencounters', opacity: 0}, /*Migrants Encounters by INM*/
                 {layer: 'migration-infrastructure-5ancfj', opacity: 0}, /*Migration Support Infrastructure*/
                 {layer: 'super-municipality-height', opacity: 0}, /*Municipality Height*/
                 {layer: 'super-municipality-bivariant', opacity: 0}, /*Municiplalities BiVariant*/
                 {layer: 'super-municipality-criminal rate', opacity: 0}, /*Municipality Crime Rate 1-1000*/
                 {layer: 'super-municipality-simple', opacity: 0}, /*Crossed Municipalities*/
                 {layer: 'super-municipality-simple_h', opacity: 0}, /*Crossed Height*/
                ],
            onChapterExit: [],
        },
        {
            id: 'Routes-Crossed Cities',
            alignment: 'right',
            hidden: false,
            title: 'Crossed Cities',
            image: 'images/Migration_Routes_D_W.png',
            description: "The zone in blue represents the affected area in 2012 by Sandy. The debastation in <b>Red Hook Houses<b> reached infrastructural levels after <a href = 'https://www.nytimes.com/2012/10/30/nyregion/red-hook-residents-defy-evacuation-warnings-drinks-in-hand.html'>generating power failures</a>.",
            location: {
                center: [-91.70083, 22.31081],
                zoom: 4.8,
                pitch: 0.00,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: () => {
                document.getElementById("routes_legend").style.visibility = "visible";
                document.getElementById("routes_dead_legend").style.visibility = "hidden";
                document.getElementById("routes_deadtype_legend").style.visibility = "hidden";
                document.getElementById("routes_insecurity_legend").style.visibility = "hidden";
                document.getElementById("routes_climate_legend").style.visibility = "hidden";
                document.getElementById("crossed_territories").style.visibility = "hidden";
                document.getElementById("routes_height").style.visibility = "hidden";
                document.getElementById("INM_legend").style.visibility = "hidden";
                document.getElementById("CNDH_legend").style.visibility = "hidden";
            },
            onChapterEnter: [
                 {layer: 'mexico-weather', opacity: 0}, /*Mexico Weather*/
                 {layer: 'migration-cities-dots', opacity: 1}, /*Migration Cities*/
                 {layer: 'mexico-states', opacity: 0}, /*Mexico Stare Crime CNDH*/
                 {layer: 'mexico-states-cndh', opacity: 0}, /*Mexico State Crime CNDH*/
                 {layer: 'mexico-states-inm', opacity: 0}, /*Mexico Stare Crime INM*/
                 {layer: 'simple-drugcartels', opacity: 0}, /*Drug Cartel Territorial Control*/
                 {layer: 'simple-drugcartels-conf', opacity: 0}, /*Cartel Chapiza vs CJNG*/
                 {layer: 'simple-drugcartels-index', opacity: 0}, /*Cartels Conflicts*/
                 {layer: 'mexico-heatwave', opacity: 0}, /*Mexico Heatwave*/
                 {layer: 'Train_Migration_Routes', opacity: 1}, /*Mexico Train Routes*/
                 {layer: 'migration-cities-labels', opacity: 1}, /*Migraiton Cities Label*/
                 {layer: '2024_MissingMigrants-84ch0i', opacity: 0}, /*Missing Migrants*/
                 {layer: '2024_MissingMigrants-type', opacity: 0}, /*Missing Migrants by Cause of Dead*/
                 {layer: '2024_MissingMigrants-heatmap', opacity: 0}, /*Missing Migrants Heat Map*/
                 {layer: '2024-ins-perception', opacity: 0}, /*Insecurity perception*/
                 {layer: '2020-23-migrantencounters', opacity: 0}, /*Migrants Encounters by INM*/
                 {layer: 'migration-infrastructure-5ancfj', opacity: 0}, /*Migration Support Infrastructure*/
                 {layer: 'super-municipality-height', opacity: 0}, /*Municipality Height*/
                 {layer: 'super-municipality-bivariant', opacity: 0}, /*Municiplalities BiVariant*/
                 {layer: 'super-municipality-criminal rate', opacity: 0}, /*Municipality Crime Rate 1-1000*/
                 {layer: 'super-municipality-simple', opacity: 0}, /*Crossed Municipalities*/
                 {layer: 'super-municipality-simple_h', opacity: 0}, /*Crossed Height*/
                ],
            onChapterExit: [],
        },
        {
            id: 'Crossed Territories',
            alignment: 'left',
            hidden: false,
            title: 'Crossed Territories',
            image: 'images/Crossing_Frontiers.jpg',
            description: "One of the most affected sites by the huracane was the public housing complex <b>Red Hook Houses<b> <a href = 'https://en.wikipedia.org/wiki/Red_Hook_Houses'>learn more about it here</a>.",
            location: {
                center: [-109.41145, 22.31081],
                zoom: 4.8,
                pitch: 0.00,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: () => {
                document.getElementById("routes_legend").style.visibility = "hidden";
                document.getElementById("routes_dead_legend").style.visibility = "hidden";
                document.getElementById("routes_deadtype_legend").style.visibility = "hidden";
                document.getElementById("routes_insecurity_legend").style.visibility = "hidden";
                document.getElementById("routes_climate_legend").style.visibility = "hidden";
                document.getElementById("crossed_territories").style.visibility = "visible";
                document.getElementById("routes_height").style.visibility = "hidden";
                document.getElementById("INM_legend").style.visibility = "hidden";
                document.getElementById("CNDH_legend").style.visibility = "hidden";
            },
            onChapterEnter: [
                 {layer: 'mexico-weather', opacity: 0}, /*Mexico Weather*/
                 {layer: 'migration-cities-dots', opacity: 0}, /*Migration Cities*/
                 {layer: 'mexico-states', opacity: 1}, /*Mexico Stare Crime CNDH*/
                 {layer: 'mexico-states-cndh', opacity: 0}, /*Mexico State Crime CNDH*/
                 {layer: 'mexico-states-inm', opacity: 0}, /*Mexico Stare Crime INM*/
                 {layer: 'simple-drugcartels', opacity: 0}, /*Drug Cartel Territorial Control*/
                 {layer: 'simple-drugcartels-conf', opacity: 0}, /*Cartel Chapiza vs CJNG*/
                 {layer: 'simple-drugcartels-index', opacity: 0}, /*Cartels Conflicts*/
                 {layer: 'mexico-heatwave', opacity: 0}, /*Mexico Heatwave*/
                 {layer: 'Train_Migration_Routes', opacity: .75}, /*Mexico Train Routes*/
                 {layer: 'migration-cities-labels', opacity: 0}, /*Migraiton Cities Label*/
                 {layer: '2024_MissingMigrants-84ch0i', opacity: 0}, /*Missing Migrants*/
                 {layer: '2024_MissingMigrants-type', opacity: 0}, /*Missing Migrants by Cause of Dead*/
                 {layer: '2024_MissingMigrants-heatmap', opacity: 0}, /*Missing Migrants Heat Map*/
                 {layer: '2024-ins-perception', opacity: 0}, /*Insecurity perception*/
                 {layer: '2020-23-migrantencounters', opacity: 0}, /*Migrants Encounters by INM*/
                 {layer: 'migration-infrastructure-5ancfj', opacity: 0}, /*Migration Support Infrastructure*/
                 {layer: 'super-municipality-height', opacity: 0}, /*Municipality Height*/
                 {layer: 'super-municipality-bivariant', opacity: 0}, /*Municiplalities BiVariant*/
                 {layer: 'super-municipality-criminal rate', opacity: 0}, /*Municipality Crime Rate 1-1000*/
                 {layer: 'super-municipality-simple', opacity: 1}, /*Crossed Municipalities*/
                 {layer: 'super-municipality-simple_h', opacity: 0}, /*Crossed Height*/
                ],
            onChapterExit: [],
        },
        {
            id: 'Crossed Climates',
            alignment: 'left',
            hidden: false,
            title: 'Crossed Climates',
            image: 'images/Crossed_Climates.jpg',
            description: "One of the most affected sites by the huracane was the public housing complex <b>Red Hook Houses<b> <a href = 'https://en.wikipedia.org/wiki/Red_Hook_Houses'>learn more about it here</a>.",
            location: {
                center: [-109.41145, 22.31081],
                zoom: 4.8,
                pitch: 0.00,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: () => {
                document.getElementById("routes_legend").style.visibility = "hidden";
                document.getElementById("routes_dead_legend").style.visibility = "hidden";
                document.getElementById("routes_deadtype_legend").style.visibility = "hidden";
                document.getElementById("routes_insecurity_legend").style.visibility = "hidden";
                document.getElementById("routes_climate_legend").style.visibility = "visible";
                document.getElementById("crossed_territories").style.visibility = "hidden";
                document.getElementById("routes_height").style.visibility = "hidden";
                document.getElementById("INM_legend").style.visibility = "hidden";
                document.getElementById("CNDH_legend").style.visibility = "hidden";
            },
            onChapterEnter: [
                 {layer: 'mexico-weather', opacity: 1}, /*Mexico Weather*/
                 {layer: 'migration-cities-dots', opacity: 0}, /*Migration Cities*/
                 {layer: 'mexico-states', opacity: 0}, /*Mexico Stare Crime CNDH*/
                 {layer: 'mexico-states-cndh', opacity: 0}, /*Mexico State Crime CNDH*/
                 {layer: 'mexico-states-inm', opacity: 0}, /*Mexico Stare Crime INM*/
                 {layer: 'simple-drugcartels', opacity: 0}, /*Drug Cartel Territorial Control*/
                 {layer: 'simple-drugcartels-conf', opacity: 0}, /*Cartel Chapiza vs CJNG*/
                 {layer: 'simple-drugcartels-index', opacity: 0}, /*Cartels Conflicts*/
                 {layer: 'mexico-heatwave', opacity: 1}, /*Mexico Heatwave*/
                 {layer: 'Train_Migration_Routes', opacity: 1}, /*Mexico Train Routes*/
                 {layer: 'migration-cities-labels', opacity: 0}, /*Migraiton Cities Label*/
                 {layer: '2024_MissingMigrants-84ch0i', opacity: 0}, /*Missing Migrants*/
                 {layer: '2024_MissingMigrants-type', opacity: 0}, /*Missing Migrants by Cause of Dead*/
                 {layer: '2024_MissingMigrants-heatmap', opacity: 0}, /*Missing Migrants Heat Map*/
                 {layer: '2024-ins-perception', opacity: 0}, /*Insecurity perception*/
                 {layer: '2020-23-migrantencounters', opacity: 0}, /*Migrants Encounters by INM*/
                 {layer: 'migration-infrastructure-5ancfj', opacity: 0}, /*Migration Support Infrastructure*/
                 {layer: 'super-municipality-height', opacity: 0}, /*Municipality Height*/
                 {layer: 'super-municipality-bivariant', opacity: 0}, /*Municiplalities BiVariant*/
                 {layer: 'super-municipality-criminal rate', opacity: 0}, /*Municipality Crime Rate 1-1000*/
                 {layer: 'super-municipality-simple', opacity: 0}, /*Crossed Municipalities*/
                 {layer: 'super-municipality-simple_h', opacity: 0}, /*Crossed Height*/
                ],
            onChapterExit: [],
        },
        {
            id: 'Crossed Height',
            alignment: 'left',
            hidden: false,
            title: 'Changing Topography',
            image: 'images/Crossing_Mountains.jpg',
            description: "One of the most affected sites by the huracane was the public housing complex <b>Red Hook Houses<b> <a href = 'https://en.wikipedia.org/wiki/Red_Hook_Houses'>learn more about it here</a>.",
            location: {
                center: [-109.41145, 22.31081],
                zoom: 4.8,
                pitch: 0.00,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: () => {
                document.getElementById("routes_legend").style.visibility = "hidden";
                document.getElementById("routes_dead_legend").style.visibility = "hidden";
                document.getElementById("routes_deadtype_legend").style.visibility = "hidden";
                document.getElementById("routes_insecurity_legend").style.visibility = "hidden";
                document.getElementById("routes_climate_legend").style.visibility = "hidden";
                document.getElementById("crossed_territories").style.visibility = "hidden";
                document.getElementById("routes_height").style.visibility = "visible";
                document.getElementById("INM_legend").style.visibility = "hidden";
                document.getElementById("CNDH_legend").style.visibility = "hidden";
            },
            onChapterEnter: [
                 {layer: 'mexico-weather', opacity: 0}, /*Mexico Weather*/
                 {layer: 'migration-cities-dots', opacity: 0}, /*Migration Cities*/
                 {layer: 'mexico-states', opacity: 0}, /*Mexico Stare Crime CNDH*/
                 {layer: 'mexico-states-cndh', opacity: 0}, /*Mexico State Crime CNDH*/
                 {layer: 'mexico-states-inm', opacity: 0}, /*Mexico Stare Crime INM*/
                 {layer: 'simple-drugcartels', opacity: 0}, /*Drug Cartel Territorial Control*/
                 {layer: 'simple-drugcartels-conf', opacity: 0}, /*Cartel Chapiza vs CJNG*/
                 {layer: 'simple-drugcartels-index', opacity: 0}, /*Cartels Conflicts*/
                 {layer: 'mexico-heatwave', opacity: 0}, /*Mexico Heatwave*/
                 {layer: 'Train_Migration_Routes', opacity: 1}, /*Mexico Train Routes*/
                 {layer: 'migration-cities-labels', opacity: 0}, /*Migraiton Cities Label*/
                 {layer: '2024_MissingMigrants-84ch0i', opacity: 0}, /*Missing Migrants*/
                 {layer: '2024_MissingMigrants-type', opacity: 0}, /*Missing Migrants by Cause of Dead*/
                 {layer: '2024_MissingMigrants-heatmap', opacity: 0}, /*Missing Migrants Heat Map*/
                 {layer: '2024-ins-perception', opacity: 0}, /*Insecurity perception*/
                 {layer: '2020-23-migrantencounters', opacity: 0}, /*Migrants Encounters by INM*/
                 {layer: 'migration-infrastructure-5ancfj', opacity: 0}, /*Migration Support Infrastructure*/
                 {layer: 'super-municipality-height', opacity: 0}, /*Municipality Height*/
                 {layer: 'super-municipality-bivariant', opacity: 0}, /*Municiplalities BiVariant*/
                 {layer: 'super-municipality-criminal rate', opacity: 0}, /*Municipality Crime Rate 1-1000*/
                 {layer: 'super-municipality-simple', opacity: 0}, /*Crossed Municipalities*/
                 {layer: 'super-municipality-simple_h', opacity: 1}, /*Crossed Height*/
                ],
            onChapterExit: [],
        },
        {
            id: 'INM Crimes',
            alignment: 'right',
            hidden: false,
            title: 'Crime and Migrants',
            image: 'images/San_Luis_Crime.jpg',
            description: "One of the most affected sites by the huracane was the public housing complex <b>Red Hook Houses<b> <a href = 'https://en.wikipedia.org/wiki/Red_Hook_Houses'>learn more about it here</a>.",
            location: {
                center: [-91.70083, 23.8],
                zoom: 5,
                pitch: 0.00,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: () => {
                document.getElementById("routes_legend").style.visibility = "hidden";
                document.getElementById("routes_dead_legend").style.visibility = "hidden";
                document.getElementById("routes_deadtype_legend").style.visibility = "hidden";
                document.getElementById("routes_insecurity_legend").style.visibility = "hidden";
                document.getElementById("routes_climate_legend").style.visibility = "hidden";
                document.getElementById("crossed_territories").style.visibility = "hidden";
                document.getElementById("routes_height").style.visibility = "hidden";
                document.getElementById("INM_legend").style.visibility = "visible";
                document.getElementById("CNDH_legend").style.visibility = "hidden";
            },
            onChapterEnter: [
                 {layer: 'mexico-weather', opacity: 0}, /*Mexico Weather*/
                 {layer: 'migration-cities-dots', opacity: 0}, /*Migration Cities*/
                 {layer: 'mexico-states', opacity: 0}, /*Mexico Stare Crime CNDH*/
                 {layer: 'mexico-states-cndh', opacity: 0}, /*Mexico State Crime CNDH*/
                 {layer: 'mexico-states-inm', opacity: 1}, /*Mexico Stare Crime INM*/
                 {layer: 'simple-drugcartels', opacity: 0}, /*Drug Cartel Territorial Control*/
                 {layer: 'simple-drugcartels-conf', opacity: 0}, /*Cartel Chapiza vs CJNG*/
                 {layer: 'simple-drugcartels-index', opacity: 0}, /*Cartels Conflicts*/
                 {layer: 'mexico-heatwave', opacity: 0}, /*Mexico Heatwave*/
                 {layer: 'Train_Migration_Routes', opacity: 1}, /*Mexico Train Routes*/
                 {layer: 'migration-cities-labels', opacity: 0}, /*Migraiton Cities Label*/
                 {layer: '2024_MissingMigrants-84ch0i', opacity: 0}, /*Missing Migrants*/
                 {layer: '2024_MissingMigrants-type', opacity: 0}, /*Missing Migrants by Cause of Dead*/
                 {layer: '2024_MissingMigrants-heatmap', opacity: 0}, /*Missing Migrants Heat Map*/
                 {layer: '2024-ins-perception', opacity: 0}, /*Insecurity perception*/
                 {layer: '2020-23-migrantencounters', opacity: 0}, /*Migrants Encounters by INM*/
                 {layer: 'migration-infrastructure-5ancfj', opacity: 0}, /*Migration Support Infrastructure*/
                 {layer: 'super-municipality-height', opacity: 0}, /*Municipality Height*/
                 {layer: 'super-municipality-bivariant', opacity: 0}, /*Municiplalities BiVariant*/
                 {layer: 'super-municipality-criminal rate', opacity: 0}, /*Municipality Crime Rate 1-1000*/
                 {layer: 'super-municipality-simple', opacity: 0}, /*Crossed Municipalities*/
                 {layer: 'super-municipality-simple_h', opacity: 0}, /*Crossed Height*/
                ],
            onChapterExit: [],
        },
        {
            id: 'CNDH Crimes',
            alignment: 'right',
            hidden: false,
            title: 'A Tragic Decade',
            image: 'images/Kidnaps_Decade.jpg',
            description: "One of the most affected sites by the huracane was the public housing complex <b>Red Hook Houses<b> <a href = 'https://en.wikipedia.org/wiki/Red_Hook_Houses'>learn more about it here</a>.",
            location: {
                center: [-91.70083, 23.8],
                zoom: 5,
                pitch: 0.00,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: () => {
                document.getElementById("routes_legend").style.visibility = "hidden";
                document.getElementById("routes_dead_legend").style.visibility = "hidden";
                document.getElementById("routes_deadtype_legend").style.visibility = "hidden";
                document.getElementById("routes_insecurity_legend").style.visibility = "hidden";
                document.getElementById("routes_climate_legend").style.visibility = "hidden";
                document.getElementById("crossed_territories").style.visibility = "hidden";
                document.getElementById("routes_height").style.visibility = "hidden";
                document.getElementById("INM_legend").style.visibility = "hidden";
                document.getElementById("CNDH_legend").style.visibility = "visible";
            },
            onChapterEnter: [
                 {layer: 'mexico-weather', opacity: 0}, /*Mexico Weather*/
                 {layer: 'migration-cities-dots', opacity: 0}, /*Migration Cities*/
                 {layer: 'mexico-states', opacity: 0}, /*Mexico Stare Crime CNDH*/
                 {layer: 'mexico-states-cndh', opacity: 1}, /*Mexico State Crime CNDH*/
                 {layer: 'mexico-states-inm', opacity: 0}, /*Mexico Stare Crime INM*/
                 {layer: 'simple-drugcartels', opacity: 0}, /*Drug Cartel Territorial Control*/
                 {layer: 'simple-drugcartels-conf', opacity: 0}, /*Cartel Chapiza vs CJNG*/
                 {layer: 'simple-drugcartels-index', opacity: 0}, /*Cartels Conflicts*/
                 {layer: 'mexico-heatwave', opacity: 0}, /*Mexico Heatwave*/
                 {layer: 'Train_Migration_Routes', opacity: 1}, /*Mexico Train Routes*/
                 {layer: 'migration-cities-labels', opacity: 0}, /*Migraiton Cities Label*/
                 {layer: '2024_MissingMigrants-84ch0i', opacity: 0}, /*Missing Migrants*/
                 {layer: '2024_MissingMigrants-type', opacity: 0}, /*Missing Migrants by Cause of Dead*/
                 {layer: '2024_MissingMigrants-heatmap', opacity: 0}, /*Missing Migrants Heat Map*/
                 {layer: '2024-ins-perception', opacity: 0}, /*Insecurity perception*/
                 {layer: '2020-23-migrantencounters', opacity: 0}, /*Migrants Encounters by INM*/
                 {layer: 'migration-infrastructure-5ancfj', opacity: 0}, /*Migration Support Infrastructure*/
                 {layer: 'super-municipality-height', opacity: 0}, /*Municipality Height*/
                 {layer: 'super-municipality-bivariant', opacity: 0}, /*Municiplalities BiVariant*/
                 {layer: 'super-municipality-criminal rate', opacity: 0}, /*Municipality Crime Rate 1-1000*/
                 {layer: 'super-municipality-simple', opacity: 0}, /*Crossed Municipalities*/
                 {layer: 'super-municipality-simple_h', opacity: 0}, /*Crossed Height*/
                ],
            onChapterExit: [],
        },
        {
            id: 'Insecurity_Rates',
            alignment: 'left',
            hidden: false,
            title: 'Insecure Journey',
            image: 'images/Migrant_Train.webp',
            description: "One of the most affected sites by the huracane was the public housing complex <b>Red Hook Houses<b> <a href = 'https://en.wikipedia.org/wiki/Red_Hook_Houses'>learn more about it here</a>.",
            location: {
                center: [-109.41145, 22.31081],
                zoom: 4.8,
                pitch: 0.00,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: () => {
                document.getElementById("routes_legend").style.visibility = "hidden";
                document.getElementById("routes_dead_legend").style.visibility = "hidden";
                document.getElementById("routes_deadtype_legend").style.visibility = "hidden";
                document.getElementById("routes_insecurity_legend").style.visibility = "visible";
                document.getElementById("routes_climate_legend").style.visibility = "hidden";
                document.getElementById("crossed_territories").style.visibility = "hidden";
                document.getElementById("routes_height").style.visibility = "hidden";
                document.getElementById("INM_legend").style.visibility = "hidden";
                document.getElementById("CNDH_legend").style.visibility = "hidden";
            },
            onChapterEnter: [
                 {layer: 'mexico-weather', opacity: 0}, /*Mexico Weather*/
                 {layer: 'migration-cities-dots', opacity: 0}, /*Migration Cities*/
                 {layer: 'mexico-states', opacity: 0}, /*Mexico Stare Crime CNDH*/
                 {layer: 'mexico-states-cndh', opacity: 0}, /*Mexico State Crime CNDH*/
                 {layer: 'mexico-states-inm', opacity: 0}, /*Mexico Stare Crime INM*/
                 {layer: 'simple-drugcartels', opacity: 0}, /*Drug Cartel Territorial Control*/
                 {layer: 'simple-drugcartels-conf', opacity: 0}, /*Cartel Chapiza vs CJNG*/
                 {layer: 'simple-drugcartels-index', opacity: 0}, /*Cartels Conflicts*/
                 {layer: 'mexico-heatwave', opacity: 0}, /*Mexico Heatwave*/
                 {layer: 'Train_Migration_Routes', opacity: .75}, /*Mexico Train Routes*/
                 {layer: 'migration-cities-labels', opacity: 0}, /*Migraiton Cities Label*/
                 {layer: '2024_MissingMigrants-84ch0i', opacity: 0}, /*Missing Migrants*/
                 {layer: '2024_MissingMigrants-type', opacity: 0}, /*Missing Migrants by Cause of Dead*/
                 {layer: '2024_MissingMigrants-heatmap', opacity: 0}, /*Missing Migrants Heat Map*/
                 {layer: '2024-ins-perception', opacity: 1}, /*Insecurity perception*/
                 {layer: '2020-23-migrantencounters', opacity: 0}, /*Migrants Encounters by INM*/
                 {layer: 'migration-infrastructure-5ancfj', opacity: 0}, /*Migration Support Infrastructure*/
                 {layer: 'super-municipality-height', opacity: 0}, /*Municipality Height*/
                 {layer: 'super-municipality-bivariant', opacity: 0}, /*Municiplalities BiVariant*/
                 {layer: 'super-municipality-criminal rate', opacity: 0}, /*Municipality Crime Rate 1-1000*/
                 {layer: 'super-municipality-simple', opacity: 0}, /*Crossed Municipalities*/
                 {layer: 'super-municipality-simple_h', opacity: 0}, /*Crossed Height*/
                ],
            onChapterExit: [],
        },
        {
            id: 'Insecurity_Rates_CDMX',
            alignment: 'left',
            hidden: false,
            title: 'Unsafe Capital',
            image: 'images/Mexico_City.jpg',
            description: "One of the most affected sites by the huracane was the public housing complex <b>Red Hook Houses<b> <a href = 'https://en.wikipedia.org/wiki/Red_Hook_Houses'>learn more about it here</a>.",
            location: {
                center: [-99.802, 19.565],
                zoom: 8.5,
                pitch: 0.00,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: () => {
                document.getElementById("routes_legend").style.visibility = "hidden";
                document.getElementById("routes_dead_legend").style.visibility = "hidden";
                document.getElementById("routes_deadtype_legend").style.visibility = "hidden";
                document.getElementById("routes_insecurity_legend").style.visibility = "visible";
                document.getElementById("routes_climate_legend").style.visibility = "hidden";
                document.getElementById("crossed_territories").style.visibility = "hidden";
                document.getElementById("routes_height").style.visibility = "hidden";
                document.getElementById("INM_legend").style.visibility = "hidden";
                document.getElementById("CNDH_legend").style.visibility = "hidden";
            },
            onChapterEnter: [
                 {layer: 'mexico-weather', opacity: 0}, /*Mexico Weather*/
                 {layer: 'migration-cities-dots', opacity: 0}, /*Migration Cities*/
                 {layer: 'mexico-states', opacity: 0}, /*Mexico Stare Crime CNDH*/
                 {layer: 'mexico-states-cndh', opacity: 0}, /*Mexico State Crime CNDH*/
                 {layer: 'mexico-states-inm', opacity: 0}, /*Mexico Stare Crime INM*/
                 {layer: 'simple-drugcartels', opacity: 0}, /*Drug Cartel Territorial Control*/
                 {layer: 'simple-drugcartels-conf', opacity: 0}, /*Cartel Chapiza vs CJNG*/
                 {layer: 'simple-drugcartels-index', opacity: 0}, /*Cartels Conflicts*/
                 {layer: 'mexico-heatwave', opacity: 0}, /*Mexico Heatwave*/
                 {layer: 'Train_Migration_Routes', opacity: .75}, /*Mexico Train Routes*/
                 {layer: 'migration-cities-labels', opacity: 0}, /*Migraiton Cities Label*/
                 {layer: '2024_MissingMigrants-84ch0i', opacity: 0}, /*Missing Migrants*/
                 {layer: '2024_MissingMigrants-type', opacity: 0}, /*Missing Migrants by Cause of Dead*/
                 {layer: '2024_MissingMigrants-heatmap', opacity: 0}, /*Missing Migrants Heat Map*/
                 {layer: '2024-ins-perception', opacity: 1}, /*Insecurity perception*/
                 {layer: '2020-23-migrantencounters', opacity: 0}, /*Migrants Encounters by INM*/
                 {layer: 'migration-infrastructure-5ancfj', opacity: 0}, /*Migration Support Infrastructure*/
                 {layer: 'super-municipality-height', opacity: 0}, /*Municipality Height*/
                 {layer: 'super-municipality-bivariant', opacity: 0}, /*Municiplalities BiVariant*/
                 {layer: 'super-municipality-criminal rate', opacity: 0}, /*Municipality Crime Rate 1-1000*/
                 {layer: 'super-municipality-simple', opacity: .5}, /*Crossed Municipalities*/
                 {layer: 'super-municipality-simple_h', opacity: 0}, /*Crossed Height*/
                ],
            onChapterExit: [],
        },
        {
            id: 'Insecurity_Rates_Bajio',
            alignment: 'left',
            hidden: false,
            title: 'Critial Bajio',
            image: 'images/Bajio.jpg',
            description: "One of the most affected sites by the huracane was the public housing complex <b>Red Hook Houses<b> <a href = 'https://en.wikipedia.org/wiki/Red_Hook_Houses'>learn more about it here</a>.",
            location: {
                center: [-103, 21],
                zoom: 8.4,
                pitch: 0.00,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: () => {
                document.getElementById("routes_legend").style.visibility = "hidden";
                document.getElementById("routes_dead_legend").style.visibility = "hidden";
                document.getElementById("routes_deadtype_legend").style.visibility = "hidden";
                document.getElementById("routes_insecurity_legend").style.visibility = "visible";
                document.getElementById("routes_climate_legend").style.visibility = "hidden";
                document.getElementById("crossed_territories").style.visibility = "hidden";
                document.getElementById("routes_height").style.visibility = "hidden";
                document.getElementById("INM_legend").style.visibility = "hidden";
                document.getElementById("CNDH_legend").style.visibility = "hidden";
            },
            onChapterEnter: [
                 {layer: 'mexico-weather', opacity: 0}, /*Mexico Weather*/
                 {layer: 'migration-cities-dots', opacity: 0}, /*Migration Cities*/
                 {layer: 'mexico-states', opacity: 0}, /*Mexico Stare Crime CNDH*/
                 {layer: 'mexico-states-cndh', opacity: 0}, /*Mexico State Crime CNDH*/
                 {layer: 'mexico-states-inm', opacity: 0}, /*Mexico Stare Crime INM*/
                 {layer: 'simple-drugcartels', opacity: 0}, /*Drug Cartel Territorial Control*/
                 {layer: 'simple-drugcartels-conf', opacity: 0}, /*Cartel Chapiza vs CJNG*/
                 {layer: 'simple-drugcartels-index', opacity: 0}, /*Cartels Conflicts*/
                 {layer: 'mexico-heatwave', opacity: 0}, /*Mexico Heatwave*/
                 {layer: 'Train_Migration_Routes', opacity: .75}, /*Mexico Train Routes*/
                 {layer: 'migration-cities-labels', opacity: 0}, /*Migraiton Cities Label*/
                 {layer: '2024_MissingMigrants-84ch0i', opacity: 0}, /*Missing Migrants*/
                 {layer: '2024_MissingMigrants-type', opacity: 0}, /*Missing Migrants by Cause of Dead*/
                 {layer: '2024_MissingMigrants-heatmap', opacity: 0}, /*Missing Migrants Heat Map*/
                 {layer: '2024-ins-perception', opacity: 1}, /*Insecurity perception*/
                 {layer: '2020-23-migrantencounters', opacity: 0}, /*Migrants Encounters by INM*/
                 {layer: 'migration-infrastructure-5ancfj', opacity: 0}, /*Migration Support Infrastructure*/
                 {layer: 'super-municipality-height', opacity: 0}, /*Municipality Height*/
                 {layer: 'super-municipality-bivariant', opacity: 0}, /*Municiplalities BiVariant*/
                 {layer: 'super-municipality-criminal rate', opacity: 0}, /*Municipality Crime Rate 1-1000*/
                 {layer: 'super-municipality-simple', opacity: .5}, /*Crossed Municipalities*/
                 {layer: 'super-municipality-simple_h', opacity: 0}, /*Crossed Height*/
                ],
            onChapterExit: [],
        },
        {
            id: 'Dead and Encounters',
            alignment: 'left',
            hidden: false,
            title: 'Dead and Encounters',
            image: 'images/Arrested_Migrants.jpg',
            description: 'After Sandy 2012, multiple design approaches have been taken. Architects and Planners have imagined different strategies in order to mitigate the risks. <br> <br> The following areas represent the pottential floodings in 100 yrs probability for 2020, 2050 and 2100 in order of appeareance.',
            location: {
                center: [-109.41145, 22.31081],
                zoom: 4.8,
                pitch: 0,
                bearing: 0,
                
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: () => {
                document.getElementById("routes_legend").style.visibility = "hidden";
                document.getElementById("routes_dead_legend").style.visibility = "visible";
                document.getElementById("routes_deadtype_legend").style.visibility = "hidden";
                document.getElementById("routes_insecurity_legend").style.visibility = "hidden";
                document.getElementById("routes_climate_legend").style.visibility = "hidden";
                document.getElementById("crossed_territories").style.visibility = "hidden";
                document.getElementById("routes_height").style.visibility = "hidden";
                document.getElementById("INM_legend").style.visibility = "hidden";
                document.getElementById("CNDH_legend").style.visibility = "hidden";
            },
            onChapterEnter: [
                 {layer: 'mexico-weather', opacity: 0}, /*Mexico Weather*/
                 {layer: 'migration-cities-dots', opacity: 0}, /*Migration Cities*/
                 {layer: 'mexico-states', opacity: 0}, /*Mexico Stare Crime CNDH*/
                 {layer: 'mexico-states-cndh', opacity: 0}, /*Mexico State Crime CNDH*/
                 {layer: 'mexico-states-inm', opacity: 0}, /*Mexico Stare Crime INM*/
                 {layer: 'simple-drugcartels', opacity: 0}, /*Drug Cartel Territorial Control*/
                 {layer: 'simple-drugcartels-conf', opacity: 0}, /*Cartel Chapiza vs CJNG*/
                 {layer: 'simple-drugcartels-index', opacity: 0}, /*Cartels Conflicts*/
                 {layer: 'mexico-heatwave', opacity: 0}, /*Mexico Heatwave*/
                 {layer: 'Train_Migration_Routes', opacity: 1}, /*Mexico Train Routes*/
                 {layer: 'migration-cities-labels', opacity: 0}, /*Migraiton Cities Label*/
                 {layer: '2024_MissingMigrants-84ch0i', opacity: 1}, /*Missing Migrants*/
                 {layer: '2024_MissingMigrants-type', opacity: 0}, /*Missing Migrants by Cause of Dead*/
                 {layer: '2024_MissingMigrants-heatmap', opacity: 0}, /*Missing Migrants Heat Map*/
                 {layer: '2024-ins-perception', opacity: 0}, /*Insecurity perception*/
                 {layer: '2020-23-migrantencounters', opacity: 1}, /*Migrants Encounters by INM*/
                 {layer: 'migration-infrastructure-5ancfj', opacity: 0}, /*Migration Support Infrastructure*/
                 {layer: 'super-municipality-height', opacity: 0}, /*Municipality Height*/
                 {layer: 'super-municipality-bivariant', opacity: 0}, /*Municiplalities BiVariant*/
                 {layer: 'super-municipality-criminal rate', opacity: 0}, /*Municipality Crime Rate 1-1000*/
                 {layer: 'super-municipality-simple', opacity: 0}, /*Crossed Municipalities*/
                 {layer: 'super-municipality-simple_h', opacity: 0}, /*Crossed Height*/
                ],
            onChapterExit: [],
        },
        {
            id: 'Dead per Type',
            alignment: 'left',
            hidden: false,
            title: 'When? How? Who?',
            image: 'images/Animal_Politico.jpg',
            description: 'After Sandy 2012, multiple design approaches have been taken. Architects and Planners have imagined different strategies in order to mitigate the risks. <br> <br> The following areas represent the pottential floodings in 100 yrs probability for 2020, 2050 and 2100 in order of appeareance.',
            image2: 'images/Animal_Politico.jpg',
            location: {
                center: [-109.41145, 22.31081],
                zoom: 4.8,
                pitch: 0,
                bearing: 0,
                
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: () => {
                document.getElementById("routes_legend").style.visibility = "hidden";
                document.getElementById("routes_dead_legend").style.visibility = "hidden";
                document.getElementById("routes_deadtype_legend").style.visibility = "visible";
                document.getElementById("routes_insecurity_legend").style.visibility = "hidden";
                document.getElementById("routes_climate_legend").style.visibility = "hidden";
                document.getElementById("crossed_territories").style.visibility = "hidden";
                document.getElementById("routes_height").style.visibility = "hidden";
                document.getElementById("INM_legend").style.visibility = "hidden";
                document.getElementById("CNDH_legend").style.visibility = "hidden";
            },
            onChapterEnter: [
                 {layer: 'mexico-weather', opacity: 0}, /*Mexico Weather*/
                 {layer: 'migration-cities-dots', opacity: 0}, /*Migration Cities*/
                 {layer: 'mexico-states', opacity: 0}, /*Mexico Stare Crime CNDH*/
                 {layer: 'mexico-states-cndh', opacity: 0}, /*Mexico State Crime CNDH*/
                 {layer: 'mexico-states-inm', opacity: 0}, /*Mexico Stare Crime INM*/
                 {layer: 'simple-drugcartels', opacity: 0}, /*Drug Cartel Territorial Control*/
                 {layer: 'simple-drugcartels-conf', opacity: 0}, /*Cartel Chapiza vs CJNG*/
                 {layer: 'simple-drugcartels-index', opacity: 0}, /*Cartels Conflicts*/
                 {layer: 'mexico-heatwave', opacity: 0}, /*Mexico Heatwave*/
                 {layer: 'Train_Migration_Routes', opacity: .5}, /*Mexico Train Routes*/
                 {layer: 'migration-cities-labels', opacity: 0}, /*Migraiton Cities Label*/
                 {layer: '2024_MissingMigrants-84ch0i', opacity: 0}, /*Missing Migrants*/
                 {layer: '2024_MissingMigrants-type', opacity: 1}, /*Missing Migrants by Cause of Dead*/
                 {layer: '2024_MissingMigrants-heatmap', opacity: 0}, /*Missing Migrants Heat Map*/
                 {layer: '2024-ins-perception', opacity: 0}, /*Insecurity perception*/
                 {layer: '2020-23-migrantencounters', opacity: 0}, /*Migrants Encounters by INM*/
                 {layer: 'migration-infrastructure-5ancfj', opacity: 0}, /*Migration Support Infrastructure*/
                 {layer: 'super-municipality-height', opacity: 0}, /*Municipality Height*/
                 {layer: 'super-municipality-bivariant', opacity: 0}, /*Municiplalities BiVariant*/
                 {layer: 'super-municipality-criminal rate', opacity: 0}, /*Municipality Crime Rate 1-1000*/
                 {layer: 'super-municipality-simple', opacity: 0}, /*Crossed Municipalities*/
                 {layer: 'super-municipality-simple_h', opacity: 0}, /*Crossed Height*/
                ],
            onChapterExit: [],
        },
        {
            id: 'interlude',
            alignment: 'center',
            hidden: false,
            title: 'So... What happens along the route?',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ultricies tempor purus, eget tempus sem bibendum vel. Maecenas at justo non felis accumsan condimentum vitae et leo. Sed sodales nec risus maximus congue. Ut quis tincidunt leo. Pellentesque sapien nisl, congue tempus mauris in, pulvinar mattis turpis. Nullam sit amet justo egestas, laoreet mauris ut, pulvinar ipsum. Pellentesque vehicula imperdiet iaculis. Nam in tellus metus. Donec a est non orci efficitur ornare id mattis eros. Aliquam vel facilisis ligula. Nullam tincidunt, sapien vitae bibendum consequat, nibh eros eleifend ligula, et aliquam enim justo eget felis. Sed nec vehicula metus. Pellentesque rutrum dui quis egestas hendrerit. Nullam auctor et tortor sit amet congue.',
            description2:  `
                        <button id="ChiapasButton">Go to Chiapas</button>
                        <button id="MexicoButton">Go to Mexico City</button>
                        <button id="MonterreyButton">Go to Monterrey</button>
                        <button id="HermosilloButton">Go to Hermosillo</button>
                    `,
            location: {
                center: [-100, 22.31081],
                zoom: 4.8,
                pitch: 0,
                bearing: 0,
            },  
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: () => {
                document.getElementById("routes_legend").style.visibility = "hidden";
                document.getElementById("routes_dead_legend").style.visibility = "hidden";
                document.getElementById("routes_deadtype_legend").style.visibility = "hidden";
                document.getElementById("routes_insecurity_legend").style.visibility = "hidden";
                document.getElementById("routes_climate_legend").style.visibility = "hidden";
                document.getElementById("crossed_territories").style.visibility = "hidden";
                document.getElementById("routes_height").style.visibility = "hidden";
                document.getElementById("INM_legend").style.visibility = "hidden";
                document.getElementById("CNDH_legend").style.visibility = "hidden";
            },
            onChapterEnter: [
                 {layer: 'mexico-weather', opacity: 0}, /*Mexico Weather*/
                 {layer: 'migration-cities-dots', opacity: 0}, /*Migration Cities*/
                 {layer: 'mexico-states', opacity: 0}, /*Mexico Stare Crime CNDH*/
                 {layer: 'mexico-states-cndh', opacity: 0}, /*Mexico State Crime CNDH*/
                 {layer: 'mexico-states-inm', opacity: 0}, /*Mexico Stare Crime INM*/
                 {layer: 'simple-drugcartels', opacity: 0}, /*Drug Cartel Territorial Control*/
                 {layer: 'simple-drugcartels-conf', opacity: 0}, /*Cartel Chapiza vs CJNG*/
                 {layer: 'simple-drugcartels-index', opacity: 0}, /*Cartels Conflicts*/
                 {layer: 'mexico-heatwave', opacity: 0}, /*Mexico Heatwave*/
                 {layer: 'Train_Migration_Routes', opacity: 0}, /*Mexico Train Routes*/
                 {layer: 'migration-cities-labels', opacity: 0}, /*Migraiton Cities Label*/
                 {layer: '2024_MissingMigrants-84ch0i', opacity: 0}, /*Missing Migrants*/
                 {layer: '2024_MissingMigrants-type', opacity: 0}, /*Missing Migrants by Cause of Dead*/
                 {layer: '2024_MissingMigrants-heatmap', opacity: 0}, /*Missing Migrants Heat Map*/
                 {layer: '2024-ins-perception', opacity: 0}, /*Insecurity perception*/
                 {layer: '2020-23-migrantencounters', opacity: 0}, /*Migrants Encounters by INM*/
                 {layer: 'migration-infrastructure-5ancfj', opacity: 0}, /*Migration Support Infrastructure*/
                 {layer: 'super-municipality-height', opacity: 0}, /*Municipality Height*/
                 {layer: 'super-municipality-bivariant', opacity: 0}, /*Municiplalities BiVariant*/
                 {layer: 'super-municipality-criminal rate', opacity: 0}, /*Municipality Crime Rate 1-1000*/
                 {layer: 'super-municipality-simple', opacity: 0}, /*Crossed Municipalities*/
                 {layer: 'super-municipality-simple_h', opacity: 0}, /*Crossed Height*/
                ],
            onChapterExit: [],  
        },


        {
            id: 'Chiapas',
            alignment: 'left',
            hidden: false,
            title: 'Chiapas - The beginning',
            image: 'images/flooding_d.jpg',
            description: 'After Sandy 2012, multiple design approaches have been taken. Architects and Planners have imagined different strategies in order to mitigate the risks. <br> <br> The following areas represent the pottential floodings in 100 yrs probability for 2020, 2050 and 2100 in order of appeareance.',
            location: {
                center: [-93.67435, 15.78751],
                zoom: 7.40,
                pitch: 31.22,
                bearing: -35.99,
                speed: 1,
                curve: .5,
                
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: () => {
                document.getElementById("routes_legend").style.visibility = "hidden";
                document.getElementById("routes_dead_legend").style.visibility = "visible";
                document.getElementById("routes_deadtype_legend").style.visibility = "hidden";
                document.getElementById("routes_insecurity_legend").style.visibility = "hidden";
                document.getElementById("routes_climate_legend").style.visibility = "hidden";
                document.getElementById("crossed_territories").style.visibility = "hidden";
                document.getElementById("routes_height").style.visibility = "hidden";
                document.getElementById("INM_legend").style.visibility = "hidden";
                document.getElementById("CNDH_legend").style.visibility = "hidden";
            },
            onChapterEnter: [
                 {layer: 'mexico-weather', opacity: 0}, /*Mexico Weather*/
                 {layer: 'migration-cities-dots', opacity: 0}, /*Migration Cities*/
                 {layer: 'mexico-states', opacity: 0}, /*Mexico Stare Crime CNDH*/
                 {layer: 'mexico-states-cndh', opacity: 0}, /*Mexico State Crime CNDH*/
                 {layer: 'mexico-states-inm', opacity: 0}, /*Mexico Stare Crime INM*/
                 {layer: 'simple-drugcartels', opacity: 0}, /*Drug Cartel Territorial Control*/
                 {layer: 'simple-drugcartels-conf', opacity: 0}, /*Cartel Chapiza vs CJNG*/
                 {layer: 'simple-drugcartels-index', opacity: 0}, /*Cartels Conflicts*/
                 {layer: 'mexico-heatwave', opacity: 0}, /*Mexico Heatwave*/
                 {layer: 'Train_Migration_Routes', opacity: 1}, /*Mexico Train Routes*/
                 {layer: 'migration-cities-labels', opacity: 0}, /*Migraiton Cities Label*/
                 {layer: '2024_MissingMigrants-84ch0i', opacity: 1}, /*Missing Migrants*/
                 {layer: '2024_MissingMigrants-type', opacity: 0}, /*Missing Migrants by Cause of Dead*/
                 {layer: '2024_MissingMigrants-heatmap', opacity: 0}, /*Missing Migrants Heat Map*/
                 {layer: '2024-ins-perception', opacity: 0}, /*Insecurity perception*/
                 {layer: '2020-23-migrantencounters', opacity: 1}, /*Migrants Encounters by INM*/
                 {layer: 'migration-infrastructure-5ancfj', opacity: 0}, /*Migration Support Infrastructure*/
                 {layer: 'super-municipality-height', opacity: 0}, /*Municipality Height*/
                 {layer: 'super-municipality-bivariant', opacity: 0}, /*Municiplalities BiVariant*/
                 {layer: 'super-municipality-criminal rate', opacity: 0}, /*Municipality Crime Rate 1-1000*/
                 {layer: 'super-municipality-simple', opacity: 0}, /*Crossed Municipalities*/
                 {layer: 'super-municipality-simple_h', opacity: 0}, /*Crossed Height*/
                ],
            onChapterExit: [],
        },
        {
            id: 'Chiapas-BiVariant',
            alignment: 'left',
            hidden: false,
            title: 'Historicly Poor, Recently Insecure ',
            image: 'images/flooding_d.jpg',
            description: 'After Sandy 2012, multiple design approaches have been taken. Architects and Planners have imagined different strategies in order to mitigate the risks. <br> <br> The following areas represent the pottential floodings in 100 yrs probability for 2020, 2050 and 2100 in order of appeareance.',
            location: {
                center: [-93.67435, 15.78751],
                zoom: 7.40,
                pitch: 31.22,
                bearing: -35.99,
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: () => {
                document.getElementById("routes_legend").style.visibility = "hidden";
                document.getElementById("routes_dead_legend").style.visibility = "hidden";
                document.getElementById("routes_deadtype_legend").style.visibility = "hidden";
                document.getElementById("routes_insecurity_legend").style.visibility = "hidden";
                document.getElementById("routes_climate_legend").style.visibility = "hidden";
                document.getElementById("crossed_territories").style.visibility = "hidden";
                document.getElementById("routes_height").style.visibility = "hidden";
                document.getElementById("INM_legend").style.visibility = "hidden";
                document.getElementById("CNDH_legend").style.visibility = "hidden";
            },
            onChapterEnter: [
                 {layer: 'mexico-weather', opacity: 0}, /*Mexico Weather*/
                 {layer: 'migration-cities-dots', opacity: 0}, /*Migration Cities*/
                 {layer: 'mexico-states', opacity: 0}, /*Mexico Stare Crime CNDH*/
                 {layer: 'mexico-states-cndh', opacity: 0}, /*Mexico State Crime CNDH*/
                 {layer: 'mexico-states-inm', opacity: 0}, /*Mexico Stare Crime INM*/
                 {layer: 'simple-drugcartels', opacity: 0}, /*Drug Cartel Territorial Control*/
                 {layer: 'simple-drugcartels-conf', opacity: 0}, /*Cartel Chapiza vs CJNG*/
                 {layer: 'simple-drugcartels-index', opacity: 0}, /*Cartels Conflicts*/
                 {layer: 'mexico-heatwave', opacity: 0}, /*Mexico Heatwave*/
                 {layer: 'Train_Migration_Routes', opacity: 1}, /*Mexico Train Routes*/
                 {layer: 'migration-cities-labels', opacity: 0}, /*Migraiton Cities Label*/
                 {layer: '2024_MissingMigrants-84ch0i', opacity: 1}, /*Missing Migrants*/
                 {layer: '2024_MissingMigrants-type', opacity: 0}, /*Missing Migrants by Cause of Dead*/
                 {layer: '2024_MissingMigrants-heatmap', opacity: 0}, /*Missing Migrants Heat Map*/
                 {layer: '2024-ins-perception', opacity: 1}, /*Insecurity perception*/
                 {layer: '2020-23-migrantencounters', opacity: 0}, /*Migrants Encounters by INM*/
                 {layer: 'migration-infrastructure-5ancfj', opacity: 0}, /*Migration Support Infrastructure*/
                 {layer: 'super-municipality-height', opacity: 0}, /*Municipality Height*/
                 {layer: 'super-municipality-bivariant', opacity: .8}, /*Municiplalities BiVariant*/
                 {layer: 'super-municipality-criminal rate', opacity: 0}, /*Municipality Crime Rate 1-1000*/
                 {layer: 'super-municipality-simple', opacity: 0}, /*Crossed Municipalities*/
                 {layer: 'super-municipality-simple_h', opacity: 0}, /*Crossed Height*/
                ],
            onChapterExit: [],
        },
        {
            id: 'Chiapas-CriminalRate',
            alignment: 'left',
            hidden: false,
            title: 'Rising Violence ',
            image: 'images/flooding_d.jpg',
            description: 'After Sandy 2012, multiple design approaches have been taken. Architects and Planners have imagined different strategies in order to mitigate the risks. <br> <br> The following areas represent the pottential floodings in 100 yrs probability for 2020, 2050 and 2100 in order of appeareance.',
            location: {
                center: [-93.67435, 15.78751],
                zoom: 7.40,
                pitch: 31.22,
                bearing: -35.99,
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: () => {
                document.getElementById("routes_legend").style.visibility = "hidden";
                document.getElementById("routes_dead_legend").style.visibility = "hidden";
                document.getElementById("routes_deadtype_legend").style.visibility = "hidden";
                document.getElementById("routes_insecurity_legend").style.visibility = "hidden";
                document.getElementById("routes_climate_legend").style.visibility = "hidden";
                document.getElementById("crossed_territories").style.visibility = "hidden";
                document.getElementById("routes_height").style.visibility = "hidden";
                document.getElementById("INM_legend").style.visibility = "hidden";
                document.getElementById("CNDH_legend").style.visibility = "hidden";
            },
            onChapterEnter: [
                 {layer: 'mexico-weather', opacity: 0}, /*Mexico Weather*/
                 {layer: 'migration-cities-dots', opacity: 0}, /*Migration Cities*/
                 {layer: 'mexico-states', opacity: 0}, /*Mexico Stare Crime CNDH*/
                 {layer: 'mexico-states-cndh', opacity: 0}, /*Mexico State Crime CNDH*/
                 {layer: 'mexico-states-inm', opacity: 0}, /*Mexico Stare Crime INM*/
                 {layer: 'simple-drugcartels', opacity: 0}, /*Drug Cartel Territorial Control*/
                 {layer: 'simple-drugcartels-conf', opacity: 0}, /*Cartel Chapiza vs CJNG*/
                 {layer: 'simple-drugcartels-index', opacity: 0}, /*Cartels Conflicts*/
                 {layer: 'mexico-heatwave', opacity: 0}, /*Mexico Heatwave*/
                 {layer: 'Train_Migration_Routes', opacity: 1}, /*Mexico Train Routes*/
                 {layer: 'migration-cities-labels', opacity: 0}, /*Migraiton Cities Label*/
                 {layer: '2024_MissingMigrants-84ch0i', opacity: 1}, /*Missing Migrants*/
                 {layer: '2024_MissingMigrants-type', opacity: 0}, /*Missing Migrants by Cause of Dead*/
                 {layer: '2024_MissingMigrants-heatmap', opacity: 0}, /*Missing Migrants Heat Map*/
                 {layer: '2024-ins-perception', opacity: 1}, /*Insecurity perception*/
                 {layer: '2020-23-migrantencounters', opacity: 0}, /*Migrants Encounters by INM*/
                 {layer: 'migration-infrastructure-5ancfj', opacity: 0}, /*Migration Support Infrastructure*/
                 {layer: 'super-municipality-height', opacity: 0}, /*Municipality Height*/
                 {layer: 'super-municipality-bivariant', opacity: 0}, /*Municiplalities BiVariant*/
                 {layer: 'super-municipality-criminal rate', opacity: 1}, /*Municipality Crime Rate 1-1000*/
                 {layer: 'super-municipality-simple', opacity: 0}, /*Crossed Municipalities*/
                 {layer: 'super-municipality-simple_h', opacity: 0}, /*Crossed Height*/
                ],
            onChapterExit: [],
        },
        {
            id: 'Chiapas-Cartels',
            alignment: 'left',
            hidden: false,
            title: 'Combat for migrant smuggling trafick ',
            image: 'images/flooding_d.jpg',
            description: 'After Sandy 2012, multiple design approaches have been taken. Architects and Planners have imagined different strategies in order to mitigate the risks. <br> <br> The following areas represent the pottential floodings in 100 yrs probability for 2020, 2050 and 2100 in order of appeareance.',
            location: {
                center: [-93.67435, 15.78751],
                zoom: 7.40,
                pitch: 31.22,
                bearing: -35.99,
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: () => {
                document.getElementById("routes_legend").style.visibility = "hidden";
                document.getElementById("routes_dead_legend").style.visibility = "hidden";
                document.getElementById("routes_deadtype_legend").style.visibility = "hidden";
                document.getElementById("routes_insecurity_legend").style.visibility = "hidden";
                document.getElementById("routes_climate_legend").style.visibility = "hidden";
                document.getElementById("crossed_territories").style.visibility = "hidden";
                document.getElementById("routes_height").style.visibility = "hidden";
                document.getElementById("INM_legend").style.visibility = "hidden";
                document.getElementById("CNDH_legend").style.visibility = "hidden";
            },
            onChapterEnter: [
                 {layer: 'mexico-weather', opacity: 0}, /*Mexico Weather*/
                 {layer: 'migration-cities-dots', opacity: 0}, /*Migration Cities*/
                 {layer: 'mexico-states', opacity: 0}, /*Mexico Stare Crime CNDH*/
                 {layer: 'mexico-states-cndh', opacity: 0}, /*Mexico State Crime CNDH*/
                 {layer: 'mexico-states-inm', opacity: 0}, /*Mexico Stare Crime INM*/
                 {layer: 'simple-drugcartels', opacity: 1}, /*Drug Cartel Territorial Control*/
                 {layer: 'simple-drugcartels-conf', opacity: 1}, /*Cartel Chapiza vs CJNG*/
                 {layer: 'simple-drugcartels-index', opacity: 0}, /*Cartels Conflicts*/
                 {layer: 'mexico-heatwave', opacity: 0}, /*Mexico Heatwave*/
                 {layer: 'Train_Migration_Routes', opacity: 1}, /*Mexico Train Routes*/
                 {layer: 'migration-cities-labels', opacity: 0}, /*Migraiton Cities Label*/
                 {layer: '2024_MissingMigrants-84ch0i', opacity: 1}, /*Missing Migrants*/
                 {layer: '2024_MissingMigrants-type', opacity: 0}, /*Missing Migrants by Cause of Dead*/
                 {layer: '2024_MissingMigrants-heatmap', opacity: 0}, /*Missing Migrants Heat Map*/
                 {layer: '2024-ins-perception', opacity: 1}, /*Insecurity perception*/
                 {layer: '2020-23-migrantencounters', opacity: 0}, /*Migrants Encounters by INM*/
                 {layer: 'migration-infrastructure-5ancfj', opacity: 0}, /*Migration Support Infrastructure*/
                 {layer: 'super-municipality-height', opacity: 0}, /*Municipality Height*/
                 {layer: 'super-municipality-bivariant', opacity: 0}, /*Municiplalities BiVariant*/
                 {layer: 'super-municipality-criminal rate', opacity: 0}, /*Municipality Crime Rate 1-1000*/
                 {layer: 'super-municipality-simple', opacity: 0}, /*Crossed Municipalities*/
                 {layer: 'super-municipality-simple_h', opacity: 0}, /*Crossed Height*/
                ],
            onChapterExit: [],
        },
        {
            id: 'Chiapas-Cartel-Index',
            alignment: 'left',
            hidden: false,
            title: 'Overlap ',
            image: 'images/flooding_d.jpg',
            description: 'After Sandy 2012, multiple design approaches have been taken. Architects and Planners have imagined different strategies in order to mitigate the risks. <br> <br> The following areas represent the pottential floodings in 100 yrs probability for 2020, 2050 and 2100 in order of appeareance.',
            location: {
                center: [-93.67435, 15.78751],
                zoom: 7.40,
                pitch: 31.22,
                bearing: -35.99,
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: () => {
                document.getElementById("routes_legend").style.visibility = "hidden";
                document.getElementById("routes_dead_legend").style.visibility = "hidden";
                document.getElementById("routes_deadtype_legend").style.visibility = "hidden";
                document.getElementById("routes_insecurity_legend").style.visibility = "hidden";
                document.getElementById("routes_climate_legend").style.visibility = "hidden";
                document.getElementById("crossed_territories").style.visibility = "hidden";
                document.getElementById("routes_height").style.visibility = "hidden";
                document.getElementById("INM_legend").style.visibility = "hidden";
                document.getElementById("CNDH_legend").style.visibility = "hidden";
            },
            onChapterEnter: [
                 {layer: 'mexico-weather', opacity: 0}, /*Mexico Weather*/
                 {layer: 'migration-cities-dots', opacity: 0}, /*Migration Cities*/
                 {layer: 'mexico-states', opacity: 0}, /*Mexico Stare Crime CNDH*/
                 {layer: 'mexico-states-cndh', opacity: 0}, /*Mexico State Crime CNDH*/
                 {layer: 'mexico-states-inm', opacity: 0}, /*Mexico Stare Crime INM*/
                 {layer: 'simple-drugcartels', opacity: 0}, /*Drug Cartel Territorial Control*/
                 {layer: 'simple-drugcartels-conf', opacity: 0}, /*Cartel Chapiza vs CJNG*/
                 {layer: 'simple-drugcartels-index', opacity: 1}, /*Cartels Conflicts*/
                 {layer: 'mexico-heatwave', opacity: 0}, /*Mexico Heatwave*/
                 {layer: 'Train_Migration_Routes', opacity: 1}, /*Mexico Train Routes*/
                 {layer: 'migration-cities-labels', opacity: 0}, /*Migraiton Cities Label*/
                 {layer: '2024_MissingMigrants-84ch0i', opacity: 1}, /*Missing Migrants*/
                 {layer: '2024_MissingMigrants-type', opacity: 0}, /*Missing Migrants by Cause of Dead*/
                 {layer: '2024_MissingMigrants-heatmap', opacity: 0}, /*Missing Migrants Heat Map*/
                 {layer: '2024-ins-perception', opacity: 1}, /*Insecurity perception*/
                 {layer: '2020-23-migrantencounters', opacity: 0}, /*Migrants Encounters by INM*/
                 {layer: 'migration-infrastructure-5ancfj', opacity: 0}, /*Migration Support Infrastructure*/
                 {layer: 'super-municipality-height', opacity: 0}, /*Municipality Height*/
                 {layer: 'super-municipality-bivariant', opacity: .25}, /*Municiplalities BiVariant*/
                 {layer: 'super-municipality-criminal rate', opacity: 0}, /*Municipality Crime Rate 1-1000*/
                 {layer: 'super-municipality-simple', opacity: 0}, /*Crossed Municipalities*/
                 {layer: 'super-municipality-simple_h', opacity: 0}, /*Crossed Height*/
                ],
            onChapterExit: [],
        },

        {
            id: 'MexicoCity',
            alignment: 'left',
            hidden: false,
            title: 'Mexico City',
            image: 'images/flooding_d.jpg',
            description: 'After Sandy 2012, multiple design approaches have been taken. Architects and Planners have imagined different strategies in order to mitigate the risks. <br> <br> The following areas represent the pottential floodings in 100 yrs probability for 2020, 2050 and 2100 in order of appeareance.',
            location: {
                center: [-99.20939, 19.11733],
                zoom: 7.61,
                pitch: 40,
                bearing: -23.38,
                
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: () => {
                popup2.remove();
                document.getElementById("routes_legend").style.visibility = "hidden";
                document.getElementById("routes_dead_legend").style.visibility = "visible";
                document.getElementById("routes_deadtype_legend").style.visibility = "hidden";
                document.getElementById("routes_insecurity_legend").style.visibility = "hidden";
                document.getElementById("routes_climate_legend").style.visibility = "hidden";
                document.getElementById("crossed_territories").style.visibility = "hidden";
                document.getElementById("routes_height").style.visibility = "hidden";
                document.getElementById("INM_legend").style.visibility = "hidden";
                document.getElementById("CNDH_legend").style.visibility = "hidden";
            },
            onChapterEnter: [
                 {layer: 'mexico-weather', opacity: 0}, /*Mexico Weather*/
                 {layer: 'migration-cities-dots', opacity: 0}, /*Migration Cities*/
                 {layer: 'mexico-states', opacity: 0}, /*Mexico Stare Crime CNDH*/
                 {layer: 'mexico-states-cndh', opacity: 0}, /*Mexico State Crime CNDH*/
                 {layer: 'mexico-states-inm', opacity: 0}, /*Mexico Stare Crime INM*/
                 {layer: 'simple-drugcartels', opacity: 0}, /*Drug Cartel Territorial Control*/
                 {layer: 'simple-drugcartels-conf', opacity: 0}, /*Cartel Chapiza vs CJNG*/
                 {layer: 'simple-drugcartels-index', opacity: 0}, /*Cartels Conflicts*/
                 {layer: 'mexico-heatwave', opacity: 0}, /*Mexico Heatwave*/
                 {layer: 'Train_Migration_Routes', opacity: 1}, /*Mexico Train Routes*/
                 {layer: 'migration-cities-labels', opacity: 0}, /*Migraiton Cities Label*/
                 {layer: '2024_MissingMigrants-84ch0i', opacity: 1}, /*Missing Migrants*/
                 {layer: '2024_MissingMigrants-type', opacity: 0}, /*Missing Migrants by Cause of Dead*/
                 {layer: '2024_MissingMigrants-heatmap', opacity: 0}, /*Missing Migrants Heat Map*/
                 {layer: '2024-ins-perception', opacity: 0}, /*Insecurity perception*/
                 {layer: '2020-23-migrantencounters', opacity: 1}, /*Migrants Encounters by INM*/
                 {layer: 'migration-infrastructure-5ancfj', opacity: 0}, /*Migration Support Infrastructure*/
                 {layer: 'super-municipality-height', opacity: 0}, /*Municipality Height*/
                 {layer: 'super-municipality-bivariant', opacity: 0}, /*Municiplalities BiVariant*/
                 {layer: 'super-municipality-criminal rate', opacity: 0}, /*Municipality Crime Rate 1-1000*/
                 {layer: 'super-municipality-simple', opacity: 0}, /*Crossed Municipalities*/
                 {layer: 'super-municipality-simple_h', opacity: 0}, /*Crossed Height*/
                ],
            onChapterExit: [],
        },
        {
            id: 'MexicoCity-BiVariant',
            alignment: 'left',
            hidden: false,
            title: 'Wealthy?',
            image: 'images/flooding_d.jpg',
            description: 'After Sandy 2012, multiple design approaches have been taken. Architects and Planners have imagined different strategies in order to mitigate the risks. <br> <br> The following areas represent the pottential floodings in 100 yrs probability for 2020, 2050 and 2100 in order of appeareance.',
            location: {
                center: [-99.20939, 19.11733],
                zoom: 7.61,
                pitch: 40,
                bearing: -23.38,
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: () => {
                popup2.remove();
                document.getElementById("routes_legend").style.visibility = "hidden";
                document.getElementById("routes_dead_legend").style.visibility = "hidden";
                document.getElementById("routes_deadtype_legend").style.visibility = "hidden";
                document.getElementById("routes_insecurity_legend").style.visibility = "hidden";
                document.getElementById("routes_climate_legend").style.visibility = "hidden";
                document.getElementById("crossed_territories").style.visibility = "hidden";
                document.getElementById("routes_height").style.visibility = "hidden";
                document.getElementById("INM_legend").style.visibility = "hidden";
                document.getElementById("CNDH_legend").style.visibility = "hidden";
            },
            onChapterEnter: [
                 {layer: 'mexico-weather', opacity: 0}, /*Mexico Weather*/
                 {layer: 'migration-cities-dots', opacity: 0}, /*Migration Cities*/
                 {layer: 'mexico-states', opacity: 0}, /*Mexico Stare Crime CNDH*/
                 {layer: 'mexico-states-cndh', opacity: 0}, /*Mexico State Crime CNDH*/
                 {layer: 'mexico-states-inm', opacity: 0}, /*Mexico Stare Crime INM*/
                 {layer: 'simple-drugcartels', opacity: 0}, /*Drug Cartel Territorial Control*/
                 {layer: 'simple-drugcartels-conf', opacity: 0}, /*Cartel Chapiza vs CJNG*/
                 {layer: 'simple-drugcartels-index', opacity: 0}, /*Cartels Conflicts*/
                 {layer: 'mexico-heatwave', opacity: 0}, /*Mexico Heatwave*/
                 {layer: 'Train_Migration_Routes', opacity: 1}, /*Mexico Train Routes*/
                 {layer: 'migration-cities-labels', opacity: 0}, /*Migraiton Cities Label*/
                 {layer: '2024_MissingMigrants-84ch0i', opacity: 1}, /*Missing Migrants*/
                 {layer: '2024_MissingMigrants-type', opacity: 0}, /*Missing Migrants by Cause of Dead*/
                 {layer: '2024_MissingMigrants-heatmap', opacity: 0}, /*Missing Migrants Heat Map*/
                 {layer: '2024-ins-perception', opacity: 1}, /*Insecurity perception*/
                 {layer: '2020-23-migrantencounters', opacity: 0}, /*Migrants Encounters by INM*/
                 {layer: 'migration-infrastructure-5ancfj', opacity: 0}, /*Migration Support Infrastructure*/
                 {layer: 'super-municipality-height', opacity: 0}, /*Municipality Height*/
                 {layer: 'super-municipality-bivariant', opacity: .8}, /*Municiplalities BiVariant*/
                 {layer: 'super-municipality-criminal rate', opacity: 0}, /*Municipality Crime Rate 1-1000*/
                 {layer: 'super-municipality-simple', opacity: 0}, /*Crossed Municipalities*/
                 {layer: 'super-municipality-simple_h', opacity: 0}, /*Crossed Height*/
                ],
            onChapterExit: [],
        },
        {
            id: 'MexicoCity-CriminalRate',
            alignment: 'left',
            hidden: false,
            title: 'Capital at Risk',
            image: 'images/flooding_d.jpg',
            description: 'After Sandy 2012, multiple design approaches have been taken. Architects and Planners have imagined different strategies in order to mitigate the risks. <br> <br> The following areas represent the pottential floodings in 100 yrs probability for 2020, 2050 and 2100 in order of appeareance.',
            location: {
                center: [-99.20939, 19.11733],
                zoom: 7.61,
                pitch: 40,
                bearing: -23.38,
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: () => {
                popup2.remove();
                document.getElementById("routes_legend").style.visibility = "hidden";
                document.getElementById("routes_dead_legend").style.visibility = "hidden";
                document.getElementById("routes_deadtype_legend").style.visibility = "hidden";
                document.getElementById("routes_insecurity_legend").style.visibility = "hidden";
                document.getElementById("routes_climate_legend").style.visibility = "hidden";
                document.getElementById("crossed_territories").style.visibility = "hidden";
                document.getElementById("routes_height").style.visibility = "hidden";
                document.getElementById("INM_legend").style.visibility = "hidden";
                document.getElementById("CNDH_legend").style.visibility = "hidden";
            },
            onChapterEnter: [
                 {layer: 'mexico-weather', opacity: 0}, /*Mexico Weather*/
                 {layer: 'migration-cities-dots', opacity: 0}, /*Migration Cities*/
                 {layer: 'mexico-states', opacity: 0}, /*Mexico Stare Crime CNDH*/
                 {layer: 'mexico-states-cndh', opacity: 0}, /*Mexico State Crime CNDH*/
                 {layer: 'mexico-states-inm', opacity: 0}, /*Mexico Stare Crime INM*/
                 {layer: 'simple-drugcartels', opacity: 0}, /*Drug Cartel Territorial Control*/
                 {layer: 'simple-drugcartels-conf', opacity: 0}, /*Cartel Chapiza vs CJNG*/
                 {layer: 'simple-drugcartels-index', opacity: 0}, /*Cartels Conflicts*/
                 {layer: 'mexico-heatwave', opacity: 0}, /*Mexico Heatwave*/
                 {layer: 'Train_Migration_Routes', opacity: 1}, /*Mexico Train Routes*/
                 {layer: 'migration-cities-labels', opacity: 0}, /*Migraiton Cities Label*/
                 {layer: '2024_MissingMigrants-84ch0i', opacity: 1}, /*Missing Migrants*/
                 {layer: '2024_MissingMigrants-type', opacity: 0}, /*Missing Migrants by Cause of Dead*/
                 {layer: '2024_MissingMigrants-heatmap', opacity: 0}, /*Missing Migrants Heat Map*/
                 {layer: '2024-ins-perception', opacity: 1}, /*Insecurity perception*/
                 {layer: '2020-23-migrantencounters', opacity: 0}, /*Migrants Encounters by INM*/
                 {layer: 'migration-infrastructure-5ancfj', opacity: 0}, /*Migration Support Infrastructure*/
                 {layer: 'super-municipality-height', opacity: 0}, /*Municipality Height*/
                 {layer: 'super-municipality-bivariant', opacity: 0}, /*Municiplalities BiVariant*/
                 {layer: 'super-municipality-criminal rate', opacity: 1}, /*Municipality Crime Rate 1-1000*/
                 {layer: 'super-municipality-simple', opacity: 0}, /*Crossed Municipalities*/
                 {layer: 'super-municipality-simple_h', opacity: 0}, /*Crossed Height*/
                ],
            onChapterExit: [],
        },
        {
            id: 'MexicoCity-Cartels',
            alignment: 'left',
            hidden: false,
            title: 'Battle for the Capital',
            image: 'images/flooding_d.jpg',
            description: 'After Sandy 2012, multiple design approaches have been taken. Architects and Planners have imagined different strategies in order to mitigate the risks. <br> <br> The following areas represent the pottential floodings in 100 yrs probability for 2020, 2050 and 2100 in order of appeareance.',
            location: {
                center: [-99.20939, 19.11733],
                zoom: 7.61,
                pitch: 40,
                bearing: -23.38,
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: () => {
                popup2.remove();
                document.getElementById("routes_legend").style.visibility = "hidden";
                document.getElementById("routes_dead_legend").style.visibility = "hidden";
                document.getElementById("routes_deadtype_legend").style.visibility = "hidden";
                document.getElementById("routes_insecurity_legend").style.visibility = "hidden";
                document.getElementById("routes_climate_legend").style.visibility = "hidden";
                document.getElementById("crossed_territories").style.visibility = "hidden";
                document.getElementById("routes_height").style.visibility = "hidden";
                document.getElementById("INM_legend").style.visibility = "hidden";
                document.getElementById("CNDH_legend").style.visibility = "hidden";
            },
            onChapterEnter: [
                 {layer: 'mexico-weather', opacity: 0}, /*Mexico Weather*/
                 {layer: 'migration-cities-dots', opacity: 0}, /*Migration Cities*/
                 {layer: 'mexico-states', opacity: 0}, /*Mexico Stare Crime CNDH*/
                 {layer: 'mexico-states-cndh', opacity: 0}, /*Mexico State Crime CNDH*/
                 {layer: 'mexico-states-inm', opacity: 0}, /*Mexico Stare Crime INM*/
                 {layer: 'simple-drugcartels', opacity: 1}, /*Drug Cartel Territorial Control*/
                 {layer: 'simple-drugcartels-conf', opacity: 1}, /*Cartel Chapiza vs CJNG*/
                 {layer: 'simple-drugcartels-index', opacity: 0}, /*Cartels Conflicts*/
                 {layer: 'mexico-heatwave', opacity: 0}, /*Mexico Heatwave*/
                 {layer: 'Train_Migration_Routes', opacity: 1}, /*Mexico Train Routes*/
                 {layer: 'migration-cities-labels', opacity: 0}, /*Migraiton Cities Label*/
                 {layer: '2024_MissingMigrants-84ch0i', opacity: 1}, /*Missing Migrants*/
                 {layer: '2024_MissingMigrants-type', opacity: 0}, /*Missing Migrants by Cause of Dead*/
                 {layer: '2024_MissingMigrants-heatmap', opacity: 0}, /*Missing Migrants Heat Map*/
                 {layer: '2024-ins-perception', opacity: 1}, /*Insecurity perception*/
                 {layer: '2020-23-migrantencounters', opacity: 0}, /*Migrants Encounters by INM*/
                 {layer: 'migration-infrastructure-5ancfj', opacity: 0}, /*Migration Support Infrastructure*/
                 {layer: 'super-municipality-height', opacity: 0}, /*Municipality Height*/
                 {layer: 'super-municipality-bivariant', opacity: 0}, /*Municiplalities BiVariant*/
                 {layer: 'super-municipality-criminal rate', opacity: 0}, /*Municipality Crime Rate 1-1000*/
                 {layer: 'super-municipality-simple', opacity: 0}, /*Crossed Municipalities*/
                 {layer: 'super-municipality-simple_h', opacity: 0}, /*Crossed Height*/
                ],
            onChapterExit: [],
        },
        {
            id: 'MexicoCity-Cartel-Index',
            alignment: 'left',
            hidden: false,
            title: 'Overlay',
            image: 'images/flooding_d.jpg',
            description: 'After Sandy 2012, multiple design approaches have been taken. Architects and Planners have imagined different strategies in order to mitigate the risks. <br> <br> The following areas represent the pottential floodings in 100 yrs probability for 2020, 2050 and 2100 in order of appeareance.',
            location: {
                center: [-99.20939, 19.11733],
                zoom: 7.61,
                pitch: 40,
                bearing: -23.38,
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: () => {
                popup2.remove();
                document.getElementById("routes_legend").style.visibility = "hidden";
                document.getElementById("routes_dead_legend").style.visibility = "hidden";
                document.getElementById("routes_deadtype_legend").style.visibility = "hidden";
                document.getElementById("routes_insecurity_legend").style.visibility = "hidden";
                document.getElementById("routes_climate_legend").style.visibility = "hidden";
                document.getElementById("crossed_territories").style.visibility = "hidden";
                document.getElementById("routes_height").style.visibility = "hidden";
                document.getElementById("INM_legend").style.visibility = "hidden";
                document.getElementById("CNDH_legend").style.visibility = "hidden";
            },
            onChapterEnter: [
                 {layer: 'mexico-weather', opacity: 0}, /*Mexico Weather*/
                 {layer: 'migration-cities-dots', opacity: 0}, /*Migration Cities*/
                 {layer: 'mexico-states', opacity: 0}, /*Mexico Stare Crime CNDH*/
                 {layer: 'mexico-states-cndh', opacity: 0}, /*Mexico State Crime CNDH*/
                 {layer: 'mexico-states-inm', opacity: 0}, /*Mexico Stare Crime INM*/
                 {layer: 'simple-drugcartels', opacity: 0}, /*Drug Cartel Territorial Control*/
                 {layer: 'simple-drugcartels-conf', opacity: 0}, /*Cartel Chapiza vs CJNG*/
                 {layer: 'simple-drugcartels-index', opacity: 1}, /*Cartels Conflicts*/
                 {layer: 'mexico-heatwave', opacity: 0}, /*Mexico Heatwave*/
                 {layer: 'Train_Migration_Routes', opacity: 1}, /*Mexico Train Routes*/
                 {layer: 'migration-cities-labels', opacity: 0}, /*Migraiton Cities Label*/
                 {layer: '2024_MissingMigrants-84ch0i', opacity: 1}, /*Missing Migrants*/
                 {layer: '2024_MissingMigrants-type', opacity: 0}, /*Missing Migrants by Cause of Dead*/
                 {layer: '2024_MissingMigrants-heatmap', opacity: 0}, /*Missing Migrants Heat Map*/
                 {layer: '2024-ins-perception', opacity: 1}, /*Insecurity perception*/
                 {layer: '2020-23-migrantencounters', opacity: 0}, /*Migrants Encounters by INM*/
                 {layer: 'migration-infrastructure-5ancfj', opacity: 0}, /*Migration Support Infrastructure*/
                 {layer: 'super-municipality-height', opacity: 0}, /*Municipality Height*/
                 {layer: 'super-municipality-bivariant', opacity: .25}, /*Municiplalities BiVariant*/
                 {layer: 'super-municipality-criminal rate', opacity: 0}, /*Municipality Crime Rate 1-1000*/
                 {layer: 'super-municipality-simple', opacity: 0}, /*Crossed Municipalities*/
                 {layer: 'super-municipality-simple_h', opacity: 0}, /*Crossed Height*/
                ],
            onChapterExit: [],
        },

        {
            id: 'Monterrey',
            alignment: 'left',
            hidden: false,
            title: 'Monterrey',
            image: 'images/flooding_d.jpg',
            description: 'After Sandy 2012, multiple design approaches have been taken. Architects and Planners have imagined different strategies in order to mitigate the risks. <br> <br> The following areas represent the pottential floodings in 100 yrs probability for 2020, 2050 and 2100 in order of appeareance.',
            location: {
                center: [-100.82375, 25.75723],
                zoom: 7.32,
                pitch: 36.97,
                bearing: 0.00,
                
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: () => {
                popup2.remove();
                document.getElementById("routes_legend").style.visibility = "hidden";
                document.getElementById("routes_dead_legend").style.visibility = "visible";
                document.getElementById("routes_deadtype_legend").style.visibility = "hidden";
                document.getElementById("routes_insecurity_legend").style.visibility = "hidden";
                document.getElementById("routes_climate_legend").style.visibility = "hidden";
                document.getElementById("crossed_territories").style.visibility = "hidden";
                document.getElementById("routes_height").style.visibility = "hidden";
                document.getElementById("INM_legend").style.visibility = "hidden";
                document.getElementById("CNDH_legend").style.visibility = "hidden";
            },
            onChapterEnter: [
                 {layer: 'mexico-weather', opacity: 0}, /*Mexico Weather*/
                 {layer: 'migration-cities-dots', opacity: 0}, /*Migration Cities*/
                 {layer: 'mexico-states', opacity: 0}, /*Mexico Stare Crime CNDH*/
                 {layer: 'mexico-states-cndh', opacity: 0}, /*Mexico State Crime CNDH*/
                 {layer: 'mexico-states-inm', opacity: 0}, /*Mexico Stare Crime INM*/
                 {layer: 'simple-drugcartels', opacity: 0}, /*Drug Cartel Territorial Control*/
                 {layer: 'simple-drugcartels-conf', opacity: 0}, /*Cartel Chapiza vs CJNG*/
                 {layer: 'simple-drugcartels-index', opacity: 0}, /*Cartels Conflicts*/
                 {layer: 'mexico-heatwave', opacity: 0}, /*Mexico Heatwave*/
                 {layer: 'Train_Migration_Routes', opacity: 1}, /*Mexico Train Routes*/
                 {layer: 'migration-cities-labels', opacity: 0}, /*Migraiton Cities Label*/
                 {layer: '2024_MissingMigrants-84ch0i', opacity: 1}, /*Missing Migrants*/
                 {layer: '2024_MissingMigrants-type', opacity: 0}, /*Missing Migrants by Cause of Dead*/
                 {layer: '2024_MissingMigrants-heatmap', opacity: 0}, /*Missing Migrants Heat Map*/
                 {layer: '2024-ins-perception', opacity: 0}, /*Insecurity perception*/
                 {layer: '2020-23-migrantencounters', opacity: 1}, /*Migrants Encounters by INM*/
                 {layer: 'migration-infrastructure-5ancfj', opacity: 0}, /*Migration Support Infrastructure*/
                 {layer: 'super-municipality-height', opacity: 0}, /*Municipality Height*/
                 {layer: 'super-municipality-bivariant', opacity: 0}, /*Municiplalities BiVariant*/
                 {layer: 'super-municipality-criminal rate', opacity: 0}, /*Municipality Crime Rate 1-1000*/
                 {layer: 'super-municipality-simple', opacity: 0}, /*Crossed Municipalities*/
                 {layer: 'super-municipality-simple_h', opacity: 0}, /*Crossed Height*/
                ],
            onChapterExit: [],
        },
        {
            id: 'Monterrey-BiVariant',
            alignment: 'left',
            hidden: false,
            title: 'Wealthy but risky',
            image: 'images/flooding_d.jpg',
            description: 'After Sandy 2012, multiple design approaches have been taken. Architects and Planners have imagined different strategies in order to mitigate the risks. <br> <br> The following areas represent the pottential floodings in 100 yrs probability for 2020, 2050 and 2100 in order of appeareance.',
            location: {
                center: [-100.82375, 25.75723],
                zoom: 7.32,
                pitch: 36.97,
                bearing: 0.00,
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: () => {
                popup2.remove();
                document.getElementById("routes_legend").style.visibility = "hidden";
                document.getElementById("routes_dead_legend").style.visibility = "hidden";
                document.getElementById("routes_deadtype_legend").style.visibility = "hidden";
                document.getElementById("routes_insecurity_legend").style.visibility = "hidden";
                document.getElementById("routes_climate_legend").style.visibility = "hidden";
                document.getElementById("crossed_territories").style.visibility = "hidden";
                document.getElementById("routes_height").style.visibility = "hidden";
                document.getElementById("INM_legend").style.visibility = "hidden";
                document.getElementById("CNDH_legend").style.visibility = "hidden";
            },
            onChapterEnter: [
                 {layer: 'mexico-weather', opacity: 0}, /*Mexico Weather*/
                 {layer: 'migration-cities-dots', opacity: 0}, /*Migration Cities*/
                 {layer: 'mexico-states', opacity: 0}, /*Mexico Stare Crime CNDH*/
                 {layer: 'mexico-states-cndh', opacity: 0}, /*Mexico State Crime CNDH*/
                 {layer: 'mexico-states-inm', opacity: 0}, /*Mexico Stare Crime INM*/
                 {layer: 'simple-drugcartels', opacity: 0}, /*Drug Cartel Territorial Control*/
                 {layer: 'simple-drugcartels-conf', opacity: 0}, /*Cartel Chapiza vs CJNG*/
                 {layer: 'simple-drugcartels-index', opacity: 0}, /*Cartels Conflicts*/
                 {layer: 'mexico-heatwave', opacity: 0}, /*Mexico Heatwave*/
                 {layer: 'Train_Migration_Routes', opacity: 1}, /*Mexico Train Routes*/
                 {layer: 'migration-cities-labels', opacity: 0}, /*Migraiton Cities Label*/
                 {layer: '2024_MissingMigrants-84ch0i', opacity: 1}, /*Missing Migrants*/
                 {layer: '2024_MissingMigrants-type', opacity: 0}, /*Missing Migrants by Cause of Dead*/
                 {layer: '2024_MissingMigrants-heatmap', opacity: 0}, /*Missing Migrants Heat Map*/
                 {layer: '2024-ins-perception', opacity: 1}, /*Insecurity perception*/
                 {layer: '2020-23-migrantencounters', opacity: 0}, /*Migrants Encounters by INM*/
                 {layer: 'migration-infrastructure-5ancfj', opacity: 0}, /*Migration Support Infrastructure*/
                 {layer: 'super-municipality-height', opacity: 0}, /*Municipality Height*/
                 {layer: 'super-municipality-bivariant', opacity: .8}, /*Municiplalities BiVariant*/
                 {layer: 'super-municipality-criminal rate', opacity: 0}, /*Municipality Crime Rate 1-1000*/
                 {layer: 'super-municipality-simple', opacity: 0}, /*Crossed Municipalities*/
                 {layer: 'super-municipality-simple_h', opacity: 0}, /*Crossed Height*/
                ],
            onChapterExit: [],
        },
        {
            id: 'Monterrey-CriminalRate',
            alignment: 'left',
            hidden: false,
            title: 'Safe?',
            image: 'images/flooding_d.jpg',
            description: 'After Sandy 2012, multiple design approaches have been taken. Architects and Planners have imagined different strategies in order to mitigate the risks. <br> <br> The following areas represent the pottential floodings in 100 yrs probability for 2020, 2050 and 2100 in order of appeareance.',
            location: {
                center: [-100.82375, 25.75723],
                zoom: 7.32,
                pitch: 36.97,
                bearing: 0.00,
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: () => {
                popup2.remove();
                document.getElementById("routes_legend").style.visibility = "hidden";
                document.getElementById("routes_dead_legend").style.visibility = "hidden";
                document.getElementById("routes_deadtype_legend").style.visibility = "hidden";
                document.getElementById("routes_insecurity_legend").style.visibility = "hidden";
                document.getElementById("routes_climate_legend").style.visibility = "hidden";
                document.getElementById("crossed_territories").style.visibility = "hidden";
                document.getElementById("routes_height").style.visibility = "hidden";
                document.getElementById("INM_legend").style.visibility = "hidden";
                document.getElementById("CNDH_legend").style.visibility = "hidden";
            },
            onChapterEnter: [
                 {layer: 'mexico-weather', opacity: 0}, /*Mexico Weather*/
                 {layer: 'migration-cities-dots', opacity: 0}, /*Migration Cities*/
                 {layer: 'mexico-states', opacity: 0}, /*Mexico Stare Crime CNDH*/
                 {layer: 'mexico-states-cndh', opacity: 0}, /*Mexico State Crime CNDH*/
                 {layer: 'mexico-states-inm', opacity: 0}, /*Mexico Stare Crime INM*/
                 {layer: 'simple-drugcartels', opacity: 0}, /*Drug Cartel Territorial Control*/
                 {layer: 'simple-drugcartels-conf', opacity: 0}, /*Cartel Chapiza vs CJNG*/
                 {layer: 'simple-drugcartels-index', opacity: 0}, /*Cartels Conflicts*/
                 {layer: 'mexico-heatwave', opacity: 0}, /*Mexico Heatwave*/
                 {layer: 'Train_Migration_Routes', opacity: 1}, /*Mexico Train Routes*/
                 {layer: 'migration-cities-labels', opacity: 0}, /*Migraiton Cities Label*/
                 {layer: '2024_MissingMigrants-84ch0i', opacity: 1}, /*Missing Migrants*/
                 {layer: '2024_MissingMigrants-type', opacity: 0}, /*Missing Migrants by Cause of Dead*/
                 {layer: '2024_MissingMigrants-heatmap', opacity: 0}, /*Missing Migrants Heat Map*/
                 {layer: '2024-ins-perception', opacity: 1}, /*Insecurity perception*/
                 {layer: '2020-23-migrantencounters', opacity: 0}, /*Migrants Encounters by INM*/
                 {layer: 'migration-infrastructure-5ancfj', opacity: 0}, /*Migration Support Infrastructure*/
                 {layer: 'super-municipality-height', opacity: 0}, /*Municipality Height*/
                 {layer: 'super-municipality-bivariant', opacity: 0}, /*Municiplalities BiVariant*/
                 {layer: 'super-municipality-criminal rate', opacity: 1}, /*Municipality Crime Rate 1-1000*/
                 {layer: 'super-municipality-simple', opacity: 0}, /*Crossed Municipalities*/
                 {layer: 'super-municipality-simple_h', opacity: 0}, /*Crossed Height*/
                ],
            onChapterExit: [],
        },
        {
            id: 'Monterrey-Cartels',
            alignment: 'left',
            hidden: false,
            title: 'Battlegrounds',
            image: 'images/flooding_d.jpg',
            description: 'After Sandy 2012, multiple design approaches have been taken. Architects and Planners have imagined different strategies in order to mitigate the risks. <br> <br> The following areas represent the pottential floodings in 100 yrs probability for 2020, 2050 and 2100 in order of appeareance.',
            location: {
                center: [-100.82375, 25.75723],
                zoom: 7.32,
                pitch: 36.97,
                bearing: 0.00,
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: () => {
                popup2.remove();
                document.getElementById("routes_legend").style.visibility = "hidden";
                document.getElementById("routes_dead_legend").style.visibility = "hidden";
                document.getElementById("routes_deadtype_legend").style.visibility = "hidden";
                document.getElementById("routes_insecurity_legend").style.visibility = "hidden";
                document.getElementById("routes_climate_legend").style.visibility = "hidden";
                document.getElementById("crossed_territories").style.visibility = "hidden";
                document.getElementById("routes_height").style.visibility = "hidden";
                document.getElementById("INM_legend").style.visibility = "hidden";
                document.getElementById("CNDH_legend").style.visibility = "hidden";
            },
            onChapterEnter: [
                 {layer: 'mexico-weather', opacity: 0}, /*Mexico Weather*/
                 {layer: 'migration-cities-dots', opacity: 0}, /*Migration Cities*/
                 {layer: 'mexico-states', opacity: 0}, /*Mexico Stare Crime CNDH*/
                 {layer: 'mexico-states-cndh', opacity: 0}, /*Mexico State Crime CNDH*/
                 {layer: 'mexico-states-inm', opacity: 0}, /*Mexico Stare Crime INM*/
                 {layer: 'simple-drugcartels', opacity: 1}, /*Drug Cartel Territorial Control*/
                 {layer: 'simple-drugcartels-conf', opacity: 1}, /*Cartel Chapiza vs CJNG*/
                 {layer: 'simple-drugcartels-index', opacity: 0}, /*Cartels Conflicts*/
                 {layer: 'mexico-heatwave', opacity: 0}, /*Mexico Heatwave*/
                 {layer: 'Train_Migration_Routes', opacity: 1}, /*Mexico Train Routes*/
                 {layer: 'migration-cities-labels', opacity: 0}, /*Migraiton Cities Label*/
                 {layer: '2024_MissingMigrants-84ch0i', opacity: 1}, /*Missing Migrants*/
                 {layer: '2024_MissingMigrants-type', opacity: 0}, /*Missing Migrants by Cause of Dead*/
                 {layer: '2024_MissingMigrants-heatmap', opacity: 0}, /*Missing Migrants Heat Map*/
                 {layer: '2024-ins-perception', opacity: 1}, /*Insecurity perception*/
                 {layer: '2020-23-migrantencounters', opacity: 0}, /*Migrants Encounters by INM*/
                 {layer: 'migration-infrastructure-5ancfj', opacity: 0}, /*Migration Support Infrastructure*/
                 {layer: 'super-municipality-height', opacity: 0}, /*Municipality Height*/
                 {layer: 'super-municipality-bivariant', opacity: 0}, /*Municiplalities BiVariant*/
                 {layer: 'super-municipality-criminal rate', opacity: 0}, /*Municipality Crime Rate 1-1000*/
                 {layer: 'super-municipality-simple', opacity: 0}, /*Crossed Municipalities*/
                 {layer: 'super-municipality-simple_h', opacity: 0}, /*Crossed Height*/
                ],
            onChapterExit: [],
        },
        {
            id: 'Monterrey-Cartel-Index',
            alignment: 'left',
            hidden: false,
            title: 'Overlay',
            image: 'images/flooding_d.jpg',
            description: 'After Sandy 2012, multiple design approaches have been taken. Architects and Planners have imagined different strategies in order to mitigate the risks. <br> <br> The following areas represent the pottential floodings in 100 yrs probability for 2020, 2050 and 2100 in order of appeareance.',
            location: {
                center: [-100.82375, 25.75723],
                zoom: 7.32,
                pitch: 36.97,
                bearing: 0.00,
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: () => {
                popup2.remove();
                document.getElementById("routes_legend").style.visibility = "hidden";
                document.getElementById("routes_dead_legend").style.visibility = "hidden";
                document.getElementById("routes_deadtype_legend").style.visibility = "hidden";
                document.getElementById("routes_insecurity_legend").style.visibility = "hidden";
                document.getElementById("routes_climate_legend").style.visibility = "hidden";
                document.getElementById("crossed_territories").style.visibility = "hidden";
                document.getElementById("routes_height").style.visibility = "hidden";
                document.getElementById("INM_legend").style.visibility = "hidden";
                document.getElementById("CNDH_legend").style.visibility = "hidden";
            },
            onChapterEnter: [
                 {layer: 'mexico-weather', opacity: 0}, /*Mexico Weather*/
                 {layer: 'migration-cities-dots', opacity: 0}, /*Migration Cities*/
                 {layer: 'mexico-states', opacity: 0}, /*Mexico Stare Crime CNDH*/
                 {layer: 'mexico-states-cndh', opacity: 0}, /*Mexico State Crime CNDH*/
                 {layer: 'mexico-states-inm', opacity: 0}, /*Mexico Stare Crime INM*/
                 {layer: 'simple-drugcartels', opacity: 0}, /*Drug Cartel Territorial Control*/
                 {layer: 'simple-drugcartels-conf', opacity: 0}, /*Cartel Chapiza vs CJNG*/
                 {layer: 'simple-drugcartels-index', opacity: 1}, /*Cartels Conflicts*/
                 {layer: 'mexico-heatwave', opacity: 0}, /*Mexico Heatwave*/
                 {layer: 'Train_Migration_Routes', opacity: 1}, /*Mexico Train Routes*/
                 {layer: 'migration-cities-labels', opacity: 0}, /*Migraiton Cities Label*/
                 {layer: '2024_MissingMigrants-84ch0i', opacity: 1}, /*Missing Migrants*/
                 {layer: '2024_MissingMigrants-type', opacity: 0}, /*Missing Migrants by Cause of Dead*/
                 {layer: '2024_MissingMigrants-heatmap', opacity: 0}, /*Missing Migrants Heat Map*/
                 {layer: '2024-ins-perception', opacity: 1}, /*Insecurity perception*/
                 {layer: '2020-23-migrantencounters', opacity: 0}, /*Migrants Encounters by INM*/
                 {layer: 'migration-infrastructure-5ancfj', opacity: 0}, /*Migration Support Infrastructure*/
                 {layer: 'super-municipality-height', opacity: 0}, /*Municipality Height*/
                 {layer: 'super-municipality-bivariant', opacity: .25}, /*Municiplalities BiVariant*/
                 {layer: 'super-municipality-criminal rate', opacity: 0}, /*Municipality Crime Rate 1-1000*/
                 {layer: 'super-municipality-simple', opacity: 0}, /*Crossed Municipalities*/
                 {layer: 'super-municipality-simple_h', opacity: 0}, /*Crossed Height*/
                ],
            onChapterExit: [],
        },


        {
            id: 'Hermosillo',
            alignment: 'left',
            hidden: false,
            title: 'Hermosillo',
            image: 'images/flooding_d.jpg',
            description: 'After Sandy 2012, multiple design approaches have been taken. Architects and Planners have imagined different strategies in order to mitigate the risks. <br> <br> The following areas represent the pottential floodings in 100 yrs probability for 2020, 2050 and 2100 in order of appeareance.',
            location: {
                center: [-112.82801, 29.61231],
                zoom: 7.32,
                pitch: 51.46,
                bearing: -32.80,
                
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: () => {
                popup2.remove();
                document.getElementById("routes_legend").style.visibility = "hidden";
                document.getElementById("routes_dead_legend").style.visibility = "visible";
                document.getElementById("routes_deadtype_legend").style.visibility = "hidden";
                document.getElementById("routes_insecurity_legend").style.visibility = "hidden";
                document.getElementById("routes_climate_legend").style.visibility = "hidden";
                document.getElementById("crossed_territories").style.visibility = "hidden";
                document.getElementById("routes_height").style.visibility = "hidden";
                document.getElementById("INM_legend").style.visibility = "hidden";
                document.getElementById("CNDH_legend").style.visibility = "hidden";
            },
            onChapterEnter: [
                 {layer: 'mexico-weather', opacity: 0}, /*Mexico Weather*/
                 {layer: 'migration-cities-dots', opacity: 0}, /*Migration Cities*/
                 {layer: 'mexico-states', opacity: 0}, /*Mexico Stare Crime CNDH*/
                 {layer: 'mexico-states-cndh', opacity: 0}, /*Mexico State Crime CNDH*/
                 {layer: 'mexico-states-inm', opacity: 0}, /*Mexico Stare Crime INM*/
                 {layer: 'simple-drugcartels', opacity: 0}, /*Drug Cartel Territorial Control*/
                 {layer: 'simple-drugcartels-conf', opacity: 0}, /*Cartel Chapiza vs CJNG*/
                 {layer: 'simple-drugcartels-index', opacity: 0}, /*Cartels Conflicts*/
                 {layer: 'mexico-heatwave', opacity: 0}, /*Mexico Heatwave*/
                 {layer: 'Train_Migration_Routes', opacity: 1}, /*Mexico Train Routes*/
                 {layer: 'migration-cities-labels', opacity: 0}, /*Migraiton Cities Label*/
                 {layer: '2024_MissingMigrants-84ch0i', opacity: 1}, /*Missing Migrants*/
                 {layer: '2024_MissingMigrants-type', opacity: 0}, /*Missing Migrants by Cause of Dead*/
                 {layer: '2024_MissingMigrants-heatmap', opacity: 0}, /*Missing Migrants Heat Map*/
                 {layer: '2024-ins-perception', opacity: 0}, /*Insecurity perception*/
                 {layer: '2020-23-migrantencounters', opacity: 1}, /*Migrants Encounters by INM*/
                 {layer: 'migration-infrastructure-5ancfj', opacity: 0}, /*Migration Support Infrastructure*/
                 {layer: 'super-municipality-height', opacity: 0}, /*Municipality Height*/
                 {layer: 'super-municipality-bivariant', opacity: 0}, /*Municiplalities BiVariant*/
                 {layer: 'super-municipality-criminal rate', opacity: 0}, /*Municipality Crime Rate 1-1000*/
                 {layer: 'super-municipality-simple', opacity: 0}, /*Crossed Municipalities*/
                 {layer: 'super-municipality-simple_h', opacity: 0}, /*Crossed Height*/
                ],
            onChapterExit: [],
        },
        {
            id: 'Hermosillo-BiVariant',
            alignment: 'left',
            hidden: false,
            title: 'Calm?',
            image: 'images/flooding_d.jpg',
            description: 'After Sandy 2012, multiple design approaches have been taken. Architects and Planners have imagined different strategies in order to mitigate the risks. <br> <br> The following areas represent the pottential floodings in 100 yrs probability for 2020, 2050 and 2100 in order of appeareance.',
            location: {
                center: [-112.82801, 29.61231],
                zoom: 7.32,
                pitch: 51.46,
                bearing: -32.80,
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: () => {
                popup2.remove();
                document.getElementById("routes_legend").style.visibility = "hidden";
                document.getElementById("routes_dead_legend").style.visibility = "hidden";
                document.getElementById("routes_deadtype_legend").style.visibility = "hidden";
                document.getElementById("routes_insecurity_legend").style.visibility = "hidden";
                document.getElementById("routes_climate_legend").style.visibility = "hidden";
                document.getElementById("crossed_territories").style.visibility = "hidden";
                document.getElementById("routes_height").style.visibility = "hidden";
                document.getElementById("INM_legend").style.visibility = "hidden";
                document.getElementById("CNDH_legend").style.visibility = "hidden";
            },
            onChapterEnter: [
                 {layer: 'mexico-weather', opacity: 0}, /*Mexico Weather*/
                 {layer: 'migration-cities-dots', opacity: 0}, /*Migration Cities*/
                 {layer: 'mexico-states', opacity: 0}, /*Mexico Stare Crime CNDH*/
                 {layer: 'mexico-states-cndh', opacity: 0}, /*Mexico State Crime CNDH*/
                 {layer: 'mexico-states-inm', opacity: 0}, /*Mexico Stare Crime INM*/
                 {layer: 'simple-drugcartels', opacity: 0}, /*Drug Cartel Territorial Control*/
                 {layer: 'simple-drugcartels-conf', opacity: 0}, /*Cartel Chapiza vs CJNG*/
                 {layer: 'simple-drugcartels-index', opacity: 0}, /*Cartels Conflicts*/
                 {layer: 'mexico-heatwave', opacity: 0}, /*Mexico Heatwave*/
                 {layer: 'Train_Migration_Routes', opacity: 1}, /*Mexico Train Routes*/
                 {layer: 'migration-cities-labels', opacity: 0}, /*Migraiton Cities Label*/
                 {layer: '2024_MissingMigrants-84ch0i', opacity: 1}, /*Missing Migrants*/
                 {layer: '2024_MissingMigrants-type', opacity: 0}, /*Missing Migrants by Cause of Dead*/
                 {layer: '2024_MissingMigrants-heatmap', opacity: 0}, /*Missing Migrants Heat Map*/
                 {layer: '2024-ins-perception', opacity: 1}, /*Insecurity perception*/
                 {layer: '2020-23-migrantencounters', opacity: 0}, /*Migrants Encounters by INM*/
                 {layer: 'migration-infrastructure-5ancfj', opacity: 0}, /*Migration Support Infrastructure*/
                 {layer: 'super-municipality-height', opacity: 0}, /*Municipality Height*/
                 {layer: 'super-municipality-bivariant', opacity: .8}, /*Municiplalities BiVariant*/
                 {layer: 'super-municipality-criminal rate', opacity: 0}, /*Municipality Crime Rate 1-1000*/
                 {layer: 'super-municipality-simple', opacity: 0}, /*Crossed Municipalities*/
                 {layer: 'super-municipality-simple_h', opacity: 0}, /*Crossed Height*/
                ],
            onChapterExit: [],
        },
        {
            id: 'Hermosillo-CriminalRate',
            alignment: 'left',
            hidden: false,
            title: 'Not so calm...',
            image: 'images/flooding_d.jpg',
            description: 'After Sandy 2012, multiple design approaches have been taken. Architects and Planners have imagined different strategies in order to mitigate the risks. <br> <br> The following areas represent the pottential floodings in 100 yrs probability for 2020, 2050 and 2100 in order of appeareance.',
            location: {
                center: [-112.82801, 29.61231],
                zoom: 7.32,
                pitch: 51.46,
                bearing: -32.80,
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: () => {
                popup2.remove();
                document.getElementById("routes_legend").style.visibility = "hidden";
                document.getElementById("routes_dead_legend").style.visibility = "hidden";
                document.getElementById("routes_deadtype_legend").style.visibility = "hidden";
                document.getElementById("routes_insecurity_legend").style.visibility = "hidden";
                document.getElementById("routes_climate_legend").style.visibility = "hidden";
                document.getElementById("crossed_territories").style.visibility = "hidden";
                document.getElementById("routes_height").style.visibility = "hidden";
                document.getElementById("INM_legend").style.visibility = "hidden";
                document.getElementById("CNDH_legend").style.visibility = "hidden";
            },
            onChapterEnter: [
                 {layer: 'mexico-weather', opacity: 0}, /*Mexico Weather*/
                 {layer: 'migration-cities-dots', opacity: 0}, /*Migration Cities*/
                 {layer: 'mexico-states', opacity: 0}, /*Mexico Stare Crime CNDH*/
                 {layer: 'mexico-states-cndh', opacity: 0}, /*Mexico State Crime CNDH*/
                 {layer: 'mexico-states-inm', opacity: 0}, /*Mexico Stare Crime INM*/
                 {layer: 'simple-drugcartels', opacity: 0}, /*Drug Cartel Territorial Control*/
                 {layer: 'simple-drugcartels-conf', opacity: 0}, /*Cartel Chapiza vs CJNG*/
                 {layer: 'simple-drugcartels-index', opacity: 0}, /*Cartels Conflicts*/
                 {layer: 'mexico-heatwave', opacity: 0}, /*Mexico Heatwave*/
                 {layer: 'Train_Migration_Routes', opacity: 1}, /*Mexico Train Routes*/
                 {layer: 'migration-cities-labels', opacity: 0}, /*Migraiton Cities Label*/
                 {layer: '2024_MissingMigrants-84ch0i', opacity: 1}, /*Missing Migrants*/
                 {layer: '2024_MissingMigrants-type', opacity: 0}, /*Missing Migrants by Cause of Dead*/
                 {layer: '2024_MissingMigrants-heatmap', opacity: 0}, /*Missing Migrants Heat Map*/
                 {layer: '2024-ins-perception', opacity: 1}, /*Insecurity perception*/
                 {layer: '2020-23-migrantencounters', opacity: 0}, /*Migrants Encounters by INM*/
                 {layer: 'migration-infrastructure-5ancfj', opacity: 0}, /*Migration Support Infrastructure*/
                 {layer: 'super-municipality-height', opacity: 0}, /*Municipality Height*/
                 {layer: 'super-municipality-bivariant', opacity: 0}, /*Municiplalities BiVariant*/
                 {layer: 'super-municipality-criminal rate', opacity: 1}, /*Municipality Crime Rate 1-1000*/
                 {layer: 'super-municipality-simple', opacity: 0}, /*Crossed Municipalities*/
                 {layer: 'super-municipality-simple_h', opacity: 0}, /*Crossed Height*/
                ],
            onChapterExit: [],
        },
        {
            id: 'Hermosillo-Cartels',
            alignment: 'left',
            hidden: false,
            title: 'Cartel de Sinaloa Kingdom',
            image: 'images/flooding_d.jpg',
            description: 'After Sandy 2012, multiple design approaches have been taken. Architects and Planners have imagined different strategies in order to mitigate the risks. <br> <br> The following areas represent the pottential floodings in 100 yrs probability for 2020, 2050 and 2100 in order of appeareance.',
            location: {
                center: [-112.82801, 29.61231],
                zoom: 7.32,
                pitch: 51.46,
                bearing: -32.80,
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: () => {
                popup2.remove();
                document.getElementById("routes_legend").style.visibility = "hidden";
                document.getElementById("routes_dead_legend").style.visibility = "hidden";
                document.getElementById("routes_deadtype_legend").style.visibility = "hidden";
                document.getElementById("routes_insecurity_legend").style.visibility = "hidden";
                document.getElementById("routes_climate_legend").style.visibility = "hidden";
                document.getElementById("crossed_territories").style.visibility = "hidden";
                document.getElementById("routes_height").style.visibility = "hidden";
                document.getElementById("INM_legend").style.visibility = "hidden";
                document.getElementById("CNDH_legend").style.visibility = "hidden";
            },
            onChapterEnter: [
                 {layer: 'mexico-weather', opacity: 0}, /*Mexico Weather*/
                 {layer: 'migration-cities-dots', opacity: 0}, /*Migration Cities*/
                 {layer: 'mexico-states', opacity: 0}, /*Mexico Stare Crime CNDH*/
                 {layer: 'mexico-states-cndh', opacity: 0}, /*Mexico State Crime CNDH*/
                 {layer: 'mexico-states-inm', opacity: 0}, /*Mexico Stare Crime INM*/
                 {layer: 'simple-drugcartels', opacity: 1}, /*Drug Cartel Territorial Control*/
                 {layer: 'simple-drugcartels-conf', opacity: 1}, /*Cartel Chapiza vs CJNG*/
                 {layer: 'simple-drugcartels-index', opacity: 0}, /*Cartels Conflicts*/
                 {layer: 'mexico-heatwave', opacity: 0}, /*Mexico Heatwave*/
                 {layer: 'Train_Migration_Routes', opacity: 1}, /*Mexico Train Routes*/
                 {layer: 'migration-cities-labels', opacity: 0}, /*Migraiton Cities Label*/
                 {layer: '2024_MissingMigrants-84ch0i', opacity: 1}, /*Missing Migrants*/
                 {layer: '2024_MissingMigrants-type', opacity: 0}, /*Missing Migrants by Cause of Dead*/
                 {layer: '2024_MissingMigrants-heatmap', opacity: 0}, /*Missing Migrants Heat Map*/
                 {layer: '2024-ins-perception', opacity: 1}, /*Insecurity perception*/
                 {layer: '2020-23-migrantencounters', opacity: 0}, /*Migrants Encounters by INM*/
                 {layer: 'migration-infrastructure-5ancfj', opacity: 0}, /*Migration Support Infrastructure*/
                 {layer: 'super-municipality-height', opacity: 0}, /*Municipality Height*/
                 {layer: 'super-municipality-bivariant', opacity: 0}, /*Municiplalities BiVariant*/
                 {layer: 'super-municipality-criminal rate', opacity: 0}, /*Municipality Crime Rate 1-1000*/
                 {layer: 'super-municipality-simple', opacity: 0}, /*Crossed Municipalities*/
                 {layer: 'super-municipality-simple_h', opacity: 0}, /*Crossed Height*/
                ],
            onChapterExit: [],
        },
        {
            id: 'Hermosillo-Cartel-Index',
            alignment: 'left',
            hidden: false,
            title: 'Overlay',
            image: 'images/flooding_d.jpg',
            description: 'After Sandy 2012, multiple design approaches have been taken. Architects and Planners have imagined different strategies in order to mitigate the risks. <br> <br> The following areas represent the pottential floodings in 100 yrs probability for 2020, 2050 and 2100 in order of appeareance.',
            location: {
                center: [-112.82801, 29.61231],
                zoom: 7.32,
                pitch: 51.46,
                bearing: -32.80,
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: () => {
                popup2.remove();
                document.getElementById("routes_legend").style.visibility = "hidden";
                document.getElementById("routes_dead_legend").style.visibility = "hidden";
                document.getElementById("routes_deadtype_legend").style.visibility = "hidden";
                document.getElementById("routes_insecurity_legend").style.visibility = "hidden";
                document.getElementById("routes_climate_legend").style.visibility = "hidden";
                document.getElementById("crossed_territories").style.visibility = "hidden";
                document.getElementById("routes_height").style.visibility = "hidden";
                document.getElementById("INM_legend").style.visibility = "hidden";
                document.getElementById("CNDH_legend").style.visibility = "hidden";
            },
            onChapterEnter: [
                 {layer: 'mexico-weather', opacity: 0}, /*Mexico Weather*/
                 {layer: 'migration-cities-dots', opacity: 0}, /*Migration Cities*/
                 {layer: 'mexico-states', opacity: 0}, /*Mexico Stare Crime CNDH*/
                 {layer: 'mexico-states-cndh', opacity: 0}, /*Mexico State Crime CNDH*/
                 {layer: 'mexico-states-inm', opacity: 0}, /*Mexico Stare Crime INM*/
                 {layer: 'simple-drugcartels', opacity: 0}, /*Drug Cartel Territorial Control*/
                 {layer: 'simple-drugcartels-conf', opacity: 0}, /*Cartel Chapiza vs CJNG*/
                 {layer: 'simple-drugcartels-index', opacity: 1}, /*Cartels Conflicts*/
                 {layer: 'mexico-heatwave', opacity: 0}, /*Mexico Heatwave*/
                 {layer: 'Train_Migration_Routes', opacity: 1}, /*Mexico Train Routes*/
                 {layer: 'migration-cities-labels', opacity: 0}, /*Migraiton Cities Label*/
                 {layer: '2024_MissingMigrants-84ch0i', opacity: 1}, /*Missing Migrants*/
                 {layer: '2024_MissingMigrants-type', opacity: 0}, /*Missing Migrants by Cause of Dead*/
                 {layer: '2024_MissingMigrants-heatmap', opacity: 0}, /*Missing Migrants Heat Map*/
                 {layer: '2024-ins-perception', opacity: 1}, /*Insecurity perception*/
                 {layer: '2020-23-migrantencounters', opacity: 0}, /*Migrants Encounters by INM*/
                 {layer: 'migration-infrastructure-5ancfj', opacity: 0}, /*Migration Support Infrastructure*/
                 {layer: 'super-municipality-height', opacity: 0}, /*Municipality Height*/
                 {layer: 'super-municipality-bivariant', opacity: .25}, /*Municiplalities BiVariant*/
                 {layer: 'super-municipality-criminal rate', opacity: 0}, /*Municipality Crime Rate 1-1000*/
                 {layer: 'super-municipality-simple', opacity: 0}, /*Crossed Municipalities*/
                 {layer: 'super-municipality-simple_h', opacity: 0}, /*Crossed Height*/
                ],
            onChapterExit: [],
        },

        {
            id: 'Hope',
            alignment: 'left',
            hidden: false,
            title: 'Who Helps?',
            image: 'images/flooding_d.jpg',
            description: 'After Sandy 2012, multiple design approaches have been taken. Architects and Planners have imagined different strategies in order to mitigate the risks. <br> <br> The following areas represent the pottential floodings in 100 yrs probability for 2020, 2050 and 2100 in order of appeareance.',
            location: {
                center: [-109.41145, 22.31081],
                zoom: 4.8,
                pitch: 0,
                bearing: 0,
                
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: () => {
                popup2.remove();
                document.getElementById("routes_legend").style.visibility = "visible";
                document.getElementById("routes_dead_legend").style.visibility = "hidden";
                document.getElementById("routes_deadtype_legend").style.visibility = "hidden";
                document.getElementById("routes_insecurity_legend").style.visibility = "hidden";
                document.getElementById("routes_climate_legend").style.visibility = "hidden";
                document.getElementById("crossed_territories").style.visibility = "hidden";
                document.getElementById("routes_height").style.visibility = "hidden";
                document.getElementById("INM_legend").style.visibility = "hidden";
                document.getElementById("CNDH_legend").style.visibility = "hidden";
            },
            onChapterEnter: [
                 {layer: 'mexico-weather', opacity: 0}, /*Mexico Weather*/
                 {layer: 'migration-cities-dots', opacity: 0}, /*Migration Cities*/
                 {layer: 'mexico-states', opacity: 0}, /*Mexico Stare Crime CNDH*/
                 {layer: 'mexico-states-cndh', opacity: 0}, /*Mexico State Crime CNDH*/
                 {layer: 'mexico-states-inm', opacity: 0}, /*Mexico Stare Crime INM*/
                 {layer: 'simple-drugcartels', opacity: 0}, /*Drug Cartel Territorial Control*/
                 {layer: 'simple-drugcartels-conf', opacity: 0}, /*Cartel Chapiza vs CJNG*/
                 {layer: 'simple-drugcartels-index', opacity: 0}, /*Cartels Conflicts*/
                 {layer: 'mexico-heatwave', opacity: 0}, /*Mexico Heatwave*/
                 {layer: 'Train_Migration_Routes', opacity: 1}, /*Mexico Train Routes*/
                 {layer: 'migration-cities-labels', opacity: 0}, /*Migraiton Cities Label*/
                 {layer: '2024_MissingMigrants-84ch0i', opacity: 0}, /*Missing Migrants*/
                 {layer: '2024_MissingMigrants-type', opacity: 0}, /*Missing Migrants by Cause of Dead*/
                 {layer: '2024_MissingMigrants-heatmap', opacity: 0}, /*Missing Migrants Heat Map*/
                 {layer: '2024-ins-perception', opacity: 0}, /*Insecurity perception*/
                 {layer: '2020-23-migrantencounters', opacity: 0}, /*Migrants Encounters by INM*/
                 {layer: 'migration-infrastructure-5ancfj', opacity: 1}, /*Migration Support Infrastructure*/
                 {layer: 'super-municipality-height', opacity: 0}, /*Municipality Height*/
                 {layer: 'super-municipality-bivariant', opacity: 0}, /*Municiplalities BiVariant*/
                 {layer: 'super-municipality-criminal rate', opacity: 0}, /*Municipality Crime Rate 1-1000*/
                 {layer: 'super-municipality-simple', opacity: 0}, /*Crossed Municipalities*/
                 {layer: 'super-municipality-simple_h', opacity: 0}, /*Crossed Height*/
                ],
            onChapterExit: [],
        },
        
    ]
};

