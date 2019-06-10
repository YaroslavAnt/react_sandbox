import React from "react";
import MyForm from "./MyForm";
import MyItem from "../components/MyItem";

class Row extends React.Component {
  state = {
    items: [],
    isShowSublist: false
  };

  onSubmit = value => {
    this.setState({
      items: [...this.state.items, value]
    });
  };

  onChangeView = () => {
    this.setState({
      isShowSublist: !this.state.isShowSublist
    });
  };

  render() {
    return (
      <div className="row">
        <MyItem
          idx={this.props.idx}
          amount={this.props.amount}
          onUp={() => this.props.onUp()}
          onDown={() => this.props.onDown()}
          onChangeView={() => this.onChangeView()}
          onDelete={() => this.props.onDelete()}
          name={this.props.name}
          isShowSublist={this.state.isShowSublist}
        />
        {this.state.isShowSublist && (
          <div>
            {this.state.items.map((item, idx, arr) => {
              return (
                <MyItem
                  idx={idx}
                  amount={arr.length}
                  onUp={() => this.props.onUp()}
                  onDown={() => this.props.onDown()}
                  onChangeView={() => this.onChangeView()}
                  onDelete={() => this.props.onDelete()}
                  name={this.props.name}
                  isShowSublist={this.state.isShowSublist}
                />
              );
            })}
            <MyForm onSubmit={this.onSubmit} />
          </div>
        )}
      </div>
    );
  }
}

export default Row;
