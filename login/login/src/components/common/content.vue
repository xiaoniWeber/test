.<template>
 <div class="div_content">
   <!-- header固定 -->
   <div class="ul-header">
      <div class="fixed-menu">
        <i class="icon-menu" @click="toggleMenuContent">点我</i>
       </div>
       <div class="right-menu">
         <router-link v-if="getUserInfo !== null" class="listmenu" tag="a" to="/info">
          {{getUserInfo.nickname === '' ? (getUserInfo.username === '' ? '点击设置用户名' : getUserInfo.username) : getUserInfo.nickname}}
        </router-link>
        <router-link v-else class="listmenu" tag="a" to="/login">
          登陆
        </router-link>
      
       </div>
       <div class="fixed-fade-menu" v-if="showLeftMenu" @click="hideLeftContent">
         <div class="fixed-fade-content" @click="hideLeftContent">
          <router-link tag="a" to="/home">
            首页
          </router-link>
          <router-link tag="a" to="/home">
            状态
          </router-link>
         </div>
       </div>
       
   </div>
    
   <router-view class="li_list"></router-view>
 </div>
</template>

<script>
import store from '../../store/index.js'
 export default {
   data () {
     return {
        showLeftMenu:false
     }
   },
   components: {

   },
   methods:{
      hideLeftContent () {
        this.showLeftMenu = false
       },
       toggleMenuContent(){
         this.showLeftMenu = true
       }
   },
   computed:{
       getUserInfo () {
         return store.getters.getUserInfo
        }
   }
 }
</script>

<style lang="stylus">
.div_content
  position:fixed
  top:0
  left:0
  right:0
  height:0.8rem
  line-height:.8rem
  .ul-header
      position:fixed
      top:0
      left:0
      right:0
      height:0.8rem
      line-height :.8rem
      z-index:111
      font-size:0
      .fixed-menu
          position:absolute
          left:0
          top:0
          width:1rem
          height :.8rem
          line-height :.8rem
          text-align:center
          i 
             display:inline-block
             vertical-align :middle
             font-size :.28rem
             font-style :normal
        
      .right-menu
           position: absolute
           right: .2rem
           height: .8rem
           top: 0
           font-size: 0  
           a
             display :inline-block
             font-size:.28rem
             vertical-align :middle
              color :#fff
      .fixed-fade-menu
        position:fixed
        top: 0
        left: 0
        bottom: 0
        right: 0
        background: rgba(0,0,0,0.86)
        .fixed-fade-content
          width:100%
          height:100%
          padding:10px
          box-sizing:border-box
          font-size:14px
          display:flex
          flex-direction:column
          justify-content: center
          a 
            text-decoration:none
            color :#fff
            text-align: center
  .li_list
      // transform:translate3d(0,0,0)          
</style>
