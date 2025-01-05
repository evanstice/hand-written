import './App.css';
import { useJsApiLoader, GoogleMap } from '@react-google-maps/api';

function App() {
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
  })
  const center = { lat: 37.7749, lng: -122.4194 };

  if (!isLoaded) {
    return <>Not loaded</>
  }

  return (
    <div className="map-wrapper">
      <GoogleMap
      center={center}
      zoom={10}
      mapContainerStyle={{ width: '100%', height: '100%' }}
      options={{
        zoomControl: false,
        streetViewControl: false,
        mapTypeControl: false,
        fullscreenControl: false
      }}
      />
    </div>
  );
}

export default App;
