module.exports = {
  // 注册stylelint的prettier插件
  plugins: ['stylelint-prettier'],
  extends: [
    // standard规则集合
    'stylelint-config-standard',
    // 样式属性顺序规则
    'stylelint-config-recess-order',
    'stylelint-prettier/recommended',
    'stylelint-config-standard-scss'
  ],
  // 配置 rules
  rules: {
    // 开启 Prettier 自动格式化功能
    'prettier/prettier': true,
    'no-descending-specificity': null,
    'selector-pseudo-class-no-unknown': [
      true,
      {
        ignorePseudoClasses: ['global']
      }
    ]
  }
};
