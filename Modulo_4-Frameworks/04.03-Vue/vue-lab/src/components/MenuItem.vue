<script setup lang="ts">
 import type { Menu } from '@/types';
 import IconTrash from './icons/IconTrash.vue';

 const {title, menus} = defineProps<{
  title: string
  menus: Menu[]
 }>()

const emit = defineEmits<{
  (e: "delete", menuId: string):void
}>() 
</script>

<template>
  <section v-if="menus.length">
    <h3
    class="text-xl font-medium"
    >{{ title }}</h3>
    <ul
    class="flex-col">
      <li
      class="flex justify-between items-center gap-3 p-3 my-3 bg-dark-hover rounded-lg border border-transparent hover:border-dark-border transition-all"
      v-for="menu in menus"
        :key="menu.id"
        >
          {{ menu.title }}
        <button @click="emit('delete', menu.id)"
          >
          <IconTrash/>
        </button>
      </li>
    </ul>
  </section>
</template>