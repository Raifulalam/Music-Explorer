const singersByState = {
    "Maharashtra": [
        "Lata Mangeshkar",
        "Asha Bhosle",
        "Sonu Nigam",
        "Shreya Ghoshal"
    ],
    "Madhya Pradesh": [
        "Kishore Kumar"
    ],
    "Punjab": [
        "Mohammad Rafi",
        "Guru Randhawa"
    ],
    "West Bengal": [
        "Arijit Singh",
        "Shreya Ghoshal"
    ],
    "Haryana": [
        "Sonu Nigam"
    ],
    "Bihar": [
        "Udit Narayan"
    ],
    "Himachal Pradesh": [
        "Neha Kakkar"
    ],
    "Delhi": [
        "Sunidhi Chauhan",
        "Badshah"
    ],
    "Rajasthan": [
        "Javed Ali"
    ],
    "Uttar Pradesh": [
        "raiful"
    ],
    // Note: Rahat Fateh Ali Khan is from Pakistan and not included in this list.
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

