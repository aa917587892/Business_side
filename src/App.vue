<template>
  <div id="app">
    <top></top>
    <div class="flex justify-center ">
      <leftnav style="width:200px"></leftnav>
      <div class="ml-1" style="width:1000px;background-color:white">
        <router-view/>
        </div>
      
    </div>
  </div>
</template>

<script>
import leftnav from './components/leftnav.vue'
import top from './components/top.vue'
import home from '@/views/home/home.vue'
export default {
  name: 'App',
  components:{
    home,
    top,
    leftnav
  }
}
</script>

<style>

</style>
