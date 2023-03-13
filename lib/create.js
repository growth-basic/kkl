const path = require("path");
const Creator = require("./Creator");

module.exports = async (projectName) => {
  // 命令行运行的路径
  const cwd = process.cwd();
  //   目录拼接项目名
  const targetDir = path.resolve(cwd, projectName || ".");
  //   实例化creator
  const creator = new Creator(projectName, targetDir);
  await creator.create();
};
