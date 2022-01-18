import { Job, DoneCallback } from 'bull';
import { TestTaskShape } from './common/interface';

export default function (job: Job<TestTaskShape>, cb: DoneCallback) {
  console.log(
    `在进程：[${process.pid}] 处理任务${job.id}，数据：${JSON.stringify(
      job.data,
    )}`,
  );

  const result = new Array(10000).fill(0).map(() => Math.random());

  // 处理完成之后
  cb(null, {
    msg: '多进程成功运行了',
    result,
  });
}
