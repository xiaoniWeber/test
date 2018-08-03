const globalStore ={
    state:{
        userInfo: null,
        showloading: true,
    },
   getters:{
     getUserInfo: state => state.userInfo,
     getShowLoading: state => state.showloading,
   } ,
   mutations:{
    setUserInfo (state, obj) {
        state.userInfo = obj.data
    },
    setShowLoading (state, obj) {
        state.showloading = obj.data
    },
   },
   actions:{
    set_UserInfo ({commit}, obj) {
        commit('setUserInfo', obj)
    },
    set_ShowLoading ({commit}, obj) {
        commit('setShowLoading', obj)
    },
   }
}
export default globalStore