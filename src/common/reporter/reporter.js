import * as allure from 'allure-js-commons';

export class Reporter {

  linkParentSuite(name) {
    return allure.parentSuite(name)
  };

  linkSuite() {
    return allure.suite(name)
  };

  linkSubSuite() {
    return allure.subSuite(name)
  };
}