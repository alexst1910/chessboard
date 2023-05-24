import React from "react";
import ReactDOM from "react-dom/client";
import ChessBoard from "./chessboard.js";
import "./index.css";

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(<ChessBoard />);
