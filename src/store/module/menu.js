const Home = (resolve) => require(['@/views/Home'], resolve);
export default {
  state: {
    activeTabName: 'home',
    tabList: [
      {
        label: '主页',
        name: 'home',
        disabled: false,
        closable: false,
        component: Home,
      },
    ],
  },
  mutations: {
    addTab(state, info) {
      const { tabList } = state;
      const { title, name } = info;
      if (tabList.filter((f) => f.name == title) == 0) {
        let component = (resolve) => require([`@/components/${title}`], resolve);
        state.tabList.push({
          label: name,
          name: title,
          disabled: false,
          closable: true,
          component: component,
        });
      }
      state.activeTabName = title;
    },
    setActiveTabName(state, info) {
      state.activeTabName = info;
    },
    closeTab(state, name) {
      const { tabList } = state;
      let tab = tabList.filter((f) => f.name == name)[0];
      let index = tabList.indexOf(tab);
      if (index != tabList.length - 1) {
        state.activeTabName = state.tabList[index + 1].name;
      } else {
        state.activeTabName = state.tabList[index - 1].name;
      }
      state.tabList = state.tabList.filter((f) => f.name != name);
    },
  },
  actions: {},
  getters: {},
};
