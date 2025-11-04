<template>
  <div class="min-h-screen bg-gradient-to-br from-yellow-100 via-yellow-50 to-yellow-50 text-gray-800 font-sans leading-relaxed">
    <Header />
    
    <!-- Honeycomb pattern on sides -->
    <div class="honeycomb-pattern-left" :style="{ backgroundImage: `url(${honeycombImage})` }"></div>
    <div class="honeycomb-pattern-right" :style="{ backgroundImage: `url(${honeycombImage})` }"></div>
    
    <div class="max-w-6xl mx-auto px-8 py-8 relative z-10">
      <Navigation
        :sections="sections"
        :activeSection="activeSection"
        @section-change="showSection"
      />
      
      <ProgressBar :percentage="progressPercentage" />

      <SectionWrapper
        v-for="section in sections"
        :key="section.id"
        :is-active="activeSection === section.id"
      >
        <OverviewSection v-if="section.id === 'overview'" />
        <ComponentsSection v-if="section.id === 'components'" />
        <ToolsSection v-if="section.id === 'tools'" />
        <AssemblySection v-if="section.id === 'assembly'" />
        <DisassemblySection v-if="section.id === 'disassembly'" />
        <MaintenanceSection v-if="section.id === 'maintenance'" />
      </SectionWrapper>
    </div>

    <Footer />
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { sections } from './data/manualData.js'
import honeycombImage from './assets/images/honeycomb.png'
import Header from './components/Header.vue'
import Navigation from './components/Navigation.vue'
import ProgressBar from './components/ProgressBar.vue'
import SectionWrapper from './components/SectionWrapper.vue'
import Footer from './components/Footer.vue'
import OverviewSection from './components/sections/OverviewSection.vue'
import ComponentsSection from './components/sections/ComponentsSection.vue'
import ToolsSection from './components/sections/ToolsSection.vue'
import AssemblySection from './components/sections/AssemblySection.vue'
import DisassemblySection from './components/sections/DisassemblySection.vue'
import MaintenanceSection from './components/sections/MaintenanceSection.vue'

const activeSection = ref('overview')

const progressPercentage = computed(() => {
  const index = sections.findIndex(s => s.id === activeSection.value)
  return ((index + 1) / sections.length) * 100
})

function showSection(sectionId) {
  activeSection.value = sectionId
  window.scrollTo({ top: 0, behavior: 'smooth' })
}
</script>

<style scoped>
.honeycomb-pattern-left,
.honeycomb-pattern-right {
  position: fixed;
  top: 200px; /* Start below header */
  bottom: 0;
  width: 200px;
  opacity: 0.2;
  pointer-events: none;
  z-index: 1;
  background-size: 200px auto;
  background-repeat: repeat-y;
  background-position: top center;
}

.honeycomb-pattern-left {
  left: 0;
}

.honeycomb-pattern-right {
  right: 0;
}

/* Responsive: hide on smaller screens */
@media (max-width: 1024px) {
  .honeycomb-pattern-left,
  .honeycomb-pattern-right {
    display: none;
  }
}
</style>
