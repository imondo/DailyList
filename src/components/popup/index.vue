<template>
    <div class="popup-wrapper">
      <mu-popup :overlay="false" popupClass="demo-popup-top" :open="popupState">{{popupMsg}}</mu-popup>
      <mu-circular-progress :size="40" v-show="progress"/>
    </div>
</template>
<style lang="less" rel="stylesheet/less">
   
</style>
<script type='text/ecmascript-6'>
  export default {
    computed: {
      popupState() {
        return this.$store.getters.popupState;
      },
      popupMsg() {
        return this.$store.getters.popupMsg;
      },
      progress() {
        return this.$store.getters.progress;
      }
    },
    watch: {
      popupState (val) {
        if (val) {
          setTimeout(() => {
            this.$store.commit('SET_POPUPSTATE', false);
            this.$store.commit('SET_POPUPMSG', '');
          }, 2000)
        }
      }
    }
  }
</script>
