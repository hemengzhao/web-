import { useState } from "react";
import TestUseActionState from "./testHook/useActionState";
import TestUseOptimistic from "./testHook/useOptimistic";
import "./App.css";

function App() {
  const [action, setAction] = useState<string>("useActionState");
  const [list, setList] = useState<string[]>([
    "useActionState",
    "useOptimistic",
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
    </div>
  );
}

export default App;
