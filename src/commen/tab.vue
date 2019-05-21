<template>
   <div>
        <div class="tab" >
            <router-link  to="/home" @mouseover="fn(1)" @mouseout="fn(0)"  >首页</router-link> 
            <router-link to="/fenlei" @mouseover="fn(2)" @mouseout="fn(0)" >分类页</router-link> 
            <router-link to="/xq"  @mouseover="fn(3)" @mouseout="fn(0)">详情页</router-link> 
            <router-link to="/land"  @mouseover="fn(4)" @mouseout="fn(0)">登陆页</router-link> 
        </div>
        <div>
            <div v-show="num==1" class="aa">1111</div>
            <div v-show="num==2" class="aa">222</div>
            <div v-show="num==3" class="aa">333</div>
            <div v-show="num==4" class="aa">444</div>
        </div>
                
   </div>
</template>
<script>
export default {
    data(){
        return{
            num : 0,
        }
    },
    methods:{
        fn(num){
            this.num = num;
        },
    }
}
</script>
<style scoped>
    .tab{
        display: flex;
        width: 100%;
        text-align: center;

       
    }
    .tab>a{
        flex: 4;
        border: 1px solid powderblue;
        text-decoration: none;
    }
    .aa{
    
        height: 100px;
        background: cornflowerblue;
    }
    .tab>a:hover{
       border-bottom: 2px solid red;
       color:red;
    }
</style>
