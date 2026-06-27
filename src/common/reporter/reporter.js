import * as allure from 'allure-js-commons';
import { parseTestTreeHierarchy } from '../helpers/allureHelpers';

export class Reporter {

  constructor(options) {
    this.logger = options.logger;
    this.testInfo = options.testInfo;
    this.parentSuite = null;
    this.suite = null;
    this.subSuite = null;
    this.getInfo(options.testInfo, options.logger);
  }

  getInfo(testInfo, logger) {
    const fileName = testInfo.file;
  
    [this.parentSuite, this.suite, this.subSuite] = parseTestTreeHierarchy(
      fileName,
      logger,
    );
  }

  async linkParentSuite() {
    await allure.parentSuite(this.parentSuite);
  }

  async linkSuite() {
      await allure.suite(this.suite);
  }

  async linkSubSuite() {
    if (this.subSuite) {
        await allure.subSuite(this.subSuite);
    };
  }
}