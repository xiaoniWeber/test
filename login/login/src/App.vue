<template>
  <div id="app">
     <!-- <loader :isshow="getShowLoading" loaderbackground="rgba(0,0,0,0.3)"></loader> -->
    <v-content>
          
       </v-content> 
  </div>
</template>

<script>
// 主体部分
import home from './components/home.vue'
import content from './components/common/content.vue'
import loader from './components/common/loader.vue'
import DGlobal from './common/global.js'
import store from './store/index.js'
export default {
  name: 'App',
  components:{
    'v-content': content,
    home,
    loader
  },
  methods:{
     updateLoginInfo () {
      if (DGlobal.storage.getCookie('c_user_info')) {
        DGlobal.storage.setCookie('c_user_info', unescape(DGlobal.storage.getCookie('c_user_info')), 60 * 60 * 1000 * 24)
      }
    
      store.dispatch({
        type: 'set_UserInfo',
        data: JSON.parse(unescape(DGlobal.storage.getCookie('c_user_info')))
      })
    }
  },
  watch:{
    '$route': function () {
      this.updateLoginInfo()
    }
  },
  mounted(){

  },
  computed:{
    getShowLoading () {
      return store.getters.getShowLoading
    },
  }
}



</script>

<style lang="stylus">
#app
    position: fixed
    top: 0
    left: 0
    bottom: 0
    right: 0
    background: transparent
</style>
