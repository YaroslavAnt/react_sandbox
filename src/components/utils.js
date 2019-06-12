const getId = arr => {
  const newId = Math.floor(Math.random() * 1000);
  return arr.some(item => item.id === newId) ? getId(arr) : newId;
};

export const onAdd = (value, items, onChangeItems) => {
  let newArr = [...items];
  newArr.push({ title: value, id: getId(newArr) });
  onChangeItems(newArr);
};

export const onUp = (idx, items, onChangeItems) => {
  onChangeItems([
    ...items.slice(0, idx - 1),
    ...items.slice(idx - 1, idx + 1).reverse(),
    ...items.slice(idx + 1)
  ]);
};

export const onDown = (idx, items, onChangeItems) => {
  onChangeItems([
    ...items.slice(0, idx),
    ...items.slice(idx, idx + 2).reverse(),
    ...items.slice(idx + 2)
  ]);
};

export const onDelete = (idx, items, onChangeItems) => {
  let newArr = [...items];
  newArr.splice(idx, 1);
  onChangeItems(newArr);
};
