import 'allure-playwright/autoconfig';
import * as allure from 'allure-js-commons';

export class Reporter {
  async linkParentSuite(name) {
    return await allure.parentSuite(name);
  }

  async linkSuite(name) {
    return await allure.suite(name);
  }

  async linkSubSuite(name) {
    return await allure.subSuite(name);
  }
}
