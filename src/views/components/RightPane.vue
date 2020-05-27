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
          <div class="toogle_theme">
            <el-select
              v-model="themeColor"
              placeholder="请选择"
              :class="`clolor-${themeColor}`"
              @change="changTheme"
            >
              <el-option
                v-for="item in themeColorArrr"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              >
              </el-option>
            </el-select>
          </div>
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
    TabConetnt,
  },
  props: {
    isCollapse: {
      type: Boolean,
      default: true,
    },
  },
  data() {
    return {
      themeColorArrr: [
        {
          value: '1',
          label: '红色',
        },
        {
          value: '2',
          label: '黄色',
        },
      ],
      // themeColor: '1',
    }
  },
  methods: {
    removeTab() {
      this.closeTab()
    },
    handleCommand(item) {
      console.log(item)
    },
    changTheme(value) {
      this.setThemeColor(value)
    },
    ...mapMutations(['setActiveTabName', 'closeTab', 'setThemeColor']),
  },
  computed: {
    editableTabsValue: {
      get() {
        return this.activeTabName
      },
      set(value) {
        this.setActiveTabName(value)
      },
    },
    ...mapState({
      activeTabName: (state) => state.menu.activeTabName,
      tabList: (state) => state.menu.tabList,
      themeColor: (state) => state.theme.themeColor,
    }),
  },
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
    position: absolute;
    width: calc(100% - 240px);
    min-width: calc(1280px - 240px);
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
        & .toogle_theme {
          margin-right: 15px;
          & .el-select {
            & >>> .el-input__inner {
              height: 30px;
            }
            & >>> .el-input__suffix {
              top: 5px;
            }
            &.clolor-1 {
              & >>> .el-input__inner {
                background-color: red;
              }
            }
            &.clolor-2 {
              & >>> .el-input__inner {
                background-color: yellow;
              }
            }
          }
        }
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
