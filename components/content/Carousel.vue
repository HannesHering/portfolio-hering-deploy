<script setup lang="ts">
const items = [
  "https://picsum.photos/1920/1080?random=1",
  "https://picsum.photos/1920/1080?random=2",
  "https://picsum.photos/1920/1080?random=3",
  "https://picsum.photos/1920/1080?random=4",
  "https://picsum.photos/1920/1080?random=5",
  "https://picsum.photos/1920/1080?random=6",
];
</script>

<template>
  <slot />
  <div class="flex justify-center items-center">
    <UCarousel
      v-slot="{ item }"
      :items="items"
      :ui="{ item: 'basis-full' }"
      class="carousel rounded-lg overflow-hidden"
      indicators
      arrows
    >
      <img :src="item" class="w-full" draggable="false" />
    </UCarousel>
  </div>
</template>
