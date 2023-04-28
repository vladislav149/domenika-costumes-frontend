import {defaultApiInstance} from '@/api/index'

const placesApi = {
  getEmployees() {
    const url = '/employees'
    return defaultApiInstance.get(url)
  },
  getEmployee(id) {
    const url = `/employees/${id}`
    return defaultApiInstance.get(url)
  }
}

export default placesApi
