import React, { useState } from "react";
import Row from "./Row";
import MyForm from "./MyForm";
import { onUp, onDown, onDelete, onAdd } from "./utils";

const MyList = () => {
  const [items, onChangeItems] = useState([]);

  return (
    <div>
      <ul className="mb-40">
        {items.map((item, idx, arr) => {
          return (
            <Row
              key={item.id}
              idx={idx}
              itemsNumber={arr.length}
              onUp={() => onUp(idx, items, onChangeItems)}
              onDown={() => onDown(idx, items, onChangeItems)}
              onDelete={() => onDelete(idx, items, onChangeItems)}
              title={item.title}
            />
          );
        })}
      </ul>
      <MyForm onSubmit={value => onAdd(value, items, onChangeItems)} />
    </div>
  );
};

export default MyList;
