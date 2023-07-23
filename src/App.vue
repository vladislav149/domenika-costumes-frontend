<template>
  <div class="wrapper min-h-screen flex flex-col">
    <domHeader />
    <main class="main grow flex">
      <div class="container mx-auto px-3">
        <router-view />
      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
import domHeader from '@/components/Header.vue'
</script>

<style scoped></style>
