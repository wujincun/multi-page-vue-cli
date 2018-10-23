<template>
  <div id="demo">
   demoA
   {{username}}
  </div>
</template>
<script>

export default {
  data() {
    return {
    }
  },
  props: {},
  components: {
  },

  created() {
    this.username = this.$store.state.username
  },
  methods: {
    
  }

}

</script>
<style lang="less" rel="stylesheet/less">

</style>
