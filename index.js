const { Worker, isMainThread, workerData } = require("worker_threads");
const finbonnaci = require("./finbonnaci");

if (isMainThread) {
  console.log("Main");
  new Worker(__filename, { workerData: { code: "a", number: 44 } });
  new Worker(__filename, { workerData: { code: "b", number: 30 } });
  new Worker(__filename, { workerData: { code: "c", number: 20 } });
  new Worker(__filename, { workerData: { code: "d", number: 35 } });
} else {
  if (!workerData) return;
  const result = finbonnaci(workerData.number);
  console.log(
    `Thread ${workerData.code} Result Finbonnaci ${workerData.number} is ${result}`
  );
}
