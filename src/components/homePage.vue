<template>
    <div>
        <Header title= "首页"></Header>
        <Tab></Tab>
        
    </div>
</template>
<script>
import Tab from "../commen/tab";
import Header from "../commen/header";
export default {
  name: 'app',
  data(){
      return{
          
      }
  },
  components: {
    Tab,
    Header,
  }
}
</script>
<style>
    
</style>