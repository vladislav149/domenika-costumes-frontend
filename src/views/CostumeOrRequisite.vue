<template>
  <section>
    <h2 class="text-center text-2xl mb-10">
      {{ reqNameRussia }}
    </h2>
    <ul v-if="dataReq.length">
      <li
        v-for="req in dataReqNormDate"
        class="mx-auto max-w-4xl [&:not(:last-child)]:mb-3"
      >
        <router-link
          :to="{
            name: pathToName,
            params: {id: req._id}
          }"
          class="block p-4 border-2 border-indigo-100 hover:border-indigo-500 transition duration-300 hover:shadow-2xl"
        >
          <article>
            <div class="flex justify-between">
              <img
                :src="req.img || noImg"
                alt="фото реквизита"
                class="w-16 object-contain mr-4"
              />
              <div class="w-full">
                <h1 class="text-xl font-bold text-center">{{ req.title }}</h1>
                <h2>{{ req.description }}</h2>
              </div>
            </div>
            <div class="flex justify-between">
              <div>
                <p>последнее изменение: {{ req.lastChangedDate }}</p>
                <p>
                  у кого:
                  {{ req.employee.fName }} {{ req.employee.lName }}
                </p>
              </div>
              <button
                class="border-2 border-yellow-300 text-xl py-1 px-3 text-center bg-yellow-300 hover:bg-amber-400 hover:border-amber-400 hover:text-gray-700 transition duration-300"
                type="button"
                @click.prevent="getCostume"
              >
                Забрать
              </button>
            </div>
          </article>
        </router-link>
      </li>
    </ul>
    <div v-else>Нет данных</div>
  </section>
</template>

<script lang="ts" setup>
import {onMounted, reactive, computed} from 'vue'
import {useRoute} from 'vue-router'
import attributeApi from '@/api/attrsApi'
import {Attribute, AttrComputed, Employee} from '@/interfaces/places'
import noImg from '@/assets/images/no_img.png'
import {format} from 'date-fns'
import {ru} from 'date-fns/locale'

const route = useRoute()
const {id} = route.params
const nameRoute = route.name
const dataReq = reactive<Attribute<Employee>[]>([])
const reqName = nameRoute === 'costumes' ? 'costumes' : 'requisites'
const reqNameRussia = nameRoute === 'costumes' ? 'костюмы' : 'реквизит'
const pathToName = `attribute-${reqName}`
const pathToNameId = reqName + 'Id'
const dataReqNormDate = computed<AttrComputed[]>(() => {
  return dataReq.map(req => ({
    ...req,
    lastChangedDate: format(new Date(req.lastChangedAt), 'd MMMM y HH:mm', {locale: ru})
  }))
})

const getCostume = e => {
  console.log(e)
}
onMounted(async () => {
  try {
    const {data} = await attributeApi.getAttrs(id as string, reqName)
    const {[reqName]: req} = data
    dataReq.push(...req)
  } catch (error) {
    console.log(error)
  }
})
</script>

<style lang="scss" scoped></style>
