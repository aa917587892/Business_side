<template>
  <div id="app">

      <router-view  v-if="$route.meta.showTab" />
    <div v-else>
       <top></top>
       <div class="flex justify-center "> 
        
          <router-view/>
       </div>
       <foot></foot>
    </div>
  
         
  </div>
</template>

<script>
import top from './components/top.vue'
import foot from './components/foot.vue'
export default {
  name: 'App',
  components:{
    top,
    foot
  },
  created(){

  },
   
    
}
</script>

<style>

</style>
