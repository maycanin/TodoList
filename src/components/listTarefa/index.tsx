import { Item } from "../../types/item";
import { useState } from "react";

type Props = {
  item: Item;
};

export const ListTarefa = ({ item }: Props) => {
  const [confer, setConfer] = useState(item.realized);

  const [classeCss, setClasseCss] = useState(
    "flex items-center bg-slate-800 p-3 rounded-lg gap-2 my-2"
  );

  function selecion() {
    !confer
      ? setClasseCss(
          "flex items-center bg-slate-800 p-3 rounded-lg gap-2 my-2 line-through"
        )
      : setClasseCss(
          "flex items-center bg-slate-800 p-3 rounded-lg gap-2 my-2"
        );

    setConfer(!confer);
  }

  return (
    <div className={classeCss}>
      <input
        type="checkbox"
        className="w-4 h-4"
        checked={confer}
        onChange={selecion}
      />
      <label>{item.name}</label>
    </div>
  );
};
