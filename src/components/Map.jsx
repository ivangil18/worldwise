import { useNavigate, useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useCities } from "../contexts/CitiesContext";

import styles from "./Map.module.css";
import { MapContainer, Marker, Popup, TileLayer, useMap } from "react-leaflet";

function Map() {
  const [searchParams] = useSearchParams();
  const [mapPosition, setMapPosition] = useState([40, 0]);

  const { cities, currentCity } = useCities();

  console.log(currentCity.cityName);

  const mapLat = searchParams.get("lat");
  const mapLng = searchParams.get("lng");

  useEffect(
    function () {
      if (mapLat && mapLng) setMapPosition([mapLat, mapLng]);
    },
    [mapLat, mapLng]
  );

  const navigate = useNavigate();

  return (
    <div className={styles.mapContainer}>
      <MapContainer
        center={mapPosition}
        zoom={6}
        scrollWheelZoom={true}
        className={styles.map}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png"
        />
        {cities.map((city) => (
          <Marker
            position={[city.position.lat, city.position.lng]}
            key={city.id}
          >
            <Popup>
              <span>{city.emoji} </span>{" "}
              <span>
                {city.cityName}, {city.country}
              </span>
            </Popup>
          </Marker>
        ))}
        <RelocateMap position={mapPosition} />
      </MapContainer>
    </div>
  );
}
function RelocateMap({ position }) {
  const map = useMap();
  map.setView(position);
  return null;
}

export default Map;
