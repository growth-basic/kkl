const { program } = require("commander");
const chalk = require("chalk");
const inquirer = require("inquirer");

// program.parse();

//1. 添加名称，描述， 版本号 用法提示

program
  .name("cli")
  .description("这是一个神奇的脚手架")
  .version("0.0.1")
  .usage("<command> [options]");

program
  .command("createPage")
  .description("生成一个页面") // 命令描述
  .argument("<name>", "文件名字") // <name> 表示name为必填
  .action((name, options) => {
    // 输入createPage命令触发的逻辑实现
    console.log(`${chalk.red("添加")}了一个文件: ${chalk.bgGreen(name)}`);
  });
// chalk: 是一个终端字符美化工具

//  2. 添加createPage命令

// 1. commander: 用于创建终端的命令描述 `npm install commander`
// 2. chalk: 用于添加终端命令的颜色 `npm install chalk@4.1.2`
// 3. inquirer: 交互式命令行界面,提供询问操作者问题, 获取并解析用户输入，多层级提示，提供错误回调，检测用户输入合法等能力
//  `npm install inquirer@8.2.5`
// ejs模版： 通过模版进行动态数据渲染

const configArr = [
  {
    type: "input", // type 表示类型 input 输入框 list 单选 checkbox 多选 confirm 确认
    name: "projectName", // 键名
    message: "项目名称", // 名称
    default: "vue-demo", // 默认值
  },
  {
    type: "list",
    name: "projectType",
    message: "项目类型",
    default: "vue2",
    choices: [
      { name: "vue2", value: "vue2" },
      { name: "vue3", value: "vue3" },
      { name: "react", value: "react" },
    ],
  },
  {
    type: "checkbox",
    name: "plugins",
    message: "插件选择",
    choices: [
      { name: "babel", value: "babel" },
      { name: "eslint", value: "eslint" },
      { name: "vue-router", value: "vue-router" },
    ],
  },
  {
    type: "confirm",
    name: "confirm",
    message: "confirm",
  },
];

inquirer
  .prompt(configArr)
  .then((answers) => {
    console.log("=========");
    console.log(answers);
  })
  .catch((error) => {
    console.log("---------");
    console.log(error);
  });

program.parse();
