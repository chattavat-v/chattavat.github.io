import React from "react";
import PropTypes from "prop-types";
import GoogleMapReact from "google-map-react";
import { MapArea, Marker } from "./MapStyle";

const MapComp = ({ latitude, longitude }) => {
	const defaultLocation = {
		center: {
			lat: latitude,
			lng: longitude,
		},
		zoom: 15,
	};

	const AnyReactComponent = () => <Marker></Marker>;

	return (
		<MapArea>
			<GoogleMapReact
				bootstrapURLKeys={{ key: "" }}
				defaultCenter={defaultLocation.center}
				defaultZoom={defaultLocation.zoom}
			>
				<AnyReactComponent
					lat={defaultLocation.center.lat}
					lng={defaultLocation.center.lng}
				/>
			</GoogleMapReact>
		</MapArea>
	);
};

MapComp.propTypes = {
	latitude: PropTypes.number.isRequired,
	longitude: PropTypes.number.isRequired,
};

export default MapComp;
