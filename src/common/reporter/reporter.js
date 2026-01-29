import * as allure from 'allure-js-commons';

export class Reporter {
  async linkParentSuite(parentSuiteName) {
    await allure.parentSuite(parentSuiteName);
  }

  async linkSuite(suiteName) {
    await allure.suite(suiteName);
  }

  async linkSubSuite(subSuiteName) {
    await allure.subSuite(subSuiteName);
  }
}