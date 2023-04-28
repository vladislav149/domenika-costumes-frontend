<template>
  <div class="wrapper min-h-screen flex flex-col">
    <header class="header flex items-center">
      <div class="container mx-auto text-right py-12 text-lg px-3">
        <template v-if="employee">
          {{ `${employee.fName} ${employee.lName}` }}
        </template>
        <template v-else> Гость </template>
      </div>
    </header>
    <main class="main grow flex items-center">
      <div class="container mx-auto px-3">
        <router-view />
      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
import {useStore} from 'vuex'
import {Employee} from '@/interfaces/places'
import {ComputedRef, computed} from 'vue'
const store = useStore()
const employee: ComputedRef<Employee> = computed(
  () => store.getters['employee/getEmployee']
)
</script>

<style scoped></style>
