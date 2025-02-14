import { useOptimistic, useState } from "react";

function fetchTaskList(name: string): Promise<{
  data: string;
  status: number;
}> {
  // 模拟异步请求
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() > 0.5) {
        reject({
          data: null,
          status: 500,
        });
      } else {
        resolve({
          data: name,
          status: 200,
        });
      }
    }, 1000);
  });
}
function MyUseOptimistic() {
  const [list, setList] = useState<string[]>([
    "打卡，打卡，我是一个",
    "紧随其后我来了",
  ]);
  const [optimisticState, addOptimistic] = useOptimistic(
    list,
    (currentState, optimisticValue) => {
      console.log(
        "🚀 ~ MyUseOptimistic ~ currentState, optimisticValue:",
        currentState,
        optimisticValue
      );
      return [...currentState, optimisticValue];
    }
  );

  async function formAction(formData: FormData) {
    const task = formData.get("task") as string;
    addOptimistic(task);
    try {
      const data = await fetchTaskList(task);
      if (data.status === 200) {
        setList((list) => [...list, data.data]);
      }
    } catch (error) {
      console.log("🚀 ~ formAction ~ error:", error);
    }
  }
  return (
    <div>
      <form action={formAction}>
        <div>
          <input name="task" type="text" />
          <button type="submit">提交评论</button>
        </div>
      </form>

      {optimisticState.map((item, index) => (
        <div key={index}>{item}</div>
      ))}
    </div>
  );
}
export default MyUseOptimistic;
