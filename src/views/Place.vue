<template>
  <div v-if="place">
    <h1>{{ place.title }}</h1>
    {{ place }}
  </div>
</template>

<script lang="ts" setup>
import {onMounted, ref} from 'vue'
import {useRoute} from 'vue-router'
import placesApi from '@/api/placesApi'
import {Place} from '@/interfaces/places'

const route = useRoute()
const {id} = route.params
const place = ref<Place | null>(null)

onMounted(async () => {
  const {data} = await placesApi.getPlace(id)
  place.value = data
})
</script>

<style lang="scss" scoped></style>
