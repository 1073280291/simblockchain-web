<template>
<el-form :model="transData">
  <div style="display: flex; align-items: center">
    <el-popover placement="right" :width="400" trigger="click" :show-after = "1000">
      <template #reference>
        <el-button style="margin-right: 16px" @click="getOutputData(aaaa)">1,2,3</el-button>
      </template>
      <el-button v-for="item in datas" type="text">{{item}}</el-button>
    </el-popover>
    <el-button type="text" icon="el-icon-download" @click="handleDownload">模版下载</el-button>
  </div>
</el-form>
</template>

<script lang="ts" setup>
import { reactive, ref } from "vue";
 const handleDownload = () =>{
    window.location.href = '../../../assets/blockchain.json'
 }
const getOutputData  = (val) => {
  let a  = val.split(",");
  datas.length = 0;
  datas[0] = a[0];
  datas[1] = a[1];
  datas[2] = a[2];
}
let aaaa = "1,2,3"
let datas = reactive([0,1,2]); 
const gridData = [
  {
    date: '2016-05-02',
    name: 'Jack',
    address: 'New York City',
  },
  {
    date: '2016-05-04',
    name: 'Jack',
    address: 'New York City',
  },
  {
    date: '2016-05-01',
    name: 'Jack',
    address: 'New York City',
  },
  {
    date: '2016-05-03',
    name: 'Jack',
    address: 'New York City',
  },
]
</script>