# Practice for Facade design pattern

## Table of contents

- [Description](#description)
- [Preparation](#preparation)
- [Main Task](#main-task)
- [Task Reporting](#task-reporting)

## Description

In this task you will need to create a Facade class for the Allure reporter.


## Preparation

1. Open the forked repo in VSCode.
2. Create a new branch by running `git checkout -b task_solution`.
3. Run the installation commands:

    - `npm ci`
    - `npx playwright install`


## Main Task

1. Create new class `Reporter` in the file  `./src/common/reporter/reporter.js`.
2. Add methods to the class that will wrap the allure methods:
- `linkParentSuite()` - wraps the `allure.parentSuite()` method;
- `linkSuite()` - wraps the `allure.suite()` method;
- `linkSubSuite()` - wraps the `allure.subSuite()` method;
3. Update fixture `addAllureTestHierarchy` to use the `Reporter` facade class:
- initialize class in the fixture;
- call class methods instead of direct allure methods calling. 
4. Re-run all the tests and make sure that pass.
5. Generate allure report and check the Suite hierarchy. 

## Task Reporting

1. Add and commit all your updates.
2. Push the code to the origin.
3. Create a PR for your changes.
4. Keep implementing suggestions from code review until your PR is approved.
