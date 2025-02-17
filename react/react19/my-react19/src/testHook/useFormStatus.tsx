import React from "react";
import { useFormStatus } from "react-dom";

function Submit() {
  const { pending, action, data, method } = useFormStatus();
  return (
    <div>
      <button type="submit" disabled={pending}>
        {pending
          ? `"Submitting..."  ${data?.get(
              "name"
            )} method: ${method}  action:${action}`
          : "Submit"}
      </button>
      <div
        onClick={() => {
          // 这里是获取不到信息的
          console.log(
            "🚀 ~ Submit ~ action:",
            action,
            data?.get("name"),
            method
          );
          action?.();
        }}
      >
        触发formAction
      </div>
    </div>
  );
}

function Form({ action }) {
  return (
    <form action={action} method="post">
      <input type="text" name="name" placeholder="请输入姓名" />
      <input type="text" name="email" placeholder="请输入邮箱" />
      <Submit />
    </form>
  );
}

function MyFormStatus() {
  //   const { pending, data, method, action } = useFormStatus();
  // 定义一个名为 submitForm 的函数，该函数接收一个参数 value
  const submitForm = async (value) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log("🚀 ~ submitForm ~ value:", value);
  };
  return (
    <div>
      <Form action={submitForm} />
    </div>
  );
}

export default MyFormStatus;
