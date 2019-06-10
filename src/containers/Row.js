import React, { useState } from "react";
import MyForm from "./MyForm";
import MyItem from "../components/MyItem";

const Row = props => {
  const [items, onSubmitItem] = useState([]);
  const [isShowSublist, onChangeView] = useState(false);

  const onSubmit = value => {
    onSubmitItem(items.push(value));
  };

  const onChangeList = () => {
    onChangeView(!isShowSublist);
  };

  return (
    <div className="row">
      <MyItem
        idx={props.idx}
        amount={props.amount}
        onUp={() => props.onUp()}
        onDown={() => props.onDown()}
        onChangeView={() => this.onChangeView()}
        onDelete={() => props.onDelete()}
        name={props.name}
        isShowSublist={isShowSublist}
      />

      {isShowSublist && (
        <div>
          {this.state.items.map((item, idx, arr) => {
            return (
              <MyItem
                idx={idx}
                amount={arr.length}
                onUp={() => props.onUp()}
                onDown={() => props.onDown()}
                onChangeView={() => onChangeList()}
                onDelete={() => props.onDelete()}
                name={item}
                isShowSublist={isShowSublist}
              />
            );
          })}
          <MyForm onSubmit={onSubmit} />
        </div>
      )}
    </div>
  );
};

export default Row;
