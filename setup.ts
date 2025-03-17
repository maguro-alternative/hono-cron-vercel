import { styleText } from 'node:util';

expect.extend({
  toBe(received, expected) {
    const { isNot, utils } = this;
    const pass = received === expected;
    if (pass) {
      return {
        message: () => `ユニコーン！！！！`,
        pass: pass,
        expected,
        received,
      };
    } else {
      return {
        message: () => `それでもっ！！`,
        pass: pass,
        expected,
        received,
      };
    }
  },
  toEqual(received, expected) {
    const pass = this.equals(received, expected);
    if (pass) {
      return {
        message: () => `ユニコーン！！！！`,
        pass: pass,
        expected,
        received,
      }
    }
    return {
      message: () => `それでもっ！！`,
      pass: pass,
      expected,
      received,
    }
  }
});

afterAll((fn) => {
  const task = fn.tasks.find((task) => task.result?.state !== 'pass');
  if (task === undefined) {
    console.log(styleText('green', '\x1b[1m\x1b[3mユニコｫｫｫｫｫｫｫｫｫｫｫｫｫｫｫｫｫｫｫｫｫｫｫｫｫｫｫｫｫｫｫｫｫｫｫｫｫｫｫｫｫｫｫｫｫｫｫｫｫｫｫｫｫｫｫｫｫｫｫｫｫｫｫｫｫｫｫｫｫｫｫｫｫｫｫｫｫｫｫｫｫｫｫｫｫｫｫｫｫｫｫｫｫｫｫｫｫｫｫｫｫｫｫｫｫｫｫｫｫｫｫｫｫｫｫｫｫｫｫｫｫｫｫｫｫｫｫｫｫｫｫｫｫｫｫｫｫｫｫｫｫｫｫｫｫｫｫｫｫｫｫｫｫｫｫｫｫｫｫｫｫｫｫｫｫｫｫｫｫｫｫｫｫｫｫｫｫｫｫｫｫｫｫｫｫｫｫｫｫｫｫｫｫｫｫｫｫｫｫｫｫｫｫｫｫｫｫｫｫｫｫｫｫｫｫｫｫｫｫｫｫｫｫｫｫｫｫｫｫｫｫｫｫｫｫｫｫｫｫｫｫｫｫｫｫｫｫｫｫｫｫｫｫｫｫｫｫｫｫｫｫｫｫｫｫｫｫｫｫｫｫｫｫｫｫｫｫｫｫｫｫｫｫｫｫｫｫｫｫｫｫｫｫｫｫｫｫｫｫｫｫｫｫｫｫｫｫｫｫｫｫｫｫｫｫｫｫｫｫｫｫｫｫｫｫｫｫｫｫｫｫｫｫｫｫｫｫｫｫｫｫｫｫｫｫｫｫｫｫｫｫｫｫｫｫｫｫｫｫｫｫｫｫｫｫｫｫｫｫｫｫｫｫｫｫｫｫｫｫｫｫｫｫｫｫｫｫｫｫｫｫｫｫｫｫｫｫｫｫｫｫｫｫｫｫｫｫｫｫｫｫｫｫｫｫｫｫｫｫｫｫｫｫｫｫｫｫｫｫｫｫｫｫｫｫｫｫｫｫｫｫｫｫｫｫｫｫｫｫｫｫｫｫｫｫｫｫｫｫｫｫｫｫｫｫｫｫｫｫｫｫｫｫｫｫｫｫｫｫｫｫｫｫｫｫｫｫｫｫｫｫｫｫｫｫｫｫｫｫｫｫｫｫｫｫｫｫｫｫｫｫｫｫｫｫｫｫｫｫｫｫｫｫｫｫｫｫｫｫｫｫｫｫｫｫｫｫｫｫｫン！！！！'));
  }
});

interface CustomMatchers<R = unknown, T = unknown> {
  toBe: (expected: T) => R;
  toEqual: (expecte: T) => R;
}
