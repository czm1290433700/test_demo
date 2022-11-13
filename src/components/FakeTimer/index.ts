// 《9 | FakeTimer：如何"快进"测试定时任务？》
const sleep = async (time: number, result: string): Promise<string> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(result);
    }, time);
  });
};

const loopSleep = async (time: number, result: string): Promise<string> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(result);
      setTimeout(() => {
        loopSleep(time, result);
      }, time);
    }, time);
  });
};

const asyncSleep = async (time: number, fn: () => void): Promise<void> => {
  setTimeout(() => {
    Promise.resolve().then(() => {
      fn();
    });
  }, time);
};

export { sleep, loopSleep, asyncSleep };
