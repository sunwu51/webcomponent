# React + Ant Design
# 组件介绍
## 1 List
```
Props:
  columns: PropTypes.array.isRequired
  dataSource: PropTypes.array.isRequired
  onAdd: PropTypes.func.isRequired
  onDelete: PropTypes.func.isRequired
  onUpdate: PropTypes.func.isRequired
```
colums是列的数组，数组的每个元素是Object例如
```json
  {key:'userid',title:'用户ID',isId:true,editable:false}
```
其中`key`