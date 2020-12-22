window.addEventListener('load', () => {
    let long;
    let lat;

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position => {
            long = position.coords.longitude;
            lat = position.coords.latitude;


            // API not working, need to fix this:
            const api = `http://api.openweathermap.org/data/2.5/forecast?id=524901&appid=b3e811dcac5deace23e0494f7aeef804/${lat},${long}`;

            fetch(api)
                .then(response => {
                    return response.json();
                })
                .then(data => {

                })
        });
    }
});