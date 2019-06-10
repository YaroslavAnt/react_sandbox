import React, { useState } from "react";
import Controlls from "./Controlls";
import MyList from "./MyList";

const Row = props => {
  const [isShowSublist, onChangeView] = useState(false);
  const onChangeList = () => {
    console.log(isShowSublist);
    const newView = !isShowSublist;
    onChangeView(newView);
  };

  return (
    <div className="row">
      <Controlls
        idx={props.idx}
        amount={props.amount}
        onUp={() => props.onUp()}
        onDown={() => props.onDown()}
        onChangeView={() => onChangeList()}
        onDelete={() => props.onDelete()}
        name={props.name}
        isShowSublist={isShowSublist}
      />

      {isShowSublist && <MyList />}
    </div>
  );
};

export default Row;
