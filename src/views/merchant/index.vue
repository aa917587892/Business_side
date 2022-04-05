<template>
   <div class="flex justify-center ">
      <leftnav style="width:200px"></leftnav>
      <div class="ml-1" style="width:1000px;background-color:white">
        <router-view/>
        </div>
      
    </div>

</template>
<script>
import leftnav from '@/components/leftnav.vue'
export default {
  name: 'App',
  components:{

    leftnav
  }
}
</script>
<style scoped>

</style>