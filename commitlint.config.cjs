module.exports = { extends: ["@commitlint/config-conventional"] };

// feat: 新增一个功能
// fix: 修复一个Bug
// docs: 文档变更
// style: 代码格式（不影响功能，例如空格、分号等格式修正）
// refactor: 代码重构
// perf: 改善性能
// test: 测试
// build: 变更项目构建或外部依赖（例如scopes: webpack、gulp、npm等）
// ci: 更改持续集成软件的配置文件和package中的scripts命令，例如scopes: Travis, Circle等
// chore: 变更构建流程或辅助工具
// revert: 代码回退

// feat: {
//   description: 'A new feature',
//   title: 'Features',
//   emoji: '✨',
// },
// fix: {
//   description: 'A bug fix',
//   title: 'Bug Fixes',
//   emoji: '🐛',
// },
// docs: {
//   description: 'Documentation only changes',
//   title: 'Documentation',
//   emoji: '📚',
// },
// style: {
//   description:
//     'Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)',
//   title: 'Styles',
//   emoji: '💎',
// },
// refactor: {
//   description:
//     'A code change that neither fixes a bug nor adds a feature',
//   title: 'Code Refactoring',
//   emoji: '📦',
// },
// perf: {
//   description: 'A code change that improves performance',
//   title: 'Performance Improvements',
//   emoji: '🚀',
// },
// test: {
//   description: 'Adding missing tests or correcting existing tests',
//   title: 'Tests',
//   emoji: '🚨',
// },
// build: {
//   description:
//     'Changes that affect the build system or external dependencies (example scopes: gulp, broccoli, npm)',
//   title: 'Builds',
//   emoji: '🛠',
// },
// ci: {
//   description:
//     'Changes to our CI configuration files and scripts (example scopes: Travis, Circle, BrowserStack, SauceLabs)',
//   title: 'Continuous Integrations',
//   emoji: '⚙️',
// },
// chore: {
//   description: "Other changes that don't modify src or test files",
//   title: 'Chores',
//   emoji: '♻️',
// },
// revert: {
//   description: 'Reverts a previous commit',
//   title: 'Reverts',
//   emoji: '🗑',
// },
