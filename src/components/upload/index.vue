<template>
  <div class="upload">
    <!-- <el-upload
      class="upload-demo"
      action="https://jsonplaceholder.typicode.com/posts/"
      :on-change="handleChange"
      :file-list="fileList3">
      <el-button size="small" type="primary">点击上传</el-button>
      <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
    </el-upload> -->
    <!-- <video controls="controls" width="70%" height="400px;" src="http://v.youku.com/v_show/id_XMzk2NTA2ODc2OA==.html?spm=a2hmv.20009921.posterMovieGrid86981.5~5~5~1~3!2~A"></video> -->
    <!-- <ul class="videoList">
      <li v-for="(item, index) in list" :key="index">{{item.name}}</li>
    </ul> -->
  </div>
</template>

<script>
// import filmSearch from '@/api/filmSearch.js'

export default {
  data () {
    return {
      list: [],
      query: {
        type: 'list',
        class: 1,
        page: 1
      }
    }
  },
  created () {
    // this.getFilmList()
  },
  methods: {
    // getFilmList(){
    //   filmSearch.getFilmList(this.query)
    //   .then(res => {
    //     // console.log(res)
    //     this.list = res.data.data
    // })
    // }
  }
}
</script>

<style>
  .videoList{
    display: flex;
  }
  .videoList li{
    flex: 1;
    border: 1px solid #ccc;
    padding: 10px;
    /* width: 300px; */
  }
</style>

