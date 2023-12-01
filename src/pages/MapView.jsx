import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { useSelector } from "react-redux";
import icon from "../assets/plane.png";
import L from "leaflet";

const MapView = ({ openModal }) => {
  const store = useSelector((store) => store);

  const planeIcon = L.icon({
    iconUrl: icon,
    iconSize: [30, 30],
    iconAnchor: [20, 20],
  });

  return (
    <div>
      <MapContainer
        center={[52.37392, 9.735603]}
        zoom={6}
        scrollWheelZoom={true}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {/* for every flight put a marker */}
        {store.flights.map((flight) => (
          <Marker
            icon={planeIcon}
            key={flight.id}
            position={[flight.lat, flight.lng]}
          >
            <Popup>
              <div className="popup">
                <span>Code:{flight.code}</span>
                <button
                  onClick={() => openModal(flight.id)}
                  className="btn btn-dark"
                >
                  Detail
                </button>
              </div>
            </Popup>
          </Marker>
        ))}
        ;
      </MapContainer>
    </div>
  );
};

export default MapView;
