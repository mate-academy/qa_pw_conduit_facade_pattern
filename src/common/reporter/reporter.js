export class Reporter {
  linkParentSuite(name) {
    globalThis.allure?.parentSuite(name);
  }

  linkSuite(name) {
    globalThis.allure?.suite(name);
  }

  linkSubSuite(name) {
    globalThis.allure?.subSuite(name);
  }
}
