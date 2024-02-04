module.exports = {
  root: true,
  env: { browser: true, es2020: true, node: true },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    'plugin:prettier/recommended',
    'eslint-config-prettier'
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs', 'node_modules'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh', 'prettier', 'import'],
  rules: {
    'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
    'prettier/prettier': 'error',
    'linebreak-style': ['error', 'unix'],
    semi: ['error', 'always'],
    'no-debugger': 0,
    'react/react-in-jsx-scope': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    'react-hooks/rules-of-hooks': 'error', // 检查 Hook 的规则
    'react-hooks/exhaustive-deps': 'warn', // 检查 effect 的依赖
    //0--不启用； 1--出现问题会有警告； 2--出现问题会报错
    //import导入顺序规则
    'import/order': [
      'error',
      {
        //按照分组顺序进行排序
        groups: ['builtin', 'external', 'parent', 'sibling', 'index', 'internal', 'object', 'type'],
        //通过路径自定义分组
        pathGroups: [
          {
            pattern: 'react*', //对含react的包进行匹配
            group: 'builtin', //将其定义为builtin模块
            position: 'before' //定义在builtin模块中的优先级
          },
          {
            pattern: '@/components/**',
            group: 'parent',
            position: 'before'
          },
          {
            pattern: '@/utils/**',
            group: 'parent',
            position: 'after'
          },
          {
            pattern: '@/service/**',
            group: 'parent',
            position: 'after'
          }
        ],
        //将react包不进行排序，并放在前排，可以保证react包放在第一行
        pathGroupsExcludedImportTypes: ['react'],
        // 'newlines-between': 'always', //每个分组之间换行
        //根据字母顺序对每个组内的顺序进行排序
        alphabetize: {
          order: 'asc',
          caseInsensitive: true
        }
      }
    ]
  }
};
