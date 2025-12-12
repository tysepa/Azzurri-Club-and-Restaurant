import { GoogleMap, LoadScript } from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "400px",
};

const center = {
  lat: -1.9605768466377085, // Example: Kigali
  lng:30.086692422407264,
  
};

export default function Map() {
  return (
    <LoadScript googleMapsApiKey=" 5127-7231-9256">
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={12} />
    </LoadScript>
  );
}
