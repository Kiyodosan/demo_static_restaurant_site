import { useState } from 'react';
import {
  APIProvider,
  Map,
  AdvancedMarker,
  Pin,
  InfoWindow
} from '@vis.gl/react-google-maps';

const Maps_API = () => {
  const position = { lat: -180, lng: -180 };
  const [open, setOpen] = useState(false);

  return (
    <APIProvider apiKey={process.env.Google_Maps_API_KEY}>
      {/* height is required, but width is not. height must be greater than 0 to show the map */}
      <div style={{ height: "100vh", width: "100%" }}>
        {/* use a mapID from the Google API & Services page to style your map. add the mapID within the Map component, like shown with zoom and center */}
        <Map zoom={9} center={position}>
          {/* AdvancedMarker provides the default Google Maps pin */}
          <AdvancedMarker position={position} onClick={() => setOpen(true)}>
            {/* The Pin component allows for styling the Google Maps pin */}
            <Pin background={"green"} borderColor={"black"} glyphColor={"white"} />
          </AdvancedMarker>

          {/* InfoWindow creates a modal that provides more information about the pin */}
          {open && (
            <InfoWindow position={position} onCloseClick={() => setOpen(false)}>
              <p>This is your location</p>
            </InfoWindow>
          )}
        </Map>
      </div>
    </APIProvider>
  )
}

export default Maps_API