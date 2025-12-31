import { Reporter } from '../reporter/reporter';

export function addTestHierarchy(parentSuite, suite, subSuite) {
  const reporter = new Reporter();

  reporter.linkParentSuite(parentSuite);
  reporter.linkSuite(suite);
  reporter.linkSubSuite(subSuite);
}
