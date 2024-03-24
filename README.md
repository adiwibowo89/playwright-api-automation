# playwright-api-automation
Plawright API Demo

This is a test automation framework designed using Playwright and JavaScript. The framework aims to provide a structured and maintainable approach to automated testing of API applications. The Example for this project is to test API for https://reqres.in.

Features
Utilizes Playwright, a powerful automation library for web and api testing.
Supports writing tests in JavaScript.
Easily extensible and customizable for various testing needs.

Getting started
Clone repository
1. Open your terminal or command prompt.
2. Navigate to the directory where you want to clone the repository. You can use the cd command to change directories. For example: $ cd Documents
3. Once you're in the desired directory, use the git clone command followed by the repository URL "git clone https://github.com/adiwibowo89/playwright-api-automation.git"
4. Press Enter to execute the command.
5. Once the clone is finished, you'll see a message indicating that the clone was successful.

Pre-requisites
Download and install Node.js
Download and install any Text Editor like Visual Studio Code (Recommended) / Sublime / Brackets

Install
Install project dependencies
$ npm install
$ npx playwright install

How to write Test
Add new spec under tests folder and name the file as .spec.js (e.g. api_test.spec.js)
Add api_function file under utils folder and name the file as .js (e.g. api_function.js)

Run
You can run your tests with the playwright test command. This will run your tests on spesific API platform as configured in the playwright.config file.
$ npx playwright test --project=api
Using test @tag strategy will help to run a test with a specific tag that we define on test title, use the -g flag followed by the @tagof the test.
$ npx playwright test -g @get_method --project=api

Report
After your test completes, an HTML Reporter will be generated, which shows you a full report of your tests allowing you to filter the report by browsers, passed tests, failed tests, skipped tests.
$ npx playwright show-report

------
