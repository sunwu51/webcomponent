<template>
  <el-button type="text" @click="open6"><slot></slot></el-button>
</template>

<script>
  export default {
    props:{record: Object,onOk:Function},
    methods: {
      
      open6() {
        let _this=this;
        this.$confirm('是否确认删除', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning',
          center: true
        }).then(() => {
          this.onOk(_this.record)
          this.$message({
            type: 'success',
            message: '删除成功!'
          });
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          });
        });
      }
    }
  }
</script>