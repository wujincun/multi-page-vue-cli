<template>
  <div id="app">
 <!--    <demo-a></demo-a>
    <div class="home">home</div> -->
    <router-view></router-view>
  </div>
</template>
<script>
import demoA  from 'views/home/components/demoA.vue';

export default {
  data() {
    return {
    }
  },
  props: {},
  components: {
    demoA
  },
  created() {
    
  },
  methods: {
    
  }

}

</script>
<style lang="less" rel="stylesheet/less">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  .home {
    height: 500px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}

</style>
