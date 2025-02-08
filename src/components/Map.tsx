'use client';

import { useEffect, useRef } from 'react';
import { MapContainer, TileLayer, Marker, Popup, Polyline, useMap, useMapEvents } from 'react-leaflet';
import { useVoyageStore } from '../store/voyage';
import { fetchRoute } from '../services/osrm';
import { reverseGeocode } from '../services/geocoding';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Fix Leaflet default icon issue
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png",
  iconUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
  shadowUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
});

// Component to handle map center updates
function MapController() {
  const map = useMap();
  const center = useVoyageStore((state) => state.center);
  
  useEffect(() => {
    if (center) {
      map.setView(center, map.getZoom());
    }
  }, [center, map]);

  // Handle Shift+Click for reverse geocoding
  useMapEvents({
    click: async (e) => {
      if (e.originalEvent.shiftKey) {
        const { lat, lng } = e.latlng;
        const address = await reverseGeocode(lat, lng);
        if (address) {
          alert(`Lieu trouvé :\n${address}`);
        }
      }
    },
  });

  return null;
}

export default function Map() {
  const { currentDay, selectedVoyage } = useVoyageStore();
  const trip = selectedVoyage?.days[currentDay];
  const routeRef = useRef<L.Polyline>();
  const mapRef = useRef<L.Map>();

  useEffect(() => {
    async function updateRoute() {
      if (!mapRef.current || !trip) return;

      if (routeRef.current) {
        routeRef.current.remove();
      }

      const points = trip.points.map(p => p.position);
      const routeData = await fetchRoute(points, trip.transport);

      if (routeData && routeData.coordinates.length > 0) {
        // Create route polyline
        routeRef.current = L.polyline(routeData.coordinates, {
          color: trip.transport === 'foot' ? 'green' : 'blue',
          weight: 3,
          opacity: 0.7
        }).addTo(mapRef.current);

        // Add route info popup
        const duration = Math.round(routeData.duration / 60); // Convert to minutes
        const distance = Math.round(routeData.distance / 100) / 10; // Convert to km with 1 decimal
        const popup = L.popup()
          .setLatLng(routeData.coordinates[Math.floor(routeData.coordinates.length / 2)])
          .setContent(`
            <div style="text-align: center;">
              <strong>Trajet ${trip.transport === 'foot' ? 'à pied' : 'en voiture'}</strong><br>
              Distance : ${distance} km<br>
              Durée estimée : ${duration} minutes
            </div>
          `);
        routeRef.current.bindPopup(popup);

        // Fit bounds
        const bounds = L.latLngBounds(routeData.coordinates);
        mapRef.current.fitBounds(bounds, { padding: [50, 50] });
      }
    }

    updateRoute();
  }, [trip]);

  return (
    <MapContainer
      center={trip?.points[0].position}
      zoom={13}
      style={{ height: "calc(100vh - 120px)", width: "100%", borderRadius: "8px", overflow: "hidden" }}
      ref={mapRef as any}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {trip?.points.map((point) => (
        <Marker key={point.id} position={point.position}>
          <Popup>
            <div style={{ maxWidth: "300px" }}>
              <h3 style={{ margin: "0 0 8px 0" }}>{point.name}</h3>
              <p style={{ margin: "0 0 8px 0", color: "#666" }}>{point.description}</p>
              <p style={{ margin: "0 0 12px 0", fontSize: "14px" }}>
                Arrivée : <strong>{point.arrival}</strong> - Départ : <strong>{point.departure}</strong>
              </p>
              {point.photos.map((photo, index) => (
                <img
                  key={index}
                  src={photo}
                  alt={point.name}
                  style={{ 
                    width: "100%", 
                    height: "200px", 
                    objectFit: "cover", 
                    marginBottom: "8px",
                    borderRadius: "4px"
                  }}
                />
              ))}
            </div>
          </Popup>
        </Marker>
      ))}
      <MapController />
    </MapContainer>
  );
}
