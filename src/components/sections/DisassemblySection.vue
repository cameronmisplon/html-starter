<template>
  <div>
    <h2 class="text-amber-500 text-3xl mb-6 border-b-4 border-yellow-200 pb-2">📤 Disassembly Instructions</h2>

    <p class="mb-4">Disassembly follows the reverse order of assembly. Take your time to protect components during breakdown.</p>

    <div class="bg-yellow-100 border-l-4 border-amber-500 p-4 my-4 rounded">
      <strong class="text-amber-600">⚠️ Important:</strong> Never rush disassembly. Damaged components are difficult to replace and may compromise future setups.
    </div>

    <StepCard
      v-for="step in disassemblySteps"
      :key="step.number"
      :step="step"
    />

    <div class="bg-blue-100 border-l-4 border-blue-500 p-4 my-4 rounded">
      <strong class="text-blue-800">💡 Transport Tip:</strong> Stack components carefully in the transport vehicle with heavier items on the bottom. The folded floor and roof panels should be transported flat to prevent warping.
    </div>
  </div>
</template>

<script setup>
import { disassemblySteps } from '../../data/manualData.js'
import StepCard from './StepCard.vue'
</script>

