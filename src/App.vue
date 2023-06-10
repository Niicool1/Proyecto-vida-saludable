
<template>

  <ElNavegador/>


  <div class="Routercontainer">
    <router-view></router-view>
  </div>

  <ElPie/>

</template>


<script>
  import ElNavegador from '@/components/ElNavegador.vue';
  import ElPie from '@/components/ElPie.vue';
  export default {
    components: {ElNavegador,ElPie}
  }

</script>
