import * as allure from 'allure-js-commons';

export class Reporter {

  constructor() {
    this.allureReporter = allure;
  }

  async linkParentSuite(parentSuiteOptions) {
    await this.allureReporter.parentSuite(parentSuiteOptions);
  }

  async linkSuite(suiteOptions) {
    await this.allureReporter.suite(suiteOptions);
  }

  async linkSubSuite(subSuiteOptions) {
    await this.allureReporter.subSuite(subSuiteOptions);
  }
}
