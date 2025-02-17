import { useState } from "react";
import TestUseActionState from "./testHook/useActionState";
import TestUseOptimistic from "./testHook/useOptimistic";
import TestUseFormStatus from "./testHook/useFormStatus";
import "./App.css";

function App() {
  const [action, setAction] = useState<string>("useActionState");
  const [list, setList] = useState<string[]>([
    "useActionState",
    "useOptimistic",
    "useFormStatus",
  ]);

  return (
    <div>
      <div className="tabs">
        {list.map((item, index) => {
          return (
            <div
              key={index}
              className={action === item ? "active" : ""}
              onClick={() => {
                setAction(item);
              }}
            >
              {item}
            </div>
          );
        })}
      </div>

      {action === "useActionState" && <TestUseActionState />}
      {action === "useOptimistic" && <TestUseOptimistic />}

      {action === "useFormStatus" && <TestUseFormStatus />}
    </div>
  );
}

export default App;
