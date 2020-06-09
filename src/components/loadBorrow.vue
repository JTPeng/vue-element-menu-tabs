<template>
  <div class="container">
    <div class="content">
      <el-tabs class="top" v-model="tabsName" @tab-click="switchTab" tab-position="left">
        <el-tab-pane
          v-for="(item, index) in tabPhaneList"
          :key="index"
          :label="item.titleName"
          :disabled="!item.isActive"
          :name="item.componentName"
        >
          <component :ref="`component-${index}`" :is="item.componentName"></component>
        </el-tab-pane>
      </el-tabs>
      <div class="bottom">
        <el-button size="small" type="primary" @click="saveDraft">保存草稿</el-button>
        <el-button size="small" type="primary" v-if="activeIndex !== 0" @click="upStep"
          >上一步</el-button
        >
        <el-button
          size="small"
          type="default"
          v-if="activeIndex !== tabPhaneList.length - 1"
          @click="nextStep"
          >下一步</el-button
        >
        <el-button v-else type="success" size="small"> 提交</el-button>
      </div>
    </div>
  </div>
</template>

<script>
const stageOne = () => import('@/tabContent/stageOne')
const stageTwo = () => import('@/tabContent/stageTwo')
const stageThree = () => import('@/tabContent/stageThree')
const stageFour = () => import('@/tabContent/stageFour')
const stageFive = () => import('@/tabContent/stageFive')
export default {
  components: {
    stageOne,
    stageTwo,
    stageThree,
    stageFour,
    stageFive,
  },
  data() {
    return {
      tabsName: 'stageOne',
      tabPhaneList: [
        {
          isActive: true,
          titleName: '用户管理',
          componentName: 'stageOne',
        },
        {
          isActive: false,
          titleName: '配置管理',
          componentName: 'stageTwo',
        },
        {
          isActive: false,
          titleName: '角色管理',
          componentName: 'stageThree',
        },
        {
          isActive: false,
          titleName: '定时任务补偿',
          componentName: 'stageFour',
        },
        {
          isActive: false,
          titleName: '任务结束',
          componentName: 'stageFive',
        },
      ],
      activeIndex: 0,
    }
  },
  methods: {
    switchTab(event) {
      const { name, index } = event
      this.tabsName = name
      this.activeIndex = index
    },
    saveDraft() {
      console.log('保存草稿')
    },
    upStep() {
      let { activeIndex, tabPhaneList } = this
      if (activeIndex > 0) {
        activeIndex -= 1
        this.tabsName = tabPhaneList[activeIndex].componentName
        this.activeIndex = activeIndex
      }
    },
    nextStep() {
      let { tabPhaneList, activeIndex, tabsName } = this
      const currentIndex = tabPhaneList.findIndex(({ componentName }) => componentName === tabsName)
      if (currentIndex + 1 !== tabPhaneList.length) {
        this.activeIndex = activeIndex = currentIndex + 1
        if (tabPhaneList[activeIndex].isActive) {
          this.tabsName = tabPhaneList[activeIndex].componentName
        } else {
          const res = this.$refs[`component-${activeIndex}`][0].isNext
          if (res) {
            this.$message.success('保存成功')
            this.tabPhaneList[activeIndex].isActive = true
            this.tabsName = this.tabPhaneList[activeIndex].componentName
          } else {
            this.activeIndex -= 1
            this.$message.warning('数据未保存')
          }
        }
      }
    },
  },
}
</script>
