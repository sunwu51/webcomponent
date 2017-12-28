<template>
  <span>
    <span  @click="init"><slot></slot></span>
    <el-dialog title="编辑" :visible.sync="dialogFormVisible">
      <el-form :model="formData" :rules="rules" ref="editForm">
        <template v-for='col in editablecolumns'>
          <el-form-item :label="col.title || col.key" :label-width="formLabelWidth"
            :prop="col.key"
          >
            <template v-if="!isSelection(col.selection)">
              <el-input v-if="col.type!=='number'" v-model="formData[col.key]" auto-complete="off"></el-input>
              <el-input v-if="col.type==='number'" v-model.number="formData[col.key]" auto-complete="off"></el-input>
            </template>
             <el-select v-if="isSelection(col.selection)" v-model="formData[col.key]" placeholder="请选择">
               <template v-for="s in col.selection">
                <el-option :label="s" :value="s"></el-option>
               </template>
              </el-select>
          </el-form-item>
        </template>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="handleOk">确 定</el-button>
      </div>
    </el-dialog>  
  </span>
</template>
<script>
  export default {
    props:{
      columns: Array,
      record: Object,
      onOk: Function
    },
    data() {
      let formData=Object.assign({},this.record);
      return {
        formData,
        dialogTableVisible: false,
        dialogFormVisible: false,
        formLabelWidth: '120px'
      };
    },
    computed: {
      editablecolumns(){
        return this.columns.filter(it=>it.editable!==false);
      },
      rules(){
        var res={};
        this.columns.map(it=>{  
           res[it.key]=[{ type:it.type,required: true,
            message: '请输入合法的'+(it.title||it.key),
             trigger: 'change'}]   
           }
        );
        return res;
      }
    },
    methods:{
      init(){
        this.dialogFormVisible=true;
        this.formData=Object.assign({},this.record);
      },
      
      isSelection(selection){
         return Array.isArray(selection)
      },
      handleOk () {
        let _this=this;
        this.$refs["editForm"].validate((valid) => {
          if (valid) {
             _this.dialogFormVisible = false;
             _this.onOk(this.formData)
          } else {
            // console.log('error submit!!');
            return false;
          }
        });
       
      }
    }
  };
</script>