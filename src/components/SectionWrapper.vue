<template>
  <div
    v-show="isActive"
    class="bg-white rounded-xl p-8 mb-8 shadow-lg animate-fade-in"
  >
    <slot />
  </div>
</template>

<script setup>
defineProps({
  isActive: {
    type: Boolean,
    required: true
  }
})
</script>

<style scoped>
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in {
  animation: fadeIn 0.5s;
}
</style>

