<template>
  <div class="outer">
    <Header></Header>
    <router-view></router-view>
    <Footer v-show="!$route.meta.isHideFooter"></Footer>
  </div>
</template>

<script>
import Header from '@/components/Header'
import Footer from '@/components/Footer'
export default {
  name: '',
  components:{
    Header,
    Footer
  }
}
</script>

<style scoped>

</style>
