import * as allure from 'allure-js-commons';

export class Reporter {

  constructor() {
    this.allureReporter = allure;
  }

  linkParentSuite(...args) {
    return this.allureReporter.parentSuite(...args);
  }

  linkSuite(...args) {
    return this.allureReporter.suite(...args);
  }

  linkSubSuite(...args) {
    return this.allureReporter.subSuite(...args);
  }
}
