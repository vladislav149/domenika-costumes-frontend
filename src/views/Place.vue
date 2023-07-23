<template>
  <section class="flex flex-col justify-center h-full">
    <div
      class="flex md:flex-row md:space-x-3 md:space-y-0 flex-col space-x-0 space-y-3"
    >
      <router-link
        :to="{name: 'costumes', params: {id}}"
        class="costumes flex items-center justify-center w-full border-2 border-indigo-500 text-2xl py-12 text-center hover:bg-indigo-500 hover:text-white transition duration-300"
      >
        <component :is="costumesIcon" class="w-16 h-16" />
        Костюмы
      </router-link>
      <router-link
        :to="{name: 'requisites', params: {id}}"
        class="costumes flex items-center justify-center w-full border-2 border-indigo-500 text-2xl py-12 text-center hover:bg-indigo-500 hover:text-white transition duration-300"
      >
        <component :is="requisitesIcon" class="w-16 h-16" />
        Реквизит
      </router-link>
    </div>
  </section>
</template>

<script lang="ts" setup>
import costumesIcon from '@/assets/images/icons/costumes.svg'
import requisitesIcon from '@/assets/images/icons/requisites.svg'
import {useRoute} from 'vue-router'

const route = useRoute()
const {id} = route.params
</script>

<style lang="scss" scoped>
.costumes {
  & > svg {
    stroke: currentColor;
    fill: currentColor;
  }
}
</style>
