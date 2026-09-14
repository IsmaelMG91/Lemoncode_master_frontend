<script setup lang="ts">
import type { Day } from "@/types";
import { computed } from "vue"
const {day} = defineProps<{
  day: Day;
}>();

const previewText = computed(() => "")
</script>

<template>
  <div
    class="bg-dark-card border border-dark-border rounded-lg p-4 hover:bg-dark-hover cursor-pointer transition-all duration-200 hover:shadow-lg hover:shadow-black/20"
  >
    <h3 class="text-lg font-semibold text-white mb-2 truncate">
      {{ day.name }}
    </h3>

    <div class="text-sm text-gray-400 whitespace-pre-line line-clamp-4 mb-3 font-mono">
      {{ previewText }}
    </div>
  </div>
</template>