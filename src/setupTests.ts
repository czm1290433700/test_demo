// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';

// 移除 jest 的 log 输出
global.console = {
  log: jest.fn(),
  debug: console.debug,
  trace: console.trace,
};
