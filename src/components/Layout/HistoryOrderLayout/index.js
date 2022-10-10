import React from "react";
import classname from "classnames/bind";
import styles from "./HistoryOrderLayout.module.scss";
import { NavLink } from "react-router-dom";
const cx = classname.bind(styles);
const HistoryOrderLayout = ({ children }) => {
  return (
    <div className={cx("container")}>
      <div className={cx("c-logo")}>
        <NavLink to="/">Shop</NavLink>
      </div>
      <div className={cx("c-content")}>{children}</div>
    </div>
  );
};

export default HistoryOrderLayout;
