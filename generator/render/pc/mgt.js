module.exports = (api, options) => {
  // 命令
  api.extendPackage({
    scripts: {
      serve: 'vue-cli-service serve',
      'build:uat': 'vue-cli-service build --mode uat',
      'build:pre': 'vue-cli-service build --mode pre',
      build: 'vue-cli-service build',
      lint: 'vue-cli-service lint',
      commit: 'npx git-cz',
      release: 'standard-version',
      changelog: 'conventional-changelog -p angular -i CHANGELOG.md -w -s -r 0',
      eslint: "eslint --fix --format codeframe 'src/**/**.{js,vue}'"
    }
  })

  // 安装一些基础公共库
  api.extendPackage({
    dependencies: {
      axios: '^0.19.2',
      'core-js': '^3.6.4',
      'js-cookie': '^2.2.1',
      'js-sha256': '^0.9.0',
      moment: '^2.25.3',
      qs: '^6.9.4',
      'sanitize-html': '^1.23.0',
      underscore: '^1.10.2',
      vue: '^2.6.11',
      'vue-router': '^3.1.6',
      vuex: '^3.1.3',
      'vuex-map-fields': '^1.4.0'
    },
    devDependencies: {
      '@vue/cli-plugin-babel': '~4.3.0',
      '@vue/cli-plugin-eslint': '~4.3.0',
      '@vue/cli-plugin-router': '~4.3.0',
      '@vue/cli-plugin-vuex': '~4.3.0',
      '@vue/cli-service': '~4.3.0',
      '@vue/eslint-config-standard': '^5.1.2',
      'babel-eslint': '^10.1.0',
      'babel-plugin-component': '^1.1.1',
      'conventional-changelog-cli': '^2.0.31',
      'cz-conventional-changelog': '^3.2.0',
      eslint: '^6.7.2',
      'eslint-plugin-import': '^2.20.2',
      'eslint-plugin-node': '^11.1.0',
      'eslint-plugin-promise': '^4.2.1',
      'eslint-plugin-standard': '^4.0.1',
      'eslint-plugin-vue': '^6.2.2',
      ghooks: '^2.0.4',
      'git-repo-info': '^2.1.1',
      'lint-staged': '^10.2.2',
      'node-sass': '^4.13.1',
      'sass-loader': '^8.0.2',
      'standard-version': '^8.0.0',
      'validate-commit-msg': '^2.14.0',
      'vue-template-compiler': '^2.6.11'
    }
  })
  // githook validate-commit-msg git-cz相关配置
  api.extendPackage({
    config: {
      ghooks: {
        'pre-commit': 'lint-staged',
        'commit-msg': 'validate-commit-msg'
      },
      'validate-commit-msg': {
        types: ['feat', 'fix', 'docs', 'style', 'refactor', 'perf', 'test', 'build', 'ci', 'chore', 'revert'],
        scope: {
          required: false,
          allowed: ['*'],
          validate: false,
          multiple: false
        },
        warnOnFail: false,
        maxSubjectLength: 100,
        subjectPattern: '.+',
        subjectPatternErrorMsg: 'subject does not match subject pattern!',
        helpMessage: '',
        autoFix: false
      },
      commitizen: {
        path: './node_modules/cz-conventional-changelog'
      }
    },
    'lint-staged': {
      'src/**/**.{js,vue}': [
        'vue-cli-service lint --fix',
        'git add'
      ]
    }
  })

  // 读取模版
  api.render('../../template/mgt')
}
