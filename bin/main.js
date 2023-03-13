#!/usr/bin/env node

const { program } = require("commander");
const { chalk } = require("@vue/cli-shared-utils");
const create = require("../lib/create");

program
  .version(`kkl-cli${require("../package.json").version}`)
  .usage("<command> [options]");

program
  .command("create <app-name>")
  .description("创建项目")
  .action((name, options) => {
    console.log(name, "name");
    console.log(chalk.bold.blue("kkl-cli v1.0.0"));
    create(name, options);
  });

program.on("--help", () => {
  console.log();
  console.log(
    `Run ${chalk.yellow(
      "kkl-cli <command> --help"
    )} for detailed usage of given command`
  );
  console.log();
});

program.parse(process.argv);
