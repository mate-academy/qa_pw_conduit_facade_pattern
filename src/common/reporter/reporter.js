import * as allure from 'allure-js-commons';

export class Reporter {
  constructor() {
    this.allure = allure;
  }

  linkParentSuite(name) {
    this.allure.parentSuite(name);
  }

  linkSuite(name) {
    this.allure.suite(name);
  }

  linkSubSuite(name) {
    this.allure.subSuite(name);
  }
}
