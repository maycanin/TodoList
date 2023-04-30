import { useState } from "react";
import "./App.css";
import { Item } from "./types/item";
import { ListTarefa } from "./components/listTarefa/index";
import { IncludeTarefa } from "./components/includeTarefa/index";

function App() {
  const [tarefa, setTarefa] = useState<Item[]>([]);

  const handleAddTask = (taskName: string) => {
    const newTarefa = [...tarefa];
    newTarefa.push({
      id: tarefa.length + 1,
      name: taskName,
      realized: false,
    });
    setTarefa(newTarefa);
  };

  return (
    <div className="h-screen w-screen flex flex-col items-center bg-slate-900 text-white">
      <div className="p-3 w-9/12 text-center">
        <h1 className="text-5xl py-6">Lista de tarefas</h1>
        <hr className="mb-4" />
        <IncludeTarefa onEnter={handleAddTask} />
        <div className="text-xl w-full">
          {tarefa.map((item, index) => (
            <ListTarefa key={index} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
