import { MapContainer, TileLayer, CircleMarker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import HotspotPopup from './HotspotPopup';
import { MAP_CONFIG } from '../../utils/mapHelpers.js';

const RISK_COLORS = {
  Critical: '#ef4444',
  CRITICAL: '#ef4444',
  High: '#f97316',
  HIGH: '#f97316',
  Moderate: '#eab308',
  MODERATE: '#eab308',
  Medium: '#eab308',
  Low: '#00d992',
  LOW: '#00d992',
};

function getRiskColor(risk) {
  return RISK_COLORS[risk] || '#00d992';
}

export default function HotspotMap({ hotspots }) {
  return (
    <MapContainer
      center={[MAP_CONFIG.center[0], MAP_CONFIG.center[1]]}
      zoom={MAP_CONFIG.zoom}
      style={{ height: '700px', width: '100%' }}
    >
      <TileLayer
        attribution={MAP_CONFIG.attribution}
        url={MAP_CONFIG.tileLayerUrl}
      />

      {hotspots.map((hotspot, index) => {
        if (!hotspot.cell_lat || !hotspot.cell_lon) return null;
        const color = getRiskColor(hotspot.congestion_risk_category);
        return (
          <CircleMarker
            key={index}
            center={[hotspot.cell_lat, hotspot.cell_lon]}
            radius={8}
            pathOptions={{
              color: color,
              fillColor: color,
              fillOpacity: 0.75,
              weight: 1.5,
            }}
          >
            <Popup>
              <HotspotPopup hotspot={hotspot} />
            </Popup>
          </CircleMarker>
        );
      })}
    </MapContainer>
  );
}
