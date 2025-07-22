import * as allure from 'allure-js-commons';

export class Reporter {
  async linkParentSuite(suite) {
    await allure.parentSuite(suite);
  }

  async linkSuite(suite) {
    await allure.suite(suite);
  }

  async linkSubSuite(suite) {
    await allure.subSuite(suite);
  }
}