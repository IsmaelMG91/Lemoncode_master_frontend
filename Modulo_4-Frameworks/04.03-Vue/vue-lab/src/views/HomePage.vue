<script setup lang="ts">
import { useDaysStore } from '@/stores/weekdays';
import { useRouter, RouterView } from 'vue-router';
import DayCard from '@/components/DayCard.vue';

const router = useRouter()

const daysStore = useDaysStore();

//Envía a una ruta nueva con el nombre del día y con el router configurado abre el modal
const handleCardClick = (dayId: string) => {
  router.push(`/menu/${dayId}`)
}
</script>

<template>
  <div class="min-h-screen bg-dark-bg">
    <main>
      <div v-if="daysStore.days.length"
      class="mx-2 my-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-7 gap-4"
      >
        <DayCard
          v-for="day in daysStore.days"
          :key="day.id"
          :day="day"
          @click = "handleCardClick(day.id)"
          />
      </div>
    </main>
    <RouterView/>
  </div>
</template>