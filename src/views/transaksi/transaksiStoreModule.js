export default {
  namespaced: true,
  state: {
    penjualan: [],
    activePenjualan: '',
    activeOrder: '',
  },
  getters: {
    getJumlahPenjualan: state => state.penjualan.length,
    getActiveOrder: state => state.activeOrder,
    getActivePenjualan: state => state.activePenjualan,
    getPenjualan: state => state.penjualan,
  },
  mutations: {
    SET_ACTIVE_ORDER(state, data) {
      state.activeOrder = data
    },
    SET_ACTIVE_PENJUALAN(state, data) {
      state.activePenjualan = data
    },
    SET_INVOICE(state, data) {
      state.activePenjualan.invoice = data
    },
    ADD_ORDER_TO_ACTIVE_PENJUALAN(state, data) {
      state.activePenjualan.orders = data
    },
    ADD_DATA_PENJUALAN(state, data) {
      state.penjualan.push(data)
    },
    ADD_ORDER(state, id) {
      console.info(id)
      // state.penjualan[id].orders.push(data)
    },
  },
  actions: {},
}
