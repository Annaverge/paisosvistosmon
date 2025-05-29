var config = {
    style: 'mapbox://styles/annaverge/cmb97gztf00se01r2dcac9966',
    // leave commented to use Mapbox Standard Style
    accessToken: 'pk.eyJ1IjoiYW5uYXZlcmdlIiwiYSI6ImNtYjBvM3FtaTB6ZTIyanM2d253NmRoZzEifQ._AKuw4eSOiUWqkuXGS_owA',
    showMarkers: false,
    markerColor: '#3FB1CE',
    //projection: 'equirectangular',
    //Read more about available projections here
    //https://docs.mapbox.com/mapbox-gl-js/example/projections/
    inset: true,
    insetOptions: {
        markerColor: 'orange'
    },
    insetPosition: 'bottom-right',
    theme: 'dark',
    use3dTerrain: false, //set true for enabling 3D maps.
    auto: false,
    title: 'Países más visitados en 2024',
    subtitle: 'Storymaps de los estados con mejores datos de turismo durante el año pasado',
    byline: 'By Anna Verge',
    footer: 'Organización Mundial del Turismo. <br> Created using <a href="https://www.unwto.org/es" target="_blank">Mapbox Storytelling</a> template.',
    chapters: [
        {
            id: 'slug-style-id',
            alignment: 'left',
            hidden: false,
            title: 'Francia',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Louvre_Courtyard%2C_Looking_West.jpg/1920px-Louvre_Courtyard%2C_Looking_West.jpg',
            description: 'Francia es el destino más popular entre los viajeros y viajeras. Entre los monumentos más populares de su capital, París, están la Torre Eiffel, el Museo del Louvre, la Catedral de Notre-Dame, Sainte-Chapelle o Montmartre y la Basílica del Sagrado Corazón. A lo largo de su territorio se puede ver también Mont Saint-Michel, Carcassonne o los Castillos del Loira.',
            location: {
                center: [2.34352, 48.85132],
                zoom: 5,
                pitch: 60,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'second-identifier',
            alignment: 'right',
            hidden: false,
            title: 'España',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/G%C3%BCell_BCN_edited.jpg/1280px-G%C3%BCell_BCN_edited.jpg',
            description: 'A pesar de no ser la capital del país, Barcelona es la ciudad más visitada de España y situa al país como el segundo más visitado a nivel mundial. La Sagrada Familia, el Par Güell, la Casa Batlló o los paseos por el barri Gòtic hacen de la Ciutat Comtal un destino inigualable para todo tipo de turistas.',
            location: {
                center: [2.17422, 41.40426],
                zoom: 8.5,
                pitch: 30,
                bearing: 0,
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
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'third-identifier',
            alignment: 'left',
            hidden: false,
            title: 'Estados Unidos',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/3015-Central_Park-Sheep_Meadow.JPG/1280px-3015-Central_Park-Sheep_Meadow.JPG',
            description: 'Nueva York es una de las ciudades más icónicas y cosmopolitas del mundo. Situada en la costa este de Estados Unidos, atrae a millones de visitantes cada año por su energía inigualable y su enorme oferta cultural. Entre sus atractivos más reconocidos se encuentran la Estatua de la Libertad, el Empire State Building, el Puente de Brooklyn, Times Square o Central Park. También es un referente en arte y espectáculos, con lugares como el Museo Metropolitano de Arte, el MoMA o los teatros de Broadway.',
            location: {
                center: [-73.97087, 40.7767],
                zoom: 10,
                pitch: 8.01,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'fourth-chapter',
            alignment: 'fully',
            hidden: false,
            title: 'China',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/The_Great_Wall_of_China_at_Jinshanling-edit.jpg/1280px-The_Great_Wall_of_China_at_Jinshanling-edit.jpg',
            description: 'China es uno de los países más antiguos y fascinantes del mundo Entre sus grandes símbolos destaca la Muralla China, una de las Siete Maravillas del Mundo, que se extiende por miles de kilómetros. En el corazón del país se encuentra Beijing, la capital, donde se encuentran monumentos clave como la Ciudad Prohibida, el Templo del Cielo o la Plaza de Tiananmén. Ofrece una experiencia única para quienes buscan explorar paisajes imponentes, arquitectura ancestral y una cultura profundamente arraigada en la historia.',
            location: {
                center: [116.41016, 39.91013],
                zoom: 3,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'fifth-chapter',
            alignment: 'fully',
            hidden: false,
            title: 'Italia',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Panoramic_photograph_of_interior_of_Colosseum.jpg/1280px-Panoramic_photograph_of_interior_of_Colosseum.jpg',
            description: 'Italia es un país repleto de arte, historia y paisajes que cautivan a cualquier visitante. Su capital, Roma, es uno de los destinos más importantes del mundo por su legado histórico y cultural. Conocida como la Ciudad Eterna, Roma alberga monumentos inigualables como el Coliseo, el Panteón, el Foro Romano y la Fontana di Trevi. También es sede del Vaticano, donde se encuentran la Basílica de San Pedro y la Capilla Sixtina, con los frescos de Miguel Ángel',
            location: {
                center: [12.48605, 41.8913],
                zoom: 5,
                pitch: 1,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
         {
            id: 'sixth-chapter',
            alignment: 'left',
            hidden: false,
            title: 'Turquía',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/Turkey-3019_-_Hagia_Sophia_%282216460729%29.jpg/1024px-Turkey-3019_-_Hagia_Sophia_%282216460729%29.jpg',
            description: 'Turquía es un país único, donde confluyen Europa y Asia, y donde se funden culturas, religiones e imperios antiguos. Su riqueza histórica y su diversidad geográfica la convierten en un destino fascinante. Entre sus lugares más destacados está Estambul, antigua Bizancio y Constantinopla, con monumentos impresionantes como la Santa Sofía, la Mezquita Azul, el Palacio Topkapi y el Gran Bazar. Al interior del país, destaca la mágica región de Capadocia, con sus formaciones rocosas y paseos en globo aerostático. ',
            location: {
                center: [28.93888, 41.01269],
                zoom: 4,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        }
    ]
};
