import defaultApiInstance from '@/api/index'

const placesApi = {
  getPlaces() {
    const url = '/places'
    return defaultApiInstance.get(url)
  },
  getPlace(id: string) {
    const url = `/places/${id}`
    return defaultApiInstance.get(url)
  }
}

export default placesApi
