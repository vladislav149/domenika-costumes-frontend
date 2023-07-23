<template>
  <header class="header flex items-center">
    <div class="container mx-auto flex justify-between py-12 text-lg px-3">
      <router-link
        :to="{name: 'home'}"
        class="border-2 border-indigo-500 text-2xl py-1 px-3 text-center hover:bg-indigo-500 hover:text-white transition duration-300"
      >
        Главная
      </router-link>
      <template v-if="employee">
        {{ `${employee.fName} ${employee.lName}` }}
      </template>
      <template v-else> Гость </template>
    </div>
  </header>
</template>

<script lang="ts" setup>
import {useStore} from 'vuex'
import {Employee} from '@/interfaces/places'
import {computed} from 'vue'
const store = useStore()
const employee = computed<Employee>(() => store.getters['employee/getEmployee'])
</script>

<style lang="scss" scoped></style>
