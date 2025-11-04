<template>
  <div class="flex justify-center gap-4 my-8 flex-wrap">
    <button
      v-for="section in sections"
      :key="section.id"
      @click="$emit('section-change', section.id)"
      :class="[
        'px-6 py-3 border-2 border-amber-500 rounded-lg cursor-pointer text-base font-semibold transition-all duration-300',
        activeSection === section.id
          ? 'bg-amber-500 text-white -translate-y-0.5 shadow-lg'
          : 'bg-white text-gray-800 hover:bg-amber-500 hover:text-white hover:-translate-y-0.5 hover:shadow-lg'
      ]"
    >
      {{ section.label }}
    </button>
  </div>
</template>

<script setup>
defineProps({
  sections: {
    type: Array,
    required: true
  },
  activeSection: {
    type: String,
    required: true
  }
})

defineEmits(['section-change'])
</script>

