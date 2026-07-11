import {
  parentSuite as allureParentSuite,
  suite as allureSuite,
  subSuite as allureSubSuite,
} from 'allure-js-commons';

export class Reporter {

  constructor() {}

  linkParentSuite(name) {
    allureParentSuite(name);
  }

  linkSuite(name) {
    allureSuite(name);
  }

  linkSubSuite(name) {
    allureSubSuite(name);
  }
}   