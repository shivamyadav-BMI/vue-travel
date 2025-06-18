<template>
  <div class="destination">
    <h1>{{ destination.name }}</h1>
    <div class="destination-details">
      <img :src="`/images/${destination.image}`" :alt="destination.name">
      <p>{{ destination?.description }}</p>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref, watch, watchEffect } from 'vue';
import { useRoute } from 'vue-router';
import sourceData from "../../data.json";

const route = useRoute();
const destination = ref({});

const getDestination = async () => {
  const res = await fetch(`/api/${route.params.slug}.json`);
  const data = await res.json();
  destination.value = data;
};

onMounted(() => {
  getDestination();
});

// to load the destination watch the route and whenever the route slug changes get the destination
watch(() => route.params.slug, () => {
  getDestination();
})
</script>
