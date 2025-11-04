<template>
  <div class="bg-yellow-200 h-2 rounded mb-4 overflow-hidden">
    <div
      class="bg-amber-500 h-full transition-all duration-500"
      :style="{ width: percentage + '%' }"
    ></div>
  </div>
</template>

<script setup>
defineProps({
  percentage: {
    type: Number,
    required: true
  }
})
</script>

