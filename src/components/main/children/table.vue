<template>
  <div>
    <el-button @click="handleDownload" type="success">导出excel</el-button>
    <el-table
      :data="tableData"
      v-loading="loading"
      :stripe="true"
      :border="true"
      :highlight-current-row="true"
      size="small"
      style="width: 100%">
      <el-table-column
        prop="date"
        label="Date"
        width="180">
      </el-table-column>
      <el-table-column
        prop="name"
        label="Name"
        width="180">
      </el-table-column>
      <el-table-column
        prop="address"
        label="Url">
      </el-table-column>
      <el-table-column
        fixed="right"
        label="操作"
        width="100">
        <template slot-scope="scope">
          <el-button type="success" size="small">操作</el-button>
        </template>
      </el-table-column>
    </el-table>
    <input type="checkbox" v-model="arr" :value="1">
    <input type="checkbox" v-model="arr" :value="2">
    <input type="checkbox" v-model="arr" :value="3">
    {{arr}}
    <input type="text" v-model.lazy="text">
    {{text}}
  </div>
</template>

<script>

export default {
  data (){
    return {
      text: '1111',
      arr: [1,2,3],
      flag: true,
      loading: false,
      list: null,
      downloadLoading: false,
      filename: '',
      autoWidth: true,
      bookType: 'xlsx',
      tableData: [{
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-04',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1517 弄'
      }, {
        date: '2016-05-01',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1519 弄'
      }, {
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1516 弄'
      }]
    }
  },
  methods: {
    // 导出
   handleDownload() {
      this.downloadLoading = true
      import('@/excel2/Export2Excel').then(excel => {
        const tHeader = ['date', 'name', 'address']
        const filterVal = ['date', 'name', 'address']
        const list = this.tableData
        const data = this.formatJson(filterVal, list)
        excel.export_json_to_excel({
          header: tHeader,
          data,
          filename: this.filename,
          autoWidth: this.autoWidth,
          bookType: this.bookType
        })
        this.downloadLoading = false
      })
    },
    formatJson(filterVal, jsonData) {
      return jsonData.map(v => filterVal.map(j => {
        if (j === 'timestamp') {
          return parseTime(v[j])
        } else {
          return v[j]
        }
      }))
    }
  }
}
</script>

<style scoped>
</style>
