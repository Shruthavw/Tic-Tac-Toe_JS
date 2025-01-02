let map, marker;
let selectedLatLng;

function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        center: { lat: 51.505, lng: -0.09 },
        zoom: 13
    });

    map.addListener('click', function(e) {
        const { latLng } = e;
        const lat = latLng.lat();
        const lng = latLng.lng();
        selectedLatLng = { lat, lng };

        if (marker) {
            marker.setMap(null);
        }

        marker = new google.maps.Marker({
            position: { lat, lng },
            map: map
        });

        document.getElementById('location').innerHTML = `Latitude: ${lat} <br> Longitude: ${lng}`;
    });
}

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById('saveButton').addEventListener('click', function() {
        if (!selectedLatLng) {
            alert("Please select a location on the map first.");
            return;
        }

        fetch('http://localhost:3000/chargers', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                latitude: selectedLatLng.lat,
                longitude: selectedLatLng.lng
            })
        })
        .then(response => response.json())
        .then(data => {
            alert('Location saved successfully!');
            console.log('Success:', data);
        })
        .catch((error) => {
            console.error('Error:', error);
        });
    });
});
