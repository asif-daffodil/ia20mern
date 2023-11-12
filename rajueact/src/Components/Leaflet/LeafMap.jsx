// Import react-leaftlet css
import 'leaflet/dist/leaflet.css';

import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

const LeafMap = () => {
    const position = [23.73978335274449, 90.37130352910593]
    return (
        <>
            <MapContainer center={position} zoom={13} scrollWheelZoom={false} style={{height: "60vh", width: "100%"}}>
                <TileLayer
                    attribution='&copy; contributors'
                    url="https://maps.wikimedia.org/osm-intl/{z}/{x}/{y}{r}.png"
                />
                <Marker position={position}>
                    <Popup>
                        A pretty CSS3 popup. <br /> Easily customizable.
                    </Popup>
                </Marker>
            </MapContainer>,
        </>
    );
};

export default LeafMap;