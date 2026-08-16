import * as allure from 'allure-js-commons';

export class Reporter {
  async linkParentSuite(parentSuite) {
    await allure.parentSuite(parentSuite);
  }

  async linkSuite(suite) {
    await allure.suite(suite);
  }

  async linkSubSuite(subSuite) {
      await allure.subSuite(subSuite);
  }
}