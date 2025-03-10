function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}

const container = document.querySelector(".services-container");
const items = Array.from(document.querySelectorAll(".service-item"));

function scrollCarousel(direction) {
    if (direction === 1) {
        container.appendChild(container.firstElementChild);
    } else {
        container.prepend(container.lastElementChild);
    }
}
document.getElementById('sosButton').addEventListener('click', function() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(sendSOS, showError);
    } else {
        alert("Geolocation is not supported by this browser.");
    }
});

function sendSOS(position) {
    let latitude = position.coords.latitude;
    let longitude = position.coords.longitude;
    
    let message = `SOS! I need help. My location: https://www.google.com/maps?q=${latitude},${longitude}`;
    
    document.getElementById("status").innerHTML = "SOS Alert Sent!";
    alert(message);
}

function showError(error) {
    let status = document.getElementById("status");
    switch(error.code) {
        case error.PERMISSION_DENIED:
            status.innerHTML = "User denied the request for Geolocation.";
            break;
        case error.POSITION_UNAVAILABLE:
            status.innerHTML = "Location information is unavailable.";
            break;
        case error.TIMEOUT:
            status.innerHTML = "The request to get user location timed out.";
            break;
        case error.UNKNOWN_ERROR:
            status.innerHTML = "An unknown error occurred.";
            break;
    }
}