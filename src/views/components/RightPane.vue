<template>
  <div class="right-pane">
    <div class="fix-top">
      <el-header class="header-top">
        <div
          class="header_left"
          :class="isCollapse ? 'el-icon-s-fold' : 'el-icon-s-unfold'"
          @click="$emit('changStatus')"
        ></div>
        <div class="header_right">
          <div class="el-icon-switch-button left"></div>
          <div class="user">admin</div>
        </div>
      </el-header>
      <el-tabs class="tabs-content" v-model="editableTabsValue" type="card" @tab-remove="closeTab">
        <el-tab-pane
          v-for="item in tabList"
          :key="item.name"
          :label="item.label"
          :name="item.name"
          :closable="item.closable"
        ></el-tab-pane>
      </el-tabs>
    </div>
    <div class="content">
      <TabConetnt></TabConetnt>
    </div>
  </div>
</template>

<script>
import TabConetnt from './tabConetnt'
import { mapState, mapMutations } from 'vuex'
export default {
  components: {
    TabConetnt
  },
  props: {
    isCollapse: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {}
  },
  methods: {
    removeTab() {
      this.closeTab()
    },
    ...mapMutations(['setActiveTabName', 'closeTab'])
  },
  computed: {
    editableTabsValue: {
      get() {
        return this.activeTabName
      },
      set(value) {
        this.setActiveTabName(value)
      }
    },
    ...mapState({
      activeTabName: state => state.menu.activeTabName,
      tabList: state => state.menu.tabList
    })
  }
}
</script>

<style lang="postcss" scoped>
.right-pane {
  height: 100vh;
  overflow-x: hidden;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
  /* overflow: hidden; */
  & .fix-top {
    position: fixed;
    width: 85%; /* 最好动态计算 */
    background-color: #fff;
    & .header-top {
      display: flex;
      justify-content: space-between;
      box-sizeing: border-box;
      padding: 20px;
      & .header_left {
        font-size: 20px;
      }
      & .header_right {
        display: flex;
        & .left {
          box-sizing: border-box;
          font-size: 20px;
          padding-right: 20px;
          border-right: 1px solid #eeeeee;
          margin-right: 20px;
        }
        & .user {
          font-size: 16px;
        }
      }
    }
    & .tabs-content {
    }
  }
  & .content {
    box-sizing: border-box;
    padding: 121px 20px 20px;
  }
}
</style>