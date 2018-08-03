.<template>
 <div class="usercompletion singin_then">
   <div class="then_content">
      <h3 class="title">请完善以下流程</h3>  
      <div class="select_menu">
        <div class="menulist" :class="singinThenStatus === 0 ?'active':''">基本信息</div>    
        <div class="menulist" :class="singinThenStatus === 1 ?'active':''">个人描述</div>    
        <div class="menulist" :class="singinThenStatus === 2 ?'active':''">完成注册</div>    
      </div>
      <div class="select_content">
        <div class="content_list" v-show="singinThenStatus === 0">
           <div class="block_area">
              <label for="nickname">起个昵称吧！</label>  
              <input type="text" id="nickname" v-model="nickname" placeholder="少年，来一个有故事的名字吧">  
           </div>    
           <div class="block_area">
              <label>你是GG还是MM？！</label>  
              <div class="div_check">
                <input type="radio" class="custom_input" value="0" v-model="usersex" name="usersex" id="boy">  
                <label for="boy" class="inline custom_input">男</label>
              </div>
              <div class="div_check">
                <input type="radio" class="custom_input" value="1" v-model="usersex" name="usersex" id="girl">  
                <label for="girl" class="inline custom_input">女</label>
              </div>
          </div>    
        </div>   
        <div class="content_list" v-show="singinThenStatus === 1">
            <textarea name="usersex"  id="userdesc" v-model="userdesc" placeholder="给自己一个简单的描述吧" rows="5"></textarea>    
        </div> 
        <div class="content_list" v-show ="singinThenStatus === 2">
            <div class="tips">
                <i class="icon-smile"></i>
                <p class="desc">注册成功，去登录吧！</p>
            </div>
        </div>
   	<input type="button" ref="nextBtn" :value="singinThenStatus === 2 ? '去登陆':'下一步'" @click="nextSub">
	</div>  
   </div> 
 </div>
</template>

<script>
import fetch from '../../common/fecth.js'

 export default {
   data () {
     return {
       // 0 是第一步。1 是第二步。2 是第三步
				singinThenStatus: 0,
				nickname: '',
				usersex: '',
				userdesc: ''
     }
   },
   components: {

   },
   props:{
      username:{
          type:String,
          default:''
      }
   },
   methods:{
       nextSub(){
           if(this.singinThenStatus ===0){
               this.updataUserSigninInfo()
               return
           }
           if(this.singinThenStatus ===1){
               this.updateUserDesc()
               return
           }
           if(this.singinThenStatus ===2){
              this.showSinginThen = false
              this.$emit('hidesingin')
		
			   return
               
           }

       },
       updataUserSigninInfo(){
           let resultNickName = this.nickname
           if(resultNickName === ''){
               this.$msg({text:'昵称中间不能为空',background:'red'})
               return
           }
           if(this.usersex ==='') return 
           this.singinThenStatus =this.singinThenStatus+1
       },
       updateUserDesc(){
           if(this.userdesc.length<10){
               this.$msg({text:'描述不能少于10个字',background:'red'})
           }else{
               var  fetchUrl ='http://www.daiwei.org/vue/server/user.php?inAjax=1&do=updateSigninInfo'
               fetch.post(fetchUrl,{
                   username:this.username,
                   nickname:this.nickname,
                   usersex:this.usersex,
                   userdesc:this.userdesc
               }).then((res) =>{
                   console.log(res.data)
                   if(res.data.code ==='1'){
                       this.$msg({text:'恭喜已经激活注册账号，可直接登录',background:'#00d032'})
                       this.singinThenStatus ++
                   }

                   },(error)=>{
                       alert("数据请求错误")
               })
           }
       }
   }
 }
</script>

<style lang="stylus">
 $activecolor = red
        // radio
        .custom_input[type="radio"]
            display: none
        .custom_input[type="radio"] + label.custom_input
            cursor: pointer
            display:inline-block
            width: auto
            text-align: left
            box-sizing:border-box
            user-select:none
        .custom_input[type="radio"] + label.custom_input::before
                content: ""
                display: inline-block
                width: 18px
                height: 18px
                background: #EEE
                vertical-align: middle
                margin-right: 5px
                box-sizing:border-box
                background-color: #fff
                border: 4px solid #EEEEEE
                border-radius:50%
                transition: all ease-in .3s

        .custom_input[type="radio"]:checked + label.custom_input::before
            background-color: $activecolor
            transition: all ease-in .3s

        .custom_input[type="radio"]:hover + label.custom_input::before
            border: 4px solid #e1e1e1
            transition: all ease-in .3s
            
        // check
        .custom_input[type="checkbox"]
            display: none
        .custom_input[type="checkbox"] + label.custom_input
            cursor: pointer
            display:inline-block
            width: auto
            text-align: left
            box-sizing:border-box
            user-select:none
        .custom_input[type="checkbox"] + label.custom_input::before
                content: ""
                display: inline-block
                width: 18px
                height: 18px
                background: #EEE
                vertical-align: middle
                margin-right: 5px
                box-sizing:border-box
                background-color: #fff
                border: 4px solid #EEEEEE
                transition: all ease-in .3s

        .custom_input[type="checkbox"]:checked + label.custom_input::before
            background-color: $activecolor
            transition: all ease-in .3s

        .custom_input[type="checkbox"]:hover + label.custom_input::before
            border: 4px solid #e1e1e1
            transition: all ease-in .3s
 
</style>
