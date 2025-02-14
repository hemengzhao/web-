import { startTransition, useActionState, useState } from "react";

function increment(name: string): Promise<string> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(name);
    }, 2000);
  });
}

function MyActionState() {
  const [name, setName] = useState<string>("");
  const [state, formAction, isPending] = useActionState<string, string>(
    async (previousState: string, name: string) => {
      const data = await increment(name);
      return data;
    },
    "张三"
  );

  const [state2, formAction2, isPending2] = useActionState<string, FormData>(
    async (previousState: string, formData: FormData) => {
      const data = await increment(formData.get("name") as string);

      return data;
    },
    "张三"
  );

  return (
    <div>
      <input type="text" onChange={(e) => setName(e.target.value)} />
      <button
        onClick={() => {
          // 通过startTransition 触发formAction
          startTransition(() => {
            formAction(name);
          });
        }}
      >
        提交
      </button>
      <p>{state}</p>
      {isPending && <p>Loading...</p>}

      <h1>通过from来触发</h1>
      <form action={formAction2}>
        <input type="text" name="name" />
        <button type="submit">提交</button>
      </form>
      <p>{state2}</p>
      {isPending2 && <p>Loading...</p>}
    </div>
  );
}

export default MyActionState;
