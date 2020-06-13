<template>
  <div class="home">
    <el-tabs tab-position="left" style="height: 85vh;">
      <el-tab-pane label="日访数量">
        <dayNum />
      </el-tab-pane>
      <el-tab-pane label="未处理任务">未处理任务</el-tab-pane>
      <el-tab-pane label="已处理任务">已处理任务</el-tab-pane>
      <el-tab-pane label="已实现任务">已实现任务</el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
const dayNum = () => import('@/views/homePages/dayNum')
export default {
  components: {
    dayNum
  },
  data() {
    return {
      menu: []
    }
  },
  created() {
    this.init()
  },
  methods: {
    init() {}
  }
}
</script>
