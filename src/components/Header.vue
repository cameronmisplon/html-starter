<template>
  <header class="bg-gradient-to-br from-amber-500 to-amber-600 text-white p-8 text-center shadow-md relative overflow-hidden">
    <img 
      :src="beeImage" 
      alt="Bee" 
      :class="[
        'h-24 w-24 object-contain absolute transition-all duration-1000',
        isFlying ? 'bee-flying' : 'bee-initial'
      ]"
    />
    <h1 class="text-4xl mb-2 drop-shadow-md relative z-10">
      BEE Mindful Pop-Up Store
    </h1>
    <p class="text-lg opacity-95 relative z-10">Assembly Manual - Portable Honeycomb Structure</p>
  </header>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import beeImage from '../assets/images/bee.png'

const isFlying = ref(false)

onMounted(() => {
  setTimeout(() => {
    isFlying.value = true
  }, 50)
})
</script>

<style scoped>
.bee-initial {
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

@keyframes flyAround {
  0% {
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) rotate(0deg);
  }
  15% {
    top: 20%;
    left: 70%;
    transform: translate(-50%, -50%) rotate(15deg);
  }
  30% {
    top: 60%;
    left: 85%;
    transform: translate(-50%, -50%) rotate(-15deg);
  }
  45% {
    top: 80%;
    left: 50%;
    transform: translate(-50%, -50%) rotate(10deg);
  }
  60% {
    top: 40%;
    left: 15%;
    transform: translate(-50%, -50%) rotate(-10deg);
  }
  75% {
    top: 15%;
    left: 30%;
    transform: translate(-50%, -50%) rotate(15deg);
  }
  100% {
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) rotate(0deg);
  }
}

.bee-flying {
  animation: flyAround 10s ease-in-out infinite;
  z-index: 5;
}
</style>

