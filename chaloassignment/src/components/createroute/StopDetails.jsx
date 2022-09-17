const StopDetails = ({ stopId, stopName, latitude, longitude }) => {

    const enterStopId = (e) => {
        setStopId()
    }

    return <div>
        <input type="text" placeholder="Enter Stop Id" value={stopId} onChange={enterStopId} />
        <input type="text" placeholder="Enter Stop Name" value={stopName} onChange={enterStopName} />
        <input type="text" placeholder="Enter Latitude" value={latitude} onChange={enterLatitude} />
        <input type="text" placeholder="Enter Longitude" value={longitude} onChange={enterLongitude} />
    </div>
}

export default StopDetails