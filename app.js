window.addEventListener('load', () => {
    let long;
    let lat;

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position => {
            long = position.coords.longitude;
            lat = position.coords.latitude;
            let temperatureDescription = document.querySelector('.temperature-description');
            let temperatureDegree = document.querySelector('.temperature-degree');
            let locationTimezone = document.querySelector('.location-timezone');

            const proxy = 'https://cors-anywhere.herokuapp.com/';
            const api = `${proxy}Your api here${lat},${long}`
    
            fetch(api)
                .then(response => {
                    return response.json();
                })
                .then(data => {
                    const {temperature, summary } = data.currently;
                    //set the dom elements from the api
                    temperatureDegree.textContent = temperature
                    temperatureDescription.textContent = summary;
                    locationTimezone.textContent = data.timezone;
                })
        })
    }
    
});