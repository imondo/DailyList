<template>
  <div class="bottom-wrapper">
    <mu-paper>
      <mu-bottom-nav :value="bottomNav" shift @change="handleChange">
        <mu-bottom-nav-item value="movies" title="Movies" icon="ondemand_video"/>
        <mu-bottom-nav-item value="music" title="Music" icon="music_note"/>
        <mu-bottom-nav-item value="books" title="Books" icon="books"/>
        <mu-bottom-nav-item value="pictures" title="Pictures" icon="photo"/>
      </mu-bottom-nav>
    </mu-paper>
  </div>
</template>
<style lang="less" rel="stylesheet/less">
  .bottom-wrapper {
    position: fixed;
    width: 100%;
    bottom: 0;
  }
</style>
<script type='text/ecmascript-6'>
  export default {
    data () {
      return {
        bottomNav: 'movies',
        bottomNavColor: 'movies'
      }
    },
    methods: {
      handleChange (val) {
        this.bottomNav = val
      }
    }
  }
</script>