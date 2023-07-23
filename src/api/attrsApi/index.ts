import defaultApiInstance from '@/api/index'

const attributeApi = {
  getAttrs(id: string, nameAttr: string) {
    const url = `/places/${id}/${nameAttr}`
    return defaultApiInstance.get(url)
  },
  getAttr(id: string, nameAttr: string) {
    const url = `/${nameAttr}/${id}`
    return defaultApiInstance.get(url)
  }
}

export default attributeApi
