<template>
  <div class="bg-yellow-50 border-l-4 border-lime-500 p-6 my-6 rounded">
    <h4 class="inline-flex items-center text-green-800 text-xl mb-3">
      <span class="bg-lime-500 text-white w-8 h-8 rounded-full inline-flex items-center justify-center font-bold mr-3">
        {{ step.number }}
      </span>
      {{ step.title }}
    </h4>
    <ul class="list-disc ml-8 my-4">
      <li v-for="(item, i) in step.items" :key="i" class="my-2">{{ item }}</li>
    </ul>
    <div v-if="step.tip" class="bg-blue-100 border-l-4 border-blue-500 p-4 my-4 rounded">
      <strong class="text-blue-800">💡 Tip:</strong> {{ step.tip }}
    </div>
    <div v-if="step.warning" class="bg-yellow-100 border-l-4 border-amber-500 p-4 my-4 rounded">
      <strong class="text-amber-600">{{ step.warning }}</strong>
    </div>
  </div>
</template>

<script setup>
defineProps({
  step: {
    type: Object,
    required: true
  }
})
</script>

