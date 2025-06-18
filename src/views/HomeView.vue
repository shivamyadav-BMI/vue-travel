<template>
  <main class="home">
    <h1>All Destinations</h1>
    <div class="destinations">
      <RouterLink v-for="destination in destinations" :key="destination.id"
        :to="{ name: 'destination.show', params: { id: destination.id, slug: destination.slug } }">
        <h2>{{ destination.name }}</h2>
        <img :src="`/images/${destination.image}`" :alt="destination.name">
      </RouterLink>
    </div>
  </main>
</template>

<script setup>
import sourceData from "../../data.json";
import { ref } from "vue"

const destinations = ref(sourceData.destinations);

</script>
