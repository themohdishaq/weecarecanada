"use client";

import { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";

import markerIcon2x from "leaflet/dist/images/marker-icon-2x.png";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";

delete (L.Icon.Default.prototype as any)._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl: markerIcon2x.src,
  iconUrl: markerIcon.src,
  shadowUrl: markerShadow.src,
});

// 203 Max Becker Drive, Kitchener, Ontario
const officeLocation: [number, number] = [43.4006, -80.4569];

export default function OfficeMap() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return <div className="h-full w-full bg-gray-100 flex items-center justify-center">Loading map...</div>;

  return (
    <MapContainer
      center={officeLocation}
      zoom={15}
      scrollWheelZoom={false}
      className="h-full w-full relative z-10"
      style={{ zIndex: 10 }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={officeLocation}>
        <Popup>
          <div>
            <strong>WeeCare Canada</strong>
            <br />
            203 Max Becker Drive
            <br />
            Kitchener, Ontario N2E 4G2
          </div>
        </Popup>
      </Marker>
    </MapContainer>
  );
}
