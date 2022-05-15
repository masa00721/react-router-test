import "./styles.css";
import React from "react";
import { ChildArea } from "./components/ChildArea";
import { useState, useCallback, useMemo } from "react";
import { InlineStyle } from "./components/InlineStyle";
import { CssModules } from "./components/CssModules";

import { BrowserRouter, Link } from "react-router-dom";

import { Router } from "./router/Router";

export default function App() {
  console.log("app");

  const [text, setText] = useState("");
  const [open, setOpen] = useState(false);

  const onChangeText = (e) => setText(e.target.value);
  const onClickOpen = () => setOpen(!open);
  const onClickClose = useCallback(() => setOpen(false), [setOpen]);

  return (
    <BrowserRouter>
      <div className="App">
        <input value={text} onChange={onChangeText} />
        <button onClick={onClickOpen}>Hello</button>
        <ChildArea open={open} onClickClose={onClickClose} />

        <InlineStyle />
        <CssModules />

        <Link to="/">Home</Link>
        <br />
        <Link to="/page1">Page1</Link>
        <br />
        <Link to="/page2">Page2</Link>
      </div>
      <Router />
    </BrowserRouter>
  );
}
