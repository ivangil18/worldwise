import { useNavigate, useSearchParams } from "react-router-dom";
import styles from "./Map.module.css";

function Map() {
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();
  const lat = searchParams.get("lat");
  const lng = searchParams.get("lng");

  console.log(lat, lng);

  return (
    <div className={styles.mapContainer} onClick={() => navigate("form")}>
      <h1>Position</h1>
      <p>{lat}</p>
      <p>{lng}</p>
      <button
        onClick={() => {
          setSearchParams({
            lat: 23,
            lng: 50,
          });
        }}
      >
        Update Param
      </button>
    </div>
  );
}

export default Map;
