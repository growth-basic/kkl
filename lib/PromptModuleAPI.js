class PromptModuleAPI {
  // 入参creator为Creator实例
  constructor(creator) {
    this.creator = creator;
  }
  // 给featurePrompts手动选择注入复选框
  injectFeature(feature) {
    this.creator.featurePrompt.choices.push(feature);
  }
  //   给injectedPrompts注入选项
  injectPrompt(prompt) {
    this.creator.injectedPrompts.push(prompt);
  }

  injectOptionsForPrompt(name, option) {
    this.creator.injectedPrompts
      .find((f) => {
        return f.name === name;
      })
      .choices.push(option);
  }
  //   注入回到
  onPromptComplete(cb) {
    this.creator.promptCompleteCbs.push(cb);
  }
}

module.exports = PromptModuleAPI;
