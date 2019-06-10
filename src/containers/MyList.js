import React, { useState } from "react";
import Row from "./Row";
import "./MyList.css";
import MyForm from "./MyForm";

const MyList = () => {
  const [items, onChangeItems] = useState(["Tea", "Coffee", "Milk"]);

  const onAdd = value => {
    let newArr = [...items];
    newArr.push(value);
    onChangeItems(newArr);
  };

  const onUp = idx => {
    let newArr = [...items];

    onChangeItems([
      ...newArr.slice(0, idx - 1),
      ...newArr.slice(idx - 1, idx + 1).reverse(),
      ...newArr.slice(idx + 1)
    ]);
  };

  const onDown = idx => {
    let newArr = [...items];

    onChangeItems([
      ...newArr.slice(0, idx),
      ...newArr.slice(idx, idx + 2).reverse(),
      ...newArr.slice(idx + 2)
    ]);
  };

  const onDelete = idx => {
    let newArr = [...items];
    newArr.splice(idx, 1);
    onChangeItems(newArr);
  };

  return (
    <div>
      {items.map((item, idx, arr) => {
        return (
          <Row
            idx={idx}
            amount={arr.length}
            onUp={() => onUp(idx)}
            onDown={() => onDown(idx)}
            onDelete={() => onDelete(idx)}
            name={item}
          />
        );
      })}

      <MyForm onSubmit={onAdd} />
    </div>
  );
};

export default MyList;
