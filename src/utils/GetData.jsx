
export const getData = async() => {
    try {
        const url = `https://api.spacexdata.com/v5/launches`;
        const resp = await fetch(url);

        if (!resp.ok) {
            throw new Error(`Fallo en la petición ${resp.status}`);
        }

        const data = await resp.json();
        const launches = data.map(launch => ({
            id: launch.id,
            name: launch.name,
            image: launch.links.patch?.small,
            details: launch.details,
            failures: launch.failures[0]?.reason,
            flight_number: launch.flight_number,
            date_utc: launch.date_utc
        }));

        return launches;
    } catch (error) {
        console.error('Error:', error);
    }
    
};

