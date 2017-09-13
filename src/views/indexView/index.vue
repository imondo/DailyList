<template>
  <div>
    <div class="paper-wrapper main">
      <mu-list>
        <p class="list-wrapper" v-for="(item, index) in list">
          <mu-list-item class="list" :title="item.goal"
                        v-touch:left.capture='touchLeft(index)'
                        v-touch:right.capture='touchRight'
                        :to="{name:'details',params:{id: item.objectId}}"
                        :class="{deleteSlider: index==nowIndex}">
            <mu-avatar src="../../src/assets/user.png" slot="leftAvatar"/>
            <span slot="describe">已坚持3天</span>
            <mu-icon slot="right" value="info"/>
          </mu-list-item>
          <mu-icon class="list-del" slot="right" value="delete_sweep" ref="remove" v-touch:tap="remove(index, item)"/>
        </p>
      </mu-list>
    </div>
  </div>
</template>
<style lang="less" rel="stylesheet/less">
  @import "../../styles/minx";
  .paper-wrapper {
    .mu-item-wrapper {
      background-color: #FFFFFF;
      border: none;
      border-radius: 2px;
      z-index: 99;
    }
    .list-wrapper {
      position: relative;
      margin: 5px 0;
      width: 100%;
      height: 70px;
      .list {
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        z-index: 100;
        transition: 0.3s;
        transform: translateX(0);
        background-color: #FFFFFF;
        &.deleteSlider {
          transform: translateX(-70px);
        }
      }
      .list-del {
        position: absolute;
        right: 0;
        top: 0;
        width: 70px;
        height: 70px;
        line-height: 70px;
        text-align: center;
        background-color: red;
        color: #FFFFFF;
      }
    }
  }

</style>
<script type='text/ecmascript-6'>
  import { getList, deleteList} from 'api/list';
  const CODE = 200;
  export default {
    data() {
      return {
        list: [],
        nowIndex: -1
      }
    },
    created() {
      this.getList(this.$store.getters.userInfo.objectId);
    },
    methods: {
      getList(id) {
        const vm = this;
        let params = {
          where: {
            ownerId: id
          }
        };
        getList(params).then((res) => {
          if (res.status === CODE) {
            vm.list = res.data.results;
          }
        })
      },
      touchLeft(index) {
        const vm = this;
        return function() {
          vm.nowIndex = index;
        }
      },
      touchRight() {
        const vm = this;
        vm.nowIndex = -1;
      },
      remove(index, item) {
        const vm = this;
        return function() {
          deleteList(item.objectId).then((res) => {
            if (res.status === 200) {
              vm.list.splice(index, 1);
              vm.nowIndex = -1;
            }
          });
        }
      }
    }
  }
</script>
