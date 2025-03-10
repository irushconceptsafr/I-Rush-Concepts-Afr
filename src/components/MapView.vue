<template>
    <l-map :zoom="zoom" :center="center" style="height: 400px; width: 100%;">
      <!-- Tile Layer (OpenStreetMap) -->
      <l-tile-layer 
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" 
        attribution="&copy; OpenStreetMap contributors">
      </l-tile-layer>
  
      <!-- Marker -->
      <l-marker :lat-lng="markerPosition">
        <l-popup>Nairobi, Kenya</l-popup>
      </l-marker>
    </l-map>
  </template>
  
  <script setup>
  import "leaflet/dist/leaflet.css"; // Import Leaflet styles
  import { LMap, LTileLayer, LMarker, LPopup } from "@vue-leaflet/vue-leaflet";
  import { ref } from "vue";
  
  // Define reactive data
  const center = ref([-1.286389, 36.817223]); // Nairobi, Kenya
  const zoom = ref(13);
  const markerPosition = ref([-1.286389, 36.817223]);
  </script>
  