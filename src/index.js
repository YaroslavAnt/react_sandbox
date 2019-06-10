import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";
import MyList from "./containers/MyList";
import Header from "./components/Header";

function App() {
  return (
    <div className="App flexbox align-center justify-center">
      <div className="wrapper ">
        <Header />
        <MyList />
      </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
