import { FaListAlt } from "react-icons/fa";
import { useState, KeyboardEvent } from "react";

type Props = {
  onEnter: (taskName: string) => void;
};

export const IncludeTarefa = ({ onEnter }: Props) => {
  const [inputText, setInputText] = useState("");

  const handleKeyUp = (e: KeyboardEvent) => {
    if (e.code === "Enter" && inputText !== "") {
      onEnter(inputText);
      setInputText("");
    }
  };

  return (
    <div className="flex border-solid border border-zinc-100 p-4 rounded-lg gap-1 items-center">
      <FaListAlt size={30} />
      <input
        type="text"
        placeholder="Adicione uma tarefa..."
        className="bg-transparent flex-1 pl-2 focus:outline-0 text-xl"
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        onKeyUp={handleKeyUp}
      />
      {/* <button className="ml-2 bg-green-900 p-2 rounded-lg hover:bg-green-800 font-bold">
        Adicionar
      </button> */}
    </div>
  );
};
