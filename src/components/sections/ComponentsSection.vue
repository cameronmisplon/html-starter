<template>
  <div>
    <h2 class="text-amber-500 text-3xl mb-6 border-b-4 border-yellow-200 pb-2">📦 Components List</h2>

    <h3 class="text-amber-600 text-2xl my-6">Structural Components</h3>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-6">
      <div
        v-for="component in structuralComponents"
        :key="component.title"
        class="bg-yellow-50 border-2 border-yellow-200 rounded-lg p-6 transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg"
      >
        <h4 class="text-amber-600 mb-3 text-xl">{{ component.title }}</h4>
        <p class="mb-2"><strong>Material:</strong> {{ component.material }}</p>
        <p class="mb-2"><strong>Quantity:</strong> {{ component.quantity }}</p>
        <p class="mb-2"><strong>Dimensions:</strong> {{ component.dimensions }}</p>
        <p class="mb-2"><strong>Features:</strong> {{ component.features }}</p>
        <p class="mb-2"><strong>Notes:</strong> {{ component.notes }}</p>
      </div>
    </div>

    <h3 class="text-amber-600 text-2xl my-6">Connection Hardware</h3>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
      <div
        v-for="hardware in connectionHardware"
        :key="hardware.title"
        class="bg-yellow-50 border-2 border-yellow-200 rounded-lg p-6 transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg"
      >
        <h4 class="text-amber-600 mb-3 text-xl">{{ hardware.title }}</h4>
        <p class="mb-2"><strong>Quantity:</strong> {{ hardware.quantity }}</p>
        <p class="mb-2"><strong>Purpose:</strong> {{ hardware.purpose }}</p>
        <p class="mb-2"><strong>Features:</strong> {{ hardware.features }}</p>
        <p v-if="hardware.location" class="mb-2"><strong>Location:</strong> {{ hardware.location }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { structuralComponents, connectionHardware } from '../../data/manualData.js'
</script>

