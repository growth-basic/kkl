const inquirer = require("inquirer");
const { defaults } = require("./utils/preset");
const PromptModuleAPI = require("./PromptModuleAPI");
const { getPromptModules } = require("./utils/prompt");

class Creator {
  constructor(name, context) {
    // 构造函数 初始化
    this.name = name;
    //  项目路径 含名称
    this.context = process.env.VUE_CLI_CONTEXT = context;
    // package.json 数据
    this.pkg = {};
    // 包管理工具
    this.pm = null;
    // 预设提示选项 (单选)
    this.presetPrompt = this.resolvePresetPrompts();
    // 自定义特性提示选项框(复选框) Manual select features
    this.featurePrompt = this.resolveFeaturePrompts();
    // 其他提示框
    this.injectedPrompts = [];
    this.promptCompleteCbs = [];
    // 注册可插拔特性
    const promptAPI = new PromptModuleAPI(this);
    const promptModules = getPromptModules();
    promptModules.forEach((m) => m(promptAPI));
    // 保存相关配置选项  是否保存自定义配置下次使用, babel/eslint是否生成新文件
    this.outroPrompts = this.resolveOutroPrompts();
    inquirer.prompt(this.resolveFinalsPrompts()).then((res) => {
      console.log("选择的选项:");
      console.log(res);
    });
  }
  // 保存相关已选择的配置选项
  resolveOutroPrompts() {
    const outroPrompts = [
      // 单选框提示选项
      {
        name: "useConfigFiles",
        when: (answers) => answers.preset === "__manual__", // 手动选择特性
        type: "list",
        message: "Where do you prefer placing config for Babel, Eslint, etc.?",
        choices: [
          {
            name: "In dedicated config files",
            value: "files",
          },
          {
            name: "In package.json",
            value: "pkg",
          },
        ], // 复选框选项值
        pageSize: 10,
      },
      // 确认提示框
      {
        name: "save",
        when: (answers) => answers.preset === "__manual__", // 手动选择特性
        type: "confirm",
        message: "Save this as a preset for feature projects",
        default: false,
      },
      // 输入提示框
      {
        name: "saveName",
        when: (answers) => answers.save,
        type: "input",
        message: "Save preset as:",
      },
    ];
    return outroPrompts;
  }

  resolveFeaturePrompts() {
    return {
      name: "features",
      when: (answers) => answers.preset === "__manual__", // 手动选择特性
      type: "checkbox",
      message: "Check the features needed for your project",
      choices: [], // 复选框选项值
      pageSize: 10,
    };
  }
  resolveFinalsPrompts() {
    const prompts = [
      this.presetPrompt,
      this.featurePrompt,
      ...this.outroPrompts,
      ...this.injectedPrompts,
    ];

    return prompts;
  }
  //   获取预设选项
  resolvePresetPrompts() {
    const presetChoices = Object.entries(defaults.presets).map(
      ([name, preset]) => {
        console.log(name, preset);
        return {
          name: `${name}(${Object.keys(preset.plugins).join(",")})`, // 将预设的插件放到提示中
          value: name,
        };
      }
    );
    return {
      name: "preset", // preset记录用户选择的选项值
      type: "list",
      message: `Please pick a preset:`,
      choices: [
        ...presetChoices, // vue2默认配置 vue3默认配置
        {
          name: "Manually select features", // 手动选择配置 自定义特性配置
          value: "__manual__",
        },
      ],
    };
  }

  async create(cliOptions = {}, preset = null) {
    // 处理用户的输入工作
    // const preset = await this.promptAndResolvePreset();
    // 初始化安装环境
    // await this.initPackageManagerEnv(preset);
    // 根据用户的输入生成项目文件，生成配置文件
    // const generator = await this.generate(preset);
    // 根据生成的配置文件输出生成readme文件
    // await this.generateReadMe(generator);
    // this.finished();
  }
  promptAndResolvePreset() {}
}

module.exports = Creator;
