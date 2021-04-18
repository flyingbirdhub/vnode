<template>
  <div id="app">
    <el-row :gutter="15">
      <el-col :span="20">
        <BlockMove></BlockMove>
      </el-col>
      <el-col :span="4">
        <el-row>
          <el-button @click="move2Left" type="primary">左上角</el-button>
        </el-row>
        <el-row>
          <el-button @click="move2Right" type="info">右上角</el-button>
        </el-row>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import BlockMove from './components/block-move.vue';
import { mapMutations } from 'vuex';

export default {
  name: 'App',
  components: {
    BlockMove,
  },
  methods: {
    ...mapMutations(["updateStyle"]),
    move2Left() {
      this.updateStyle({
        top: '0',
        bottom: 'auto',
        left: '0',
        right: 'auto',
      });
    },
    move2Right() {
      this.updateStyle({
        top: '0',
        bottom: 'auto',
        left: 'auto',
        right: '0',
      });
    },
  },
}
</script>

<style>
</style>
