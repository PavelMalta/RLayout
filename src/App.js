import React from "react";
import s from "./App.module.css"
import {Grid} from "./component/grid/Grid";

function App() {
  return (
    <div className={s.app}>
      <Grid/>
    </div>
  );
}

export default App;
