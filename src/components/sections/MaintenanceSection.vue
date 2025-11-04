<template>
  <div>
    <h2 class="text-amber-500 text-3xl mb-6 border-b-4 border-yellow-200 pb-2">🧰 Maintenance & Care</h2>

    <h3 class="text-amber-600 text-2xl my-6">Regular Maintenance Schedule</h3>

    <div
      v-for="schedule in maintenanceSchedules"
      :key="schedule.title"
      class="bg-yellow-50 border-2 border-yellow-200 rounded-lg p-6 my-4 transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg"
    >
      <h4 class="text-amber-600 mb-3 text-xl">{{ schedule.title }}</h4>
      <ul class="list-disc ml-8 my-4">
        <li v-for="(item, i) in schedule.items" :key="i" class="my-2">{{ item }}</li>
      </ul>
    </div>

    <h3 class="text-amber-600 text-2xl my-6">Troubleshooting Common Issues</h3>

    <table class="w-full border-collapse my-6 bg-white">
      <thead>
        <tr>
          <th class="bg-amber-500 text-white p-4 text-left font-semibold">Problem</th>
          <th class="bg-amber-500 text-white p-4 text-left font-semibold">Cause</th>
          <th class="bg-amber-500 text-white p-4 text-left font-semibold">Solution</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="issue in troubleshootingIssues"
          :key="issue.problem"
          class="hover:bg-yellow-50"
        >
          <td class="p-4 border-b border-yellow-200">{{ issue.problem }}</td>
          <td class="p-4 border-b border-yellow-200">{{ issue.cause }}</td>
          <td class="p-4 border-b border-yellow-200">{{ issue.solution }}</td>
        </tr>
      </tbody>
    </table>

    <h3 class="text-amber-600 text-2xl my-6">Weather Protection</h3>

    <div
      v-for="weather in weatherConditions"
      :key="weather.title"
      class="bg-yellow-50 border-2 border-yellow-200 rounded-lg p-6 my-4 transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg"
    >
      <h4 class="text-amber-600 mb-3 text-xl">{{ weather.title }}</h4>
      <ul class="list-disc ml-8 my-4">
        <li v-for="(item, i) in weather.items" :key="i" class="my-2">{{ item }}</li>
      </ul>
    </div>

    <div class="bg-yellow-100 border-l-4 border-amber-500 p-4 my-4 rounded">
      <strong class="text-amber-600">⚠️ Weather Warning:</strong> This pop-up structure is designed for calm to moderate weather conditions. In severe weather (high winds, heavy rain, storms), disassemble immediately and seek proper shelter.
    </div>

    <div class="bg-blue-100 border-l-4 border-blue-500 p-4 my-4 rounded">
      <strong class="text-blue-800">💡 Documentation Tip:</strong> Keep a maintenance log noting each setup/breakdown date, any issues encountered, and repairs made. This helps track component lifespan and identify patterns.
    </div>

    <h3 class="text-amber-600 text-2xl my-6">Safety Reminders</h3>

    <div class="bg-yellow-100 border-l-4 border-amber-500 p-4 my-4 rounded">
      <strong class="text-amber-600">Always prioritize safety:</strong>
      <ul class="list-disc ml-6 mt-2">
        <li class="my-2">Never work alone - minimum 2 people required</li>
        <li class="my-2">Inspect all components before each assembly</li>
        <li class="my-2">Don't use damaged components</li>
        <li class="my-2">Keep assembly area clear of bystanders</li>
        <li class="my-2">Use proper lifting techniques to avoid injury</li>
        <li class="my-2">Wear appropriate safety gear (gloves, closed-toe shoes)</li>
        <li class="my-2">Stop immediately if weather deteriorates</li>
        <li class="my-2">Never compromise on latch engagement - all must be fully secured</li>
      </ul>
    </div>

    <h3 class="text-amber-600 text-2xl my-6">Contact & Support</h3>

    <p class="mb-4">For questions about assembly, maintenance, or replacement parts for your BEE Mindful pop-up store, please contact the campaign coordinators or structure manufacturer.</p>

    <div class="bg-blue-100 border-l-4 border-blue-500 p-4 my-4 rounded">
      <strong class="text-blue-800">📸 Visual Documentation:</strong> Take photos during your first assembly to create a visual reference guide for your team. This helps speed up future setups and provides training material for new team members.
    </div>
  </div>
</template>

<script setup>
import {
  maintenanceSchedules,
  cleaningInstructions,
  hardwareMaintenance,
  troubleshootingIssues,
  weatherConditions
} from '../../data/manualData.js'
</script>

