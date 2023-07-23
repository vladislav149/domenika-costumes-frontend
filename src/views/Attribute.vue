<template>
  <section class="flex align-top mx-auto p-4 border-indigo-500 border-2 max-w-4xl">
    <img
      class="basis-1/2 max-w-[50%] object-contain mr-5"
      :src="attribute.img || noImgBig"
      alt="фото атрибута"
    />
    <div class="flex flex-col basis-1/2 pb-5">
      <div class="mb-auto">
        <h2 class="text-center mb-8 text-4xl">{{ attribute.title }}</h2>
        <h3 class="text-xl mb-5">{{ attribute.description }}</h3>
        <p><span class="font-bold">Дата создания:</span> {{ attrComputed.dateCreate }}</p>
        <p>
          <span class="font-bold">Последнее изменение:</span> {{ attrComputed.lastChangedDate }}
        </p>
        <p>
          <span class="font-bold">У кого:</span>
          {{ attribute.employee.fName }} {{ attribute.employee.lName }}
        </p>
        <p>
          <span class="font-bold">Место:</span>
          {{ attribute.place.title }}
        </p>
      </div>
      <div class="flex justify-between px-4">
        <button
          class="border-2 border-yellow-300 text-xl py-1 px-3 text-center bg-yellow-300 hover:bg-amber-400 hover:border-amber-400 hover:text-gray-700 transition duration-300"
          type="button"
          @click.prevent="test"
        >
          Посмотреть историю
        </button>
        <button
          class="border-2 border-yellow-300 text-xl py-1 px-3 text-center bg-yellow-300 hover:bg-amber-400 hover:border-amber-400 hover:text-gray-700 transition duration-300"
          type="button"
          @click.prevent="test"
        >
          Забрать
        </button>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import {onMounted, reactive, computed} from 'vue'
import attributeApi from '@/api/attrsApi'
import {useRoute} from 'vue-router'
import noImgBig from '@/assets/images/no-img-big.png'
import {AttributeWithPlace, Employee} from '@/interfaces/places'
import {format} from 'date-fns'
import {ru} from 'date-fns/locale'
const route = useRoute()
const nameRoute = route.name as string
const nameRouteForApi = nameRoute.split('-')[1]
const {id} = route.params
const attribute = reactive<AttributeWithPlace<Employee>>({
  _id: '',
  title: '',
  description: '',
  img: '',
  employee: {
    fName: '',
    lName: '',
    numberPhone: '',
    role: '',
    costumes: [],
    requisites: []
  },
  place: {
    _id: '',
    title: '',
    costumes: [],
    requisites: []
  },
  createdAt: new Date(),
  lastChangedAt: new Date()
})
const attrComputed = computed(() => ({
  lastChangedDate: format(new Date(attribute.lastChangedAt), 'd MMMM y HH:mm', {locale: ru}),
  dateCreate: format(new Date(attribute.createdAt), 'd MMMM y', {locale: ru})
}))

const test = () => console.log('test')

onMounted(async () => {
  const {data} = await attributeApi.getAttr(id as string, nameRouteForApi)
  Object.assign(attribute, data)
})
</script>

<style lang="scss" scoped></style>
