<template>
  <section class="flex flex-col justify-center h-full">
    <ul class="grid grid-cols-2 gap-4">
      <li v-for="place in places" :key="place._id">
        <router-link
          :to="{name: 'place', params: {id: place._id}}"
          class="block border-2 border-indigo-500 text-2xl py-12 text-center hover:bg-indigo-500 hover:text-white transition duration-300"
        >
          {{ place.title }}
        </router-link>
      </li>
    </ul>
  </section>
</template>

<script lang="ts" setup>
import {onMounted, reactive} from 'vue'
import placesApi from '@/api/placesApi'
import {Place} from '@/interfaces/places'

const places = reactive<Place[]>([])

onMounted(async () => {
  try {
    const {data} = await placesApi.getPlaces()
    places.push(...data)
  } catch (error) {
    console.log(error)
  }
})
</script>

<style lang="scss" scoped></style>
