<template>
  <div class="subMenu-container">
    <div v-for="(menu,index) in menuList" :key="index">
      <div v-if="menu.children">
        <el-submenu :index="menu.title">
          <template slot="title">
            <i :class="menu.icon"></i>
            <span>{{ isCollapse ? '':menu.name}}</span>
          </template>
          <el-menu-item-group v-for="(content,i) in menu.children" :key="i">
            <div v-if="!content.children">
              <el-menu-item
                @click="clickMenu(content,content.title)"
                :index="content.title"
              >{{content.name}}</el-menu-item>
            </div>
            <div v-else>
              <subMenu :menuList="content.children" />
            </div>
          </el-menu-item-group>
        </el-submenu>
      </div>
      <div v-else>
        <div class="noMenu">
          <i :class="menu.icon"></i>
          <span @click="clickMenu(menu,menu.title)" slot="title">{{ isCollapse ? '':menu.name}}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations, mapState } from 'vuex'
export default {
  name: 'SubMenu',
  props: {
    menuList: {
      type: Array,
      default: []
    },
    isCollapse: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {}
  },
  methods: {
    clickMenu(name) {
      const { tabList } = this
      if (tabList.length > 8) {
        this.$message.warning('最多只能打开8个标签')
      } else {
        this.addTab(name)
      }
    },
    ...mapMutations(['addTab'])
  },
  computed: {
    ...mapState({
      tabList: state => state.menu.tabList
    })
  }
}
</script>

<style lang="postcss" scoped>
.subMenu-container {
  & .noMenu {
    box-sizing: border-box;
    padding: 0 20px;
    height: 56px;
    display: flex;
    align-items: center;
    color: #fff;
    font-size: 14px;
    & i {
      font-size: 18px;
      width: 24px;
      margin-right: 5px;
    }
    & span {
      cursor: pointer;
    }
  }
}
</style>