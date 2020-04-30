<template>
  <div class="left_nav">
    <div class="logo" :class="isCollapse ? 'hidden':''">
      <i class="el-icon-menu"></i>
      <a :class="isCollapse ? 'hidden':''">后台管理系统</a>
    </div>
    <el-menu
      :default-active="activeTabName"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      background-color="#001e3b"
      text-color="#fff"
      active-text-color="#ffd04b"
      :collapse="isCollapse"
      :collapse-transition="false"
    >
      <subMenu :menuList="menuList" :isCollapse="isCollapse" />
    </el-menu>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
import subMenu from './subMenu'
import { menuList } from '../../config/menuList'

export default {
  components: {
    subMenu
  },
  props: {
    isCollapse: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      menuList: [...menuList]
    }
  },
  methods: {
    handleOpen() {},
    handleClose() {},
    ...mapMutations(['setActiveTabName'])
  },
  computed: {
    ...mapState({
      tabList: state => state.menu.tabList,
      activeTabName: state => state.menu.activeTabName
    })
  }
}
</script>

<style lang="postcss" scoped>
.left_nav {
  height: 100vh;
  overflow-x: hidden;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
  background-color: #001e3b;
  & .logo {
    position: fixed;
    z-index: 999;
    width: 15rem;
    height: 60px;
    font-size: 16px;
    color: #ffffff;
    background-color: #001e3b;
    display: flex;
    align-items: center;
    box-sizing: border-box;
    padding: 0 25px 0 20px;
    &.hidden {
      width: 64px;
    }
    & i {
      margin-left: 5px;
    }
    & a {
      margin-left: 20px;
      &.hidden {
        display: none;
      }
    }
  }
  & .el-menu {
    margin-top: 56px;
    border: none;
  }
  & >>> .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 15rem;
  }
}
</style>