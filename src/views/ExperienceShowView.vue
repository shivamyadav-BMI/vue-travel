<template>
  <h1>{{ experience.name }}</h1>
  <img :src="`/images/${experience.image}`" :alt="experience.name">
  <p>{{ experience.description }}</p>
</template>

<script setup>
import { computed, ref } from "vue";
import data from "../../data.json";

const props = defineProps({
  id: {
    type: String,
    required: true
  },
  experienceSlug: {
    type: String,
    required: true
  },

})

// const experience = ref({});
const destination = computed(() => {
  return data.destinations.find((dest) => dest.id == props.id)
});

const experience = computed(() => destination.value.experiences.find((exp) => exp.slug == props.experienceSlug));
</script>
