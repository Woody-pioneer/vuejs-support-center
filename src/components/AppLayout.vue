<template>
  <div class="container app-layout">
    <header class="header">
      <div><img class="img" src="../assets/logo.svg"> </div>
        <div>My shop</div>
    </header>
    <NavMenu></NavMenu>
    <router-view/>
  </div>
</template>
<script>
 import NavMenu from '../components/NavMenu'
  export default {
   components:{
     NavMenu,
   }
  }
</script>
<style lang="scss">
  @import "../style/main";
</style>
<style lang="scss" scoped>
  .header{
    .img{
      width:64px;
      height:64px;
    }
  }
</style>