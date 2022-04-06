<template>
   <div class="flex justify-center ">
      <leftnav style="width:200px"></leftnav>
      <div class="ml-1" >
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