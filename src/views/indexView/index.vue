<template>
  <div>
    {{list}};
    <div class="paper-wrapper">

    </div>
  </div>
</template>
<style lang="less" rel="stylesheet/less">
  @import "../../styles/minx";
  .paper-wrapper {

  }

</style>
<script type='text/ecmascript-6'>
  import { getList } from 'api/list';
  const CODE = 200;
  const vm = this;
  export default {
    data() {
      return {
        list: []
      }
    },
    created() {
      this.getList();
    },
    methods: {
      getList() {
        getList().then((res) => {
          if (res.status === CODE) {
            vm.list = res.data.results;
          }
        })
      },
      add() {

      }
    }
  }
</script>
