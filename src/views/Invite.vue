<template>
  <h2 class="text-center text-3xl mb-3">
    Вы попали попали по ссылке-приглашению
  </h2>
  <h3 class="text-center text-2xl mb-2">
    Нажмите
    <router-link :to="{name: 'home'}" class="text-indigo-500"
      >далее</router-link
    >
  </h3>
  <p class="text-center">
    Время до автоматического перехода {{ timeToTransition }}
  </p>
</template>

<script lang="ts" setup>
import {onMounted, onUnmounted, ref} from 'vue'
import {useRouter} from 'vue-router'

const router = useRouter()
const delayTimeOut = 5000
const delayInterval = 1000
let timeToTransition = ref(5)
let interval: ReturnType<typeof setInterval>
let timeOut: ReturnType<typeof setTimeout>

onMounted(() => {
  timeOut = setTimeout(() => {
    router.push({name: 'home'})
  }, delayTimeOut)
  interval = setInterval(() => {
    timeToTransition.value--
  }, delayInterval)
})

onUnmounted(() => {
  clearInterval(interval)
  clearTimeout(timeOut)
})
</script>

<style lang="scss" scoped></style>
