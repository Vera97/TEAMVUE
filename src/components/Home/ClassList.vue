<template>
  <el-row>
    <el-col :span="4" v-for="(o, index) in 5" :key="o" :offset="index > 0 ? 1 : 0">
      <el-card :body-style="{ padding: '0px' }">
        <div style="padding: 14px;">
          <span>{{title+o}}</span>
          <div class="bottom">
            <span class="info">{{introduction+o}}</span>
            <el-button type="text" class="button">查看详情</el-button>
          </div>
        </div>
      </el-card>
    </el-col>
    <el-col>
    <el-button-group>
      <el-button type="primary" size="mini" icon="el-icon-arrow-left">上一页</el-button>
      <el-button size="mini"  v-for="(o, index) in 5" :key="o" :offset="index > 0 ? 1 : 0">{{o}}</el-button>
      <el-button type="primary" size="mini">下一页<i class="el-icon-arrow-right el-icon--right"></i></el-button>
    </el-button-group>
    </el-col>
  </el-row>
</template>

<script>
    export default {
        name: "ClassList",
      data(){
          return {
              title:'科目xxxx',
              introduction:'一句话的简介xxxx',
            // items:[
            //   {title:'科目00001'},{introduction:'一句话的简介000001'},
            //   {title:'科目00002'},{introduction:'一句话的简介000002'},
            //   {title:'科目00003'},{introduction:'一句话的简介000003'},
            //   {title:'科目00004'},{introduction:'一句话的简介000004'},
            //   {title:'科目00005'},{introduction:'一句话的简介000005'}
            // ],

          }
      }

    }
</script>

<style scoped>
  .el-col{
    padding-bottom:20px;
    text-align: center;
  }
  .bottom{
    padding-top:10px;
  }
  .info{
    color:#CCCCCC;
  }
</style>
