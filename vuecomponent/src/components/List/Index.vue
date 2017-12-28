<template>
<div>
    <edit-dialog :columns='columns' :record="{}" :onOk="handleAdd">
        <el-button type="primary" size="small">新建</el-button>
    </edit-dialog>
    <el-table
      :data="dataSource"
      
      style="width: 100%">
      <template v-for="col in columns">
           <el-table-column
                :prop="col.key"
                :label="col.title || col.key"
                >
           </el-table-column>
      </template>    
      <el-table-column
                prop="action"
                label="操作"
                >
                <template slot-scope="scope">
                    <del-button :record="scope.row" :onOk="handleDelete">删除</del-button>
                    <edit-dialog :columns='columns' :record="scope.row" :onOk="handleUpdate">
                        <el-button type="text" size="small">编辑</el-button>
                    </edit-dialog>
                </template>
      </el-table-column>
    </el-table>
</div>
</template>

<script>
    import DelButton from './DelButton'
    import EditDialog from './EditDialog'
    export default {
      components:{
          DelButton,
          EditDialog
      },
      props: {
            columns: Array,
            dataSource: Array,
            onAdd: Function,
            onDelete: Function,
            onUpdate: Function,
      },
      computed:{
         
      },
      methods: {
          handleAdd(record){
              this.onAdd(record)
          },
          handleUpdate(record){
              this.onUpdate(record) 
          },
          handleDelete(record){
              this.onDelete(record)
          }
      }
    }
</script>