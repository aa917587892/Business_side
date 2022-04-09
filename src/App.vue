<template>
  <div id="app">

      <router-view  v-if="$route.meta.showTab" />
    <div v-else>
       <top></top>
       <div class="flex justify-center "> 
        
          <router-view/>
       </div>
    </div>
  
         
  </div>
</template>

<script>
import top from './components/top.vue'
export default {
  name: 'App',
  components:{
    top,
  },
  created(){

  },
   
    
}
</script>

<style>

</style>
