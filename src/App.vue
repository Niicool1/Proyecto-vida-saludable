<script setup>
  import ElNavegador from '@/components/ElNavegador.vue';
  import ElPie from '@/components/ElPie.vue';
</script>



<template>

  <ElNavegador/>


  <div class="Routercontainer">
    <router-view></router-view>
  </div>

  <ElPie/>

</template>
