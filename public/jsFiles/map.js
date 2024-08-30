const singersByState = {
    "Andhra Pradesh": [
        "S. P. Balasubrahmanyam", // Telugu Film Music
        "K. S. Chithra",          // Indian Playback and Classical
        "Hariharan",              // Bollywood, Indian Classical
        "M. M. Keeravani"         // Telugu Film Music
    ],
    "Arunachal Pradesh": [
        "Taba Chake",            // Indie, Pop
        "Kemo Noga",             // Local and Folk Music
        "Rinchin",               // Local Music
        "Naaibu Saring"          // Local and Folk Music
    ],
    "Assam": [
        "Zubeen Garg",           // Assamese, Bollywood
        "Papon",                 // Assamese, Bollywood
        "Dipali Borthakur",      // Assamese
        "Jayanta Hazarika"       // Assamese Folk and Classical
    ],
    "Bihar": [
        "Udit Narayan",          // Bollywood, Pop
        "Sharda Sinha",          // Bhojpuri Folk
        "Manoj Tiwari",          // Bhojpuri Folk, Bollywood
        "Pawan Singh"            // Bhojpuri Folk
    ],
    "Chhattisgarh": [
        "Teejan Bai",            // Pandavani Folk
        "Kedar Jadhav",          // Folk
        "Pooja Sethi",           // Folk
        "Niranjan Singh"         // Local and Folk Music
    ],
    "Goa": [
        "Lorna",                 // Konkani
        "Roshan Pereira",        // Konkani
        "Chris Perry",           // Konkani
        "Sridhar Menon"          // Konkani and Popular
    ],
    "Gujarat": [
        "Hemant Kumar",          // Hindi and Gujarati Film Music
        "Falguni Pathak",        // Gujarati Pop and Folk
        "Kirtidan Gadhvi",       // Gujarati Folk
        "Aishwarya Majmudar"     // Gujarati and Bollywood
    ],
    "Haryana": [
        "Sapna Choudhary",       // Haryanvi Folk, Pop
        "Diler Kharkiya",        // Haryanvi Folk
        "Raj Mawar",             // Haryanvi Folk
        "Raju Punjabi"           // Haryanvi Folk
    ],
    "Himachal Pradesh": [
        "Neha Kakkar",           // Bollywood, Pop
        "M.S. Dhoni"             // (Cricketer known for his singing appearances)
    ],
    "Jharkhand": [
        "Babulal Marandi",       // Local and Folk Music
        "Niraj Kumar",           // Folk
        "Pappu Ahuja",           // Local
        "Madhusree"              // Local and Bollywood
    ],
    "Karnataka": [
        "S. P. Balasubrahmanyam", // Kannada, Bollywood
        "K. S. Chithra",          // Indian Playback and Classical
        "Vani Jairam",           // Indian Playback
        "Hamsalekha"             // Kannada Film Music
    ],
    "Kerala": [
        "K. J. Yesudas",         // Malayalam Film Music, Classical
        "Chitra",                // Malayalam Film Music, Indian Playback
        "M. G. Sreekumar",       // Malayalam Film Music
        "Sujatha Mohan"          // Malayalam Film Music
    ],
    "Ladakh": [
        "Sonam Wangmo",          // Local and Tibetan Music
        "Tsering Wangmo",        // Tibetan Folk
        "Karma Wangdus",         // Tibetan Music
        "Lobsang Wangyal"        // Tibetan Music
    ],
    "Lakshadweep": [
        "Suman Kalyanpur",       // Indian Playback
        "Lalitha",               // Local Music
        "Laxmi Bhaduri",         // Local Music
        "Anwar Hussain"          // Local Music
    ],
    "Delhi": [
        "Sunidhi Chauhan",      // Bollywood, Pop
        "Badshah",              // Bollywood, Pop
        "Amit Trivedi",          // Bollywood, Indie
        "Ritviz"                 // Indie, Pop
    ],
    "Puducherry": [
        "N. S. Krishnan",       // Tamil Film Music
        "J. P. Ghosh",          // Tamil Folk
        "Karthik",              // Tamil and Indian Playback
        "Shalini"               // Tamil Film Music
    ],
    "Maharashtra": [
        "Lata Mangeshkar",       // Bollywood, Classical
        "Asha Bhosle",           // Bollywood, Classical, Pop
        "Kishore Kumar",         // Bollywood, Pop
        "Mohammad Rafi",         // Bollywood
        "Sonu Nigam",            // Bollywood, Pop
        "Shreya Ghoshal",        // Bollywood, Classical
        "Sukhwinder Singh",      // Bollywood, Pop
        "Udit Narayan"           // Bollywood, Pop
    ],
    "Manipur": [
        "Thabal Chongba",        // Local Music
        "Sanjay Leela Bhansali", // Local
        "Meghachandra Khuraijam",// Local and Folk Music
        "Elangbam Premchand"     // Local Music
    ],
    "Meghalaya": [
        "Pynshngainlang Syiem",  // Folk
        "Daphne Yaden",          // Folk and Pop
        "Maka Raynald",          // Local and Folk Music
        "Ellie L"                // Local and Indie
    ],
    "Mizoram": [
        "Lalmuansangi",          // Local Music
        "Lalthangliana",         // Mizo Folk
        "Kawngzaw",              // Mizo Music
        "Bawite"                 // Local Music
    ],
    "Nagaland": [
        "Theja Meru",            // Local and Contemporary
        "Tali Angh",             // Naga Folk
        "Mikio",                 // Naga Folk
        "Naga Khel"              // Local Music
    ],
    "Odisha": [
        "Prafulla Kar",          // Odia Film Music
        "Gita Dey",              // Odia Music
        "Nirakar Yakshini",      // Odia Music
        "Basu Chatterjee"        // Odia Music
    ],
    "Sikkim": [
        "Tashi Phunstok",        // Tibetan Music
        "Pemba Wangchuk",        // Tibetan Music
        "Dorji Wangchuk",        // Tibetan Music
        "Namgyal Lhamo"          // Tibetan Music
    ],
    "Tamil Nadu": [
        "Ilaiyaraaja",           // Tamil Film Music, Classical
        "A. R. Rahman",          // Bollywood, International
        "K. S. Chithra",         // Indian Playback, Classical
        "S. Janaki",             // Indian Playback
        "Hariharan",             // Bollywood, Indian Classical
        "T. M. Soundararajan",   // Tamil Film Music
        "Chinmayi",              // Tamil, Bollywood
        "Karthik"                // Tamil and Bollywood
    ],
    "Telangana": [
        "S. P. Balasubrahmanyam", // Telugu Film Music
        "K. S. Chithra",          // Indian Playback and Classical
        "Hariharan",              // Bollywood, Indian Classical
        "Kailash Kher"            // Folk, Bollywood
    ],
    "Tripura": [
        "Kalimoni Reang",        // Folk Music
        "Animesh Debbarma",      // Folk Music
        "Bijoy Choudhury",       // Local Music
        "Kisore Thakur"          // Local Music
    ],
    "Uttar Pradesh": [
        "Shubha Mudgal",         // Classical, Bollywood
        "Jubin Nautiyal",        // Bollywood, Pop
        "Kabita Seth",           // Folk
        "Mohammad Rafi",         // Bollywood
        "Udit Narayan"           // Bollywood, Pop
    ],
    "Uttarakhand": [
        "Meena Rana",            // Local Music
        "Kishore Kumar",         // Bollywood, Pop
        "Ravi Mehta",            // Local Music
        "Anita Rao"              // Local Music
    ],
    "West Bengal": [
        "Arijit Singh",          // Bollywood, Pop
        "Shreya Ghoshal",        // Bollywood, Classical
        "Hemanta Mukherjee",     // Bengali, Classical
        "Manna Dey",             // Classical, Bollywood
        "Kishore Kumar"          // Bollywood, Pop
    ]
};

