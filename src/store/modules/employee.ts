import employeesApi from '@/api/employeesApi'

const state = {
  employee: null,
  credentials: {
    token: localStorage.getItem('token') || null,
    userRole: localStorage.getItem('userRole') || null
  }
}

const getters = {
  getEmployee: state => state.employee,
  getUserRole: state => state.credentials.userRole
}

const mutations = {
  setEmployee(state, payload) {
    state.employee = payload
  },
  setToken(state, token) {
    state.credentials.token = token
    localStorage.setItem('token', token)
  },
  setUserRole(state, userRole) {
    state.credentials.userRole = userRole
    localStorage.setItem('userRole', userRole)
  },
  deleteTokenAndUserRole() {
    localStorage.removeItem('token')
    localStorage.removeItem('userRole')
  }
}

const actions = {
  login({commit}, id) {
    return employeesApi.getEmployee(id).then(({data}) => {
      const {_id: token, role} = data

      commit('setEmployee', data)
      commit('setToken', token)
      commit('setUserRole', role)
    })
  },
  isAuth({commit}, id) {
    return employeesApi.getEmployee(id).then(({data}) => {
      commit('setEmployee', data)
    })
  },
  logout({commit}) {
    return new Promise(resolve => {
      commit('deleteTokenAndUserRole')
      resolve('удаленно')
    })
  }
}

export default {state, getters, mutations, actions, namespaced: true}
