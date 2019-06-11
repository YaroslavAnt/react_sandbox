import React, { useState, useEffect } from "react";
import Row from "./Row";
import MyForm from "./MyForm";

const MyList = () => {
  const [items, onChangeItems] = useState([]);

  const onAdd = value => {
    let newArr = [...items];
    newArr.push(value);
    onChangeItems(newArr);
  };

  //====================================

  let initial = items.map((item, idx, arr) => {
    return (
      <Row
        key={idx}
        idx={idx}
        itemsNumber={arr.length}
        onUp={() => onUp(idx)}
        onDown={() => onDown(idx)}
        onDelete={() => onDelete(idx)}
        title={item}
      />
    );
  });

  const [list, onchangeList] = useState([]);

  const onUp = idx => {
    // onchangeList([
    //   ...initial.slice(0, idx - 1),
    //   ...initial.slice(idx - 1, idx + 1).reverse(),
    //   ...initial.slice(idx + 1)
    // ]);
    initial = [
      ...initial.slice(0, idx - 1),
      ...initial.slice(idx - 1, idx + 1).reverse(),
      ...initial.slice(idx + 1)
    ];
  };

  const onDown = idx => {
    // onchangeList([
    //   ...initial.slice(0, idx),
    //   ...initial.slice(idx, idx + 2).reverse(),
    //   ...initial.slice(idx + 2)
    // ]);
    initial = [
      ...initial.slice(0, idx),
      ...initial.slice(idx, idx + 2).reverse(),
      ...initial.slice(idx + 2)
    ];
    console.log(initial);
  };

  const onDelete = idx => {
    let newArr = [...initial];
    newArr.splice(idx, 1);
    // onchangeList(newArr);
    initial = newArr;
  };

  return (
    <div>
      <ul className="mb-40">{initial}</ul>
      <MyForm onSubmit={onAdd} />
    </div>
  );
};

export default MyList;
