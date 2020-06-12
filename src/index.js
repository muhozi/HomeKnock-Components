import React from "react";
import { render } from "react-dom";
import styles from "./index.module.scss";
import HouseCard from "./HouseCard/HouseCard";

const App = () => (
  <div className={styles.container}>
    <HouseCard width="500" />
  </div>
);

render(<App />, document.getElementById("app"));
