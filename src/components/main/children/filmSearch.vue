<template>
  <div id="ax">
    <el-container>
      <el-row>
        <el-input style="width:200px;" 
          v-model="input" clearable maxlength="100" 
          placeholder="请输入搜索内容">
        </el-input>
      </el-row>
    </el-container>
     <el-carousel :interval="4000" type="card" height="200px">
        <el-carousel-item v-for="item in 6" :key="item">
          <h3>{{ item }}</h3>
        </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
// import filmSearch from '@/api/filmSearch.js'

export default {
  data () {
    return {
      input: 'list',
      msg: '',
      query: {
        type: '',
        class: 1,
        page: 1
      }
    }
  },
  // type：类型 =>> so 搜索，list 分类列表，info 获取视频信息
  // class：分类 =>> 留空或=all获取全部
  // 父级 =>> 1电影，2连续剧，3综艺，4动漫
  // 连续剧 ->> 12内地，13港台，14日本韩国，15国外
  // page：页数
  // word：搜索关键词
  // id：获取视频详细信息的ID
  methods: {
    // getFilmList(){
    //   filmSearch.getFilmList(this.query)
    //   .then(res => {
    //   })
    // }
  },
  created () {
    // this.getFilmList()
  }
}
</script>

<style>
  .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 200px;
    margin: 0;
  }
  
  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }
  
  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
</style>
