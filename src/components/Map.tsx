import { GoogleMap, LoadScript } from "@react-google-maps/api";

const center = {
  lat: -1.9605768466377085,
  lng: 30.086692422407264,
};

export default function Map() {
  return (
    <div className="w-100% h-[300px] sm:h-[400px] md:h-[500px] lg:h-[620px]  rounded-xl overflow-hidden">
      <LoadScript googleMapsApiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY}>
        <GoogleMap
          mapContainerStyle={{ width: "100%", height: "100%" }}
          center={center}
          zoom={12}
        />
      </LoadScript>
    </div>
  );
}
