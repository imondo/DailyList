<template>
  <div class="upload-wrapper">
    <label for="upload-input" class="upload-box-label"></label>
    <input type='file' id="upload-input" @change="handleFileChange" ref="inputer" class="hidden"/>
    <img :src="dataUrl"/>
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
      value: {
        default: undefined
      }
    },
    data() {
      return {
        dataUrl: ''
      }
    },
    methods: {
      imgPreview (file) {
        let self = this;
        if (!file || !window.FileReader) return;
        if (/^image/.test(file.type)) {
          let reader = new FileReader();
          reader.readAsDataURL(file);
          reader.onloadend = function () {
            self.dataUrl = this.result;
          }
        }
      },
      handleFileChange (e) {
        if (typeof e.target === 'undefined'){
          this.file = e[0];
        }
        else this.file = e.target.files[0];
        this.$emit('input', this.file);

        this.imgPreview(this.file);
        this.fileName = this.file.name;

        this.$emit('onChange', this.file, this.file.name);
      }
    }
  }
</script>
