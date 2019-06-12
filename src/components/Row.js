import React, { useState } from "react";
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
      <div className="my-listitem__item">
        <h2 className="my-listitem__name">{props.title}</h2>

        <div>
          <button onClick={onChangeList} className="btn btn-success">
            {!isShowSublist ? "Add " : "Remove "}sublist
          </button>

          <button
            onClick={props.onUp}
            className="btn btn-warning ml-20"
            disabled={props.idx === 0}
          >
            <span className="glyphicon glyphicon-upload" aria-hidden="true" />
          </button>

          <button
            onClick={props.onDown}
            className="btn btn-warning ml-10"
            disabled={props.idx === props.itemsNumber - 1}
          >
            <span className="glyphicon glyphicon-download" aria-hidden="true" />
          </button>

          <button onClick={props.onDelete} className="btn btn-danger ml-10">
            <span className="glyphicon glyphicon-trash" aria-hidden="true" />
          </button>
        </div>
      </div>

      {isShowSublist && <MyList />}
    </div>
  );
};

export default Row;
