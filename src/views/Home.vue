<template>
  <div class="home">
    <el-tabs tab-position="left" style="height: 85vh;">
      <el-tab-pane v-for="item in menu" :key="item.nameKey" :label="item.label" lazy="true">
        <dayNum :nameKey="item.nameKey" />
      </el-tab-pane>
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
      menu: [
        {
          nameKey: 'dayNum-0',
          label: '日访数量'
        },
        {
          nameKey: 'dayNum-1',
          label: '未处理任务'
        },
        {
          nameKey: 'dayNum-2',
          label: '已处理任务'
        },
        {
          nameKey: 'dayNum-3',
          label: '已实现任务'
        }
      ]
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
