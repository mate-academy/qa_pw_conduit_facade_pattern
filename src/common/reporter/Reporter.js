import * as allure from 'allure-js-commons';

export class Reporter {
  async linkParentSuite(name) {
    await allure.parentSuite(name);
  }

  async linkSuite(name) {
    await allure.suite(name);
  }

  async linkSubSuite(name) {
    await allure.subSuite(name);
  }
}
