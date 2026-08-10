<script setup lang="ts">

import { computed, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useDaysStore } from '@/stores/weekdays.ts'
import type { Menu, MenuType } from '@/types/index.ts'
import MenuItem from './MenuItem.vue'
import IconClose from './icons/IconClose.vue'
import IconPlus from './icons/IconPlus.vue'

const route = useRoute()
const router = useRouter()
const daysStore = useDaysStore()
const dayId = computed(() => route.params.day as string)


const newMenuTitle = ref("");
const newMenuType = ref<MenuType>("breakfast");
const isAddingMenu = ref(false);

const menuTypes = computed(()=> {
  const menusByType = {
    breakfast: [] as Menu[],
    lunch: [] as Menu[],
    dinner: [] as Menu[],
  }

  menus.value?.forEach(menu => {
    menusByType[menu.type].push(menu)
  })

  return menusByType
})

//Title

const title = computed(() => {
  return daysStore.fetchDayItem(dayId.value)?.name ?? "Día de la semana"

})
const menus = computed(() => {
  return daysStore.fetchDayItem(dayId.value)?.menu
})

const closeModal = () => {
  document.startViewTransition(() => router.push('/'))
}

//Permite crear menú nuevo
const handleCreateMenu = () => {
  isAddingMenu.value = true;
}

//Añade menú
const handleAddMenu = () => {

  if (!newMenuTitle.value.trim()) {
    isAddingMenu.value = false;
    return
  }
  console.log("New menu created")
  daysStore.createMenu(dayId.value, newMenuTitle.value, newMenuType.value)
  newMenuTitle.value = "";
  newMenuType.value = "breakfast";
  isAddingMenu.value = false;
}

//Elimina menú
const handleDeleteMenu = (menuId: string) => {
  console.log("Menu deleted")
  daysStore.deleteMenu(dayId.value, menuId)
}

</script>

<template>
  <div
    v-if="dayId"
    class="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4"
    @click="closeModal"
  >
    <div
        class="bg-dark-card border border-dark-border rounded-lg shadow-2xl w-full max-w-2xl max-h-[85vh] min-h-[500px] flex flex-col px-4 pb-4"
        @click.stop
      >
      <div class="flex items-center justify-between p-4 border-b border-dark-border">
        <div class="block text-2xl font-semibold text-white">
          {{ title }}
        </div>
        <div>
          <button @click="closeModal"
            class="p-2 text-gray-400 hover:text-white hover:bg-dark-hover rounded-lg transition-colors">
              <IconClose/>
          </button>
        </div>
      </div>
      <MenuItem
        title="Desayuno"
        :menus="menuTypes.breakfast"
        @delete="handleDeleteMenu"
      />
      <MenuItem
        title="Almuerzo"
        :menus="menuTypes.lunch"
        @delete="handleDeleteMenu"
      />
      <MenuItem
        title="Cena"
        :menus="menuTypes.dinner"
        @delete="handleDeleteMenu"
      />
      <div 
      class="flex justify-start gap-4 py-4"
      v-if="isAddingMenu">
        <input class="bg-dark-hover text-white px-2 py-1 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        v-model="newMenuTitle"
        type="text"
        placeholder="Nombre del menú"
        >
        <select class="bg-dark-hover text-white px-2 py-1 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        v-model="newMenuType">
          <option value="breakfast">Desayuno</option>
          <option value="lunch">Almuerzo</option>
          <option value="dinner">Cena</option>
        </select>
        <button 
          class="p-2 ring-2 ring-blue-500 hover:bg-blue-500 hover:text-white rounded-lg transition-colors"
          type="button"
          @click="handleAddMenu"
        >Añadir</button>
      </div>
      <button
        v-if="!isAddingMenu"
        type="button"
        @click="handleCreateMenu"
        class="mt-4 w-full py-3 text-gray-400 hover:text-white hover:bg-dark-hover rounded-lg transition-colors flex items-center justify-center gap-2 border border-dashed border-gray-600 hover:border-gray-400"
      >
        <IconPlus />
        Añadir menú
      </button>
    </div>
  </div>
</template>