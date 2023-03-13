const inquirer = require("inquirer");
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
