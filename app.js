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
            const api = `${proxy}https://api.darksky.net/forecast/97079ff020d139a832571eb3679b3f62/${lat},${long}`
    
            fetch(api)
                .then(response => {
                    return response.json();
                })
                .then(data => {
                    const {temperature, summary, icon } = data.currently;
                    //set the dom elements from the api
                    temperatureDegree.textContent = temperature
                    temperatureDescription.textContent = summary;

                    locationTimezone.textContent = data.timezone;
 

                    setIcons(icon,document.querySelector('.icon'))
                })
        })
    }

    function setIcons(icon, iconID){
        const skycons = new Skycons({color: "white"})
        const currentIcon = icon.replace(/-/g, "_").toUpperCase();
        skycons.play();
        return skycons.set(iconID,Skycons[currentIcon]);
        
    }
    
});


            // const proxy = 'https://cors-anywhere.herokuapp.com/';
            // const api = `${proxy}https://api.darksky.net/forecast/97079ff020d139a832571eb3679b3f62/${lat},${long}`

