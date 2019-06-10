import React from "react";
import "./MyItem.css";

const Controlls = props => {
  return (
    <div className="my-listitem__item">
      <h2 className="my-listitem__name">{props.name}</h2>

      <div>
        <button onClick={props.onChangeView} className="btn btn-success">
          {!props.isShowSublist ? "Add " : "Remove "}sublist
        </button>

        <button
          onClick={props.onUp}
          className="btn btn-warning ml-20"
          disabled={props.idx === 0}
        >
          <span class="glyphicon glyphicon-upload" aria-hidden="true" />
        </button>

        <button
          onClick={props.onDown}
          className="btn btn-warning ml-10"
          disabled={props.idx === props.amount - 1}
        >
          <span class="glyphicon glyphicon-download" aria-hidden="true" />
        </button>

        <button onClick={props.onDelete} className="btn btn-danger ml-10">
          <span class="glyphicon glyphicon-trash" aria-hidden="true" />
        </button>
      </div>
    </div>
  );
};

export default Controlls;
