import { test as base } from '@playwright/test';
import { Logger } from '../../src/common/logger/Logger';
import { Reporter } from '../../src/common/reporter/reporter';
import { parseTestTreeHierarchy } from '../../src/common/helpers/allureHelpers';

export const test = base.extend<
  {
    usersNumber: number;
    contextsNumber: number;
    infoTestLog: string;
    addTestHierarchy: string;
  },
  {
    logger: Logger;
  }
>({
  usersNumber: [1, { option: true }],
  contextsNumber: [1, { option: true }],
  logger: [
    async ({}, use) => {
      const logger = new Logger(process.env.LOG_LEVEL);

      await use(logger);
    },
    { scope: 'worker' },
  ],
  infoTestLog: [
    async ({ logger }, use, testInfo) => {
      const normalizedFileName = testInfo.file.replaceAll('\\', '/');
      const indexOfTestSubfolderStart =
        normalizedFileName.indexOf('/tests/') + 7;
      const fileName = normalizedFileName.substring(indexOfTestSubfolderStart);

      logger.info(`Test started: ${fileName}`);

      await use('infoTestLog');

      logger.info(`Test completed: ${fileName}`);
    },
    { scope: 'test', auto: true },
  ],
  addTestHierarchy: [
    async ({ logger }, use, testInfo) => {
      const reporter = new Reporter();
      const fileName = testInfo.file;

      const [parentSuite, suite, subSuite] = parseTestTreeHierarchy(
        fileName,
        logger,
      );

      await reporter.linkParentSuite(parentSuite);
      await reporter.linkSuite(suite);

      if (subSuite) {
        await reporter.linkSubSuite(subSuite);
      }

      await use('addTestHierarchy');
    },
    { scope: 'test', auto: true },
  ],
});
