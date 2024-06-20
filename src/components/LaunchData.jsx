import './LaunchData.css'

export const LaunchData = ({launch}) => {

    return (
        <div className="launch-container">
            <h2>{launch.name}</h2>
            <img src={launch.image} alt="" />
            <div className="launch-details">
                <p>Detalles: </p>
                <p>{launch.details}</p>
                <p>Fallos: </p>
                <p>{launch.failures}</p>
                <p>Nº de vuelo: </p>
                <p>{launch.flight_number}</p>
                <p>Fecha: </p>
                <p>{launch.date_utc}</p>
            </div>
        </div>
    )
}