export const menuList = [
  {
    title: 'zeroMenu',
    name: '零级菜单',
    icon: 'el-icon-s-order',
  },
  {
    title: 'oneMenu',
    name: '一级菜单',
    icon: 'el-icon-document',
    children: [
      {
        title: 'loadApply',
        name: '一级菜单查询一',
      },
      {
        title: 'loadBorrow',
        name: '一级菜单查询二',
      },
      {
        title: 'loadChange',
        name: '一级菜单查询三',
      },
      {
        title: 'Financial',
        name: '一级菜单查询四',
      },
    ],
  },
  {
    title: 'twoMenu',
    name: '二级菜单',
    icon: 'el-icon-search',
    children: [
      {
        title: 'approveApply',
        name: '二级菜单申请一',
      },
      {
        title: 'customerApply',
        name: '二级菜单申请二',
      },
      {
        children: [
          {
            title: 'customerContent',
            name: '二级菜单内容查询',
            children: [
              {
                title: 'financialSearch',
                name: '二级菜单内容查询一',
              },
              {
                title: 'customer',
                name: '二级菜单内容查询二',
              },
            ],
          },
        ],
      },
    ],
  },
  {
    title: 'threeMenu',
    name: '三级菜单',
    icon: 'el-icon-s-operation',
    children: [
      {
        title: 'projectManager',
        name: '三级菜单管理一',
      },
      {
        title: 'enterpriseManager',
        name: '三级菜单管理二',
      },
      {
        children: [
          {
            title: 'projectApprove',
            name: '三级菜单审批',
            children: [
              {
                title: 'approveOne',
                name: '三级菜单审批一',
              },
              {
                title: 'approveTwo',
                name: '三级菜单审批二',
              },
              {
                children: [
                  {
                    title: 'projectFinal',
                    name: '三级菜单终审',
                    children: [
                      {
                        title: 'finalOne',
                        name: '三级菜单终审一',
                      },
                      {
                        title: 'finalTwo',
                        name: '三级菜单终审二',
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
];
