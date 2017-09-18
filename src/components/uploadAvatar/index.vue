<template>
  <div class="upload-wrapper">
    <mu-raised-button label="Open Bottom Sheet" />
    <mu-bottom-sheet :open="bottomSheet" @close="closeBottomSheet">
      <mu-list @itemClick="closeBottomSheet">
        <mu-sub-header>{{title}}</mu-sub-header>
        <mu-list-item title="拍照" class="upload-box">
          <label for="upload-input" class="upload-box-label"></label>
        </mu-list-item>
        <mu-list-item title="从相册选择" class="upload-box">
          <label for="upload-input" class="upload-box-label"></label>
        </mu-list-item>
        <mu-list-item title="取消" @itemClick="closeBottomSheet"/>
      </mu-list>
      <input type='file' id="upload-input" @change="handleFileChange" class="hidden"/>

    </mu-bottom-sheet>
  </div>
</template>
<style lang="less" rel="stylesheet/less">
  .upload-wrapper {
    .upload-box {
      position: relative;
    }
  }
  .upload-box-label {
    position: absolute;
    top: 0;left: 0;right: 0;bottom: 0;
    z-index: 10;
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
    data() {
      return {
        uploadImage: ''
      }
    },
    methods: {
      closeBottomSheet () {
        this.$store.commit("SET_SHEET", false);
      },
      handleFileChange (e) {
        console.log(e);
        let inputDOM = this.$refs.inputer;
        // 通过DOM取文件数据
        this.file = inputDOM.files[0];
        this.errText = '';
        console.log(inputDOM);
        let size = Math.floor(this.file.size / 1024);
//        if (size > ...) {
//          // 这里可以加个文件大小控制
//          return false
//        }

        // 触发这个组件对象的input事件
//        this.$emit('input', this.file);

        // 这里就可以获取到文件的名字了
        this.fileName = this.file.name;

        // 这里加个回调也是可以的
//        this.onChange && this.onChange(this.file, inputDOM.value);

      },
    }
  }
</script>
