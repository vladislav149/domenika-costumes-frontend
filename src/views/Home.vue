<template>
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
</template>

<script lang="ts" setup>
import {onMounted, reactive} from 'vue'
import placesApi from '@/api/placesApi'
import {Place} from '@/interfaces/places'

const places = reactive<Place[]>([])

onMounted(async () => {
  const {data} = await placesApi.getPlaces()
  data.forEach(place => {
    places.push(place)
  })
})
</script>

<style lang="scss" scoped></style>
