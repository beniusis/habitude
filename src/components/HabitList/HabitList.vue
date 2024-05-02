<template>
  <div class="flex flex-col items-center justify-center gap-5">
    <div v-if="habits.length > 0"></div>
    <div v-else class="text-3xl text-primary">Currently there are no habits in the list!</div>
  </div>
</template>

<script setup>
defineProps({
  habits: {
    type: Array,
    default: () => []
  }
});
</script>
