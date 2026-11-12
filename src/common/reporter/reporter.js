import * as allure from 'allure-js-commons';

export class Reporter {
  linkParentSuite(name) {
    return allure.parentSuite(name);
  }

  linkSuite(name) {
    return allure.suite(name);
  }

  linkSubSuite(name) {
    return allure.subSuite(name);
  }
}
