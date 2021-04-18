<template>
  <div ref="container" class="root">
    <div ref="el" class="block" :style="style"></div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import { attachMouseMoveHandler, attachMouseDownHandler, attachMouseUpHandler } from '../drag-move';
export default {
  name: 'BlockMove',
  computed: {
    ...mapState(['style']),
  },
  mounted() {
    attachMouseDownHandler(this.$refs.container);
    attachMouseMoveHandler((diffPos) => this.updateBlockStyle(diffPos));
    attachMouseUpHandler(this.$refs.container);
  },
  methods: {
    updateBlockStyle(diffPos) {
      console.log(diffPos);
      const { el } = this.$refs;
      el.style.top = `${parseInt(el.style.top, 10) + diffPos.y}px`;
      el.style.left = `${parseInt(el.style.left, 10) + diffPos.x}px`;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.root {
  position: relative;
  width: 100%;
  height: 100px;
  border: 1px solid blue;
}

.block {
  width: 30px;
  height: 30px;
  background-color: red;
  position: absolute;
}
</style>
