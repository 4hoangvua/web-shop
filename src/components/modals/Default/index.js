import React from "react";
import { AiOutlineClose } from "react-icons/ai";
import styles from "./Default.module.scss";
import classnames from "classnames/bind";
const cx = classnames.bind(styles);
const Default = ({ isShow, setIsShow, content, title }) => {
  const handleClose = () => {
    setIsShow(!isShow);
  };
  const handleStop = (e) => {
    e.preventDefault();
    e.stopPropagation();
  };
  return (
    <div onClick={handleClose} className={cx("container")}>
      <div onClick={handleStop} className={cx("cc-content")}>
        <div onClick={handleClose} className={cx("close")}>
          <AiOutlineClose />
        </div>
        <h1>{title}</h1>
        <div className={cx("content")}>{content}</div>
      </div>
    </div>
  );
};

export default Default;
