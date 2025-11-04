<template>
  <div>
    <h2 class="text-amber-500 text-3xl mb-6 border-b-4 border-yellow-200 pb-2">🔨 Step-by-Step Assembly</h2>

    <div class="bg-yellow-100 border-l-4 border-amber-500 p-4 my-4 rounded">
      <strong class="text-amber-600">⚠️ Team Assembly Required:</strong> This structure requires 2-3 people. Never attempt solo assembly as panels are large and could cause injury if they fall.
    </div>

    <StepCard
      v-for="step in assemblySteps"
      :key="step.number"
      :step="step"
    />

    <div class="bg-yellow-100 border-l-4 border-amber-500 p-4 my-4 rounded">
      <strong class="text-amber-600">✅ Assembly Complete!</strong> Your BEE Mindful pop-up store is now ready for business. Remember to periodically check all latches during the day, especially if there are weather changes or high foot traffic.
    </div>
  </div>
</template>

<script setup>
import { assemblySteps } from '../../data/manualData.js'
import StepCard from './StepCard.vue'
</script>

