module.exports = {
  title: '前端资源',
  description: '本文收集学习过程中收藏的资源 相信对大家会有帮助 喜欢的可以star, 持续更新中大家可以watch',
  base: '/free-resources/',
  themeConfig: {
    displayAllHeaders: true,
    nav: [
      { text: '前端', link: '/FRONTEND' },
      { text: '面试', link: '/INTERVIEW' },
      { text: '精品系列', link: '/LIST' },
    ],
    sidebar: [
      ['/FRONTEND', '前端'],
      ['/SOURCECODE', '源码解析'],
      ['/CHECKLIST', '前端自检'],
      ['/DIY', '自己动手'],
      ['/INTERVIEW', '面试'],
      ['/EXPERIENCE', '前辈经验'],
      ['/LIST', '精品系列'],
      ['/BACKEND', '后端&运维'],
      ['/SKILLS', '常用技巧'],
      ['/GITHUB', 'GITHUB优秀开源项目'],
      ['/MATH', '数学'],
      ['/SOFTWARE/', '装机必备及软件安装'],
      {
        title: '其他',   // 必要的
        collapsable: false, // 可选的, 默认值是 true,
        sidebarDepth: 1,    // 可选的, 默认值是 1
        children: [
          ['/BLOG/', 'abc-club技术博客'],
          ['/FOLLOW', '你需要关注的公众号、博客、大神等'],
          ['/NEWS', '行业新闻'],
          ['/OTHER', '其他'],
        ]
      },
    ]
  }
}
