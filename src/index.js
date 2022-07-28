import { React } from "react";
import ReactDom from "react-dom"; //htmlにcomponentを反映するためのモジュール
import App from "./App";

ReactDom.render(<App />, document.getElementById("root"));
