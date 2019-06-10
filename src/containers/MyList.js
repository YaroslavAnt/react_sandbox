import React from "react";
// import MyListItem from "../components/MyListItem";
import Row from "./Row";
import "./MyList.css";
import MyForm from "./MyForm";

class MyList extends React.Component {
  state = {
    items: ["Tea", "Coffee", "Milk"]
  };

  onSubmit = value => {
    this.setState({
      items: [...this.state.items, value]
    });
  };

  onUp = idx => {
    let newArr = [...this.state.items];

    this.setState({
      items: [
        ...newArr.slice(0, idx - 1),
        ...newArr.slice(idx - 1, idx + 1).reverse(),
        ...newArr.slice(idx + 1)
      ]
    });
  };

  onDown = idx => {
    let newArr = [...this.state.items];

    this.setState({
      items: [
        ...newArr.slice(0, idx),
        ...newArr.slice(idx, idx + 2).reverse(),
        ...newArr.slice(idx + 2)
      ]
    });
  };

  onDelete = idx => {
    let newArr = [...this.state.items];
    newArr.splice(idx, 1);
    this.setState({
      items: newArr
    });
  };

  render() {
    return (
      <div>
        {this.state.items.map((item, idx, arr) => {
          return (
            <Row
              idx={idx}
              amount={arr.length}
              onUp={() => this.onUp(idx)}
              onDown={() => this.onDown(idx)}
              onDelete={() => this.onDelete(idx)}
              name={item}
            />
          );
        })}

        <MyForm onSubmit={this.onSubmit} />
      </div>
    );
  }
}

export default MyList;
