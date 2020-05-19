<template>
  <div class="menu_container">
    <div class="nav">
      <LeftNav ref="leftnav" :isCollapse="isCollapse" />
    </div>
    <div class="pane">
      <RightPane @changStatus="changStatus" :isCollapse="isCollapse" />
    </div>
  </div>
</template>

<script>
import LeftNav from '@/views/components/LeftNav.vue'
import RightPane from '@/views/components/RightPane.vue'
import { mapState } from 'vuex'
export default {
  components: {
    LeftNav,
    RightPane
  },
  data() {
    return {
      isCollapse: false
    }
  },
  methods: {
    changStatus() {
      this.isCollapse = !this.isCollapse
    }
  }
}
</script>

<style lang="postcss" scoped>
.menu_container {
  display: flex;
  min-width: 1280px;
  & .pane {
    width: calc(100% - 240px);
    overflow-x: hidden;
    overflow-y: auto;
  }
}
</style>