import { allure } from 'allure-playwright';


export class Reporter {
  linkParentSuite(name) {
    allure.parentSuite(name)
  }

  linkSuite(name) {
    allure.suite(name)
  }

  linkSubSuite(name) {
    allure.subSuite(name)
  }
}