import { test, expect } from '@playwright/test';
import { addTestHierarchy } from '../../../common/helpers/addTestHierarchy';

test.beforeEach(() => {
  addTestHierarchy('Conduit App', 'API tests', 'Articles');
});

test('Example test', async () => {
  expect(1 + 1).toBe(2);
});
