<template>
  <div class="main">
    <el-button type="default" :class="`clolor-${themeColor}`">按钮</el-button>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  computed: {
    ...mapState({
      themeColor: (state) => state.theme.themeColor,
    }),
  },
}
</script>
