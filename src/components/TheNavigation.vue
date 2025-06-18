<template>
  <div id="nav">
    <RouterLink id="logo" to="/">Vue Travel tour</RouterLink>
    <RouterLink v-for="destination in destinations" :key="destination.id"
      :to="{ name: 'destination.show', params: { id: destination.id, slug: destination.slug } }">
      {{ destination.name }}
    </RouterLink>
  </div>
</template>

<script setup>
import { RouterLink } from 'vue-router';
import sourceData from "../../data.json";

const destinations = sourceData.destinations;

</script>
