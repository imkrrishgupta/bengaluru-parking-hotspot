export const MAP_CONFIG = {
  center: [
    Number(import.meta.env.VITE_MAP_LAT) || 12.9716,
    Number(import.meta.env.VITE_MAP_LNG) || 77.5946,
  ],
  zoom: Number(import.meta.env.VITE_MAP_ZOOM) || 11,
  tileLayerUrl: import.meta.env.VITE_TILE_LAYER_URL || "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
  attribution: import.meta.env.VITE_TILE_LAYER_ATTRIBUTION || "&copy; OpenStreetMap contributors",
};
