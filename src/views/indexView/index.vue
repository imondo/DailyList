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
            <span slot="describe">已坚持{{item.details.sumTotal}}天</span>
            <mu-icon slot="right" :value="item.details.isToday?'done':'info'" :class="{'done-icon': item.details.isToday}"/>
          </mu-list-item>
          <mu-icon class="list-del" slot="right" value="delete_sweep" ref="remove" @click.stop="remove(index, item)"/>
        </p>
        <v-bottom-sheet title="确定要删除吗？" :bottomSheet="bottomSheet" @callback="deleteList" class="hidden"></v-bottom-sheet>
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
      margin-bottom: 8px;
      width: 100%;
      height: 58px;
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
          transform: translateX(-58px);
        }
        .done-icon {
          color: #03A9F4;
        }
      }
      .list-del {
        position: absolute;
        right: 0;
        top: 0;
        width: 58px;
        height: 58px;
        line-height: 58px;
        text-align: center;
        background-color: red;
        color: #FFFFFF;
      }
    }
  }

</style>
<script type='text/ecmascript-6'>
  import { getList, deleteList} from 'api/list';
  import { getDaysInOneMonth } from 'utils/index';
  import bottomSheet from 'components/bottomSheet'
  const CODE = 200;
  export default {
    data() {
      return {
        list: [],
        nowIndex: -1,
        itemData: null
      }
    },
    created() {
      this.getList(this.$store.getters.userInfo.objectId);
    },
    computed: {
      bottomSheet() {
        return this.$store.getters.bottomSheet;
      }
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
            vm.list = res.data.results.map(v => {
              if (getDaysInOneMonth.format('ymd') !== v.details.yesterday) {
                v.details.isToday = false;
              }
              return v;
            });
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
        vm.itemData = {
          index: index,
          item: item
        };
        vm.$store.commit("SET_SHEET", true);
      },
      deleteList() {
        const vm = this;
        deleteList(vm.itemData.item.objectId).then((res) => {
          if (res.status === 200) {
            vm.list.splice(vm.itemData.index, 1);
            vm.nowIndex = -1;
          }
        });
      }
    },
    components: {
      'v-bottom-sheet': bottomSheet
    }
  }
</script>