const visited = []


// Example of accessing singers from a specific state
console.log(singersByState["West Bengal"]); // Output: ["Arijit Singh", "Shreya Ghoshal"]


if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function (position) {
        let userLocation = [position.coords.latitude, position.coords.longitude];
        console.log(userLocation)
        document.getElementById("lat").innerHTML = `${userLocation[0]}`;
        document.getElementById("lng").innerHTML = `${userLocation[1]}`;

        // Set the map view to the user's location
        map.setView(userLocation, 12);

        // Add a marker at the user's location
        let marker = L.marker(userLocation).addTo(map)
            .bindPopup('Your Location')
            .openPopup();

        // Reverse geocoding to get the address
        let geocodeAPI = 'https://nominatim.openstreetmap.org/reverse?format=json&lat=' + userLocation[0] + '&lon=' + userLocation[1];
        fetch(geocodeAPI)
            .then(response => response.json())
            .then(data => {

                document.querySelector('.para').innerHTML = 'Address: ' + data.display_name;
                findSinger()
            })
            .catch(error => console.log('Error fetching address:', error));
    }, function () {
        handleLocationError(true, defaultLocation);
    });
} else {
    // Browser doesn't support Geolocation
    handleLocationError(false, defaultLocation);
}


// Default coordinates (if geolocation fails)
let defaultLocation = [28.7041, 77.1025];; // delhi

// Create a map centered at the default location
let map = L.map('map').setView(defaultLocation, 12);

// Add a tile layer from OpenStreetMap
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
}).addTo(map);


// Listen for click events on the map
let lat;
let lng;
let clicked = [];
const result = document.getElementById('resultP');
map.on('click', function (e) {
    lat = e.latlng.lat;
    lng = e.latlng.lng;
    const details = `${lat}, ${lng} `;
    clicked.push(details);
    clicked.forEach(element => {
        document.getElementById("lat").innerHTML = `${lat}`;
        document.getElementById("lng").innerHTML = `${lng}`;
        // document.querySelector('.para').innerHTML = `Clicked at:${element}`;
    });
    // Create a marker at the clicked location
    let marker = L.marker([lat, lng]).addTo(map);

    // Reverse geocoding to get the address
    let geocodeAPI = 'https://nominatim.openstreetmap.org/reverse?format=json&lat=' + lat + '&lon=' + lng;

    fetch(geocodeAPI)
        .then(response => response.json())
        .then(data => {
            let address = data.display_name;
            visited.push(address);
            console.log(visited)
            const stateName = address.trim().toLowerCase().split(',');
            const latestVisited = document.getElementById('visited');
            latestVisited.innerHTML += `<p>${address}</p>`

            const states = Object.keys(singersByState);
            console.log(stateName);
            console.log(stateName[2])
            // console.log(visited);
            console.log(states);
            document.querySelector('.para').innerHTML = 'Address: ' + address;
            findSinger();

        })
        .catch(error => console.error(error));

});

function findSinger() {
    const stateName = document.querySelector('.para').innerHTML.trim().toLowerCase().split(',');
    const states = Object.keys(singersByState);
    stateName.forEach((e) => {
        let name = e.trim();
        const matchingStates = states.filter(state => state.toLowerCase().includes(name));
        console.log(matchingStates);

        if (matchingStates.length > 0) {
            // SingerName = (singersByState[matchingStates[0]]);
            // console.log(SingerName)
            // console.log(matchingStates.length);
            result.innerHTML = singersByState[matchingStates[0]]
        }
    });
}

