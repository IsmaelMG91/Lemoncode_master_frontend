<script setup lang="ts">
  import { RouterView } from 'vue-router'; //componente de Vue que indica qué renderiza, en función de cómo hayamos configurado el router
  import MyHeader from '@/components/MyHeader.vue';
</script>

<template>
  <MyHeader/>
  <RouterView/>
</template>

<style scoped></style>
