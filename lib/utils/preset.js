// preset是一个单选框， Vue2默认配置,  Vue3默认配置 自定义特性配置 3个选项
//  预设内置插件babel/eslint
const defaultPreset = {
  useConfigFiles: false,
  cssPreprocessor: undefined,
  plugins: {
    "@vue/cli-plugin-babel": {}, // babel
    "@vue/cli-plugin-eslint": {
      // eslint
      config: "base",
      lintOn: ["save"],
    },
  },
};

const vuePresets = {
  "Default (vue 3)": Object.assign({ vueVersion: "3" }, defaultPreset),
  "Default (vue 2)": Object.assign({ vueVersion: "2" }, defaultPreset),
};

const defaults = {
  lastChecked: undefined,
  latestVersion: undefined,
  packageManager: undefined,
  useTaobaoRegistry: undefined,
  presets: vuePresets,
};

module.exports = {
  defaultPreset,
  vuePresets,
  defaults,
};
