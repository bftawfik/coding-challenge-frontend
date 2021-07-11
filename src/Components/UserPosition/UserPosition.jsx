import { compose, withProps } from "recompose";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
} from "react-google-maps";

import classes from "./UserPosition.module.scss";

const defaultProps = {
  googleMapURL:
    "https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places",
  loadingElement: <div style={{ height: `100%` }} />,
  containerElement: (
    <div className={classes.UserPosition} style={{ height: `400px` }} />
  ),
  mapElement: <div style={{ height: `100%` }} />,
  defaultCenter: { lat: -34.397, lng: 150.644 },
  defaultZoom: 3,
  markerZoom: 8,
};

const UserPosition = ({
  markerData,
  defaultCenter,
  defaultZoom,
  markerZoom,
}) => (
  <GoogleMap
    defaultZoom={defaultZoom}
    defaultCenter={defaultCenter}
    center={markerData || defaultCenter}
    zoom={markerData ? markerZoom : defaultZoom}
  >
    {markerData && <Marker position={markerData} />}
  </GoogleMap>
);

export default compose(
  withProps(defaultProps),
  withScriptjs,
  withGoogleMap
)(UserPosition);
