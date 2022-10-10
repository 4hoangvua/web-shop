import React from "react";
import styles from "./ShowError.module.scss";
import classname from "classnames/bind";
const cx = classname.bind(styles);
const ShowError = ({ children }) => {
  return <span className={cx("show-error")}>{children}</span>;
};

export default ShowError;
