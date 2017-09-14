<template>
  <div class="sheet-wrapper">
    <mu-raised-button label="Open Bottom Sheet" />
    <mu-bottom-sheet :open="bottomSheet" @close="closeBottomSheet">
      <mu-list @itemClick="closeBottomSheet">
        <mu-sub-header>{{title}}</mu-sub-header>
        <mu-list-item title="删除" @click="makeSure" class="yes-btn"/>
        <mu-list-item title="取消"/>
      </mu-list>
    </mu-bottom-sheet>
  </div>
</template>
<style lang="less" rel="stylesheet/less">
  .sheet-wrapper {
    .yes-btn {
      .mu-item-title {
        color: red;
      }
    }
  }
</style>
<script type='text/ecmascript-6'>
  export default {
    props: {
      bottomSheet: {
        type: Boolean
      },
      title: {
        type: String
      }
    },
    methods: {
      closeBottomSheet () {
        this.$store.commit("SET_SHEET", false);
      },
      makeSure() {
        this.$emit('callback');
      }
    }
  }
</script>