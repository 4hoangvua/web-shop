import React, { useEffect, memo } from "react";
import { AiFillCheckCircle, AiOutlineClose } from "react-icons/ai";
import styles from "./Notification.module.scss";
import classname from "classnames/bind";
const cx = classname.bind(styles);
const Notification = ({ data, isShow, setIsShow }) => {
  const _className = cx({ [data?.type]: data?.type });

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsShow(false);
    }, 2000);
    return () => {
      clearTimeout(timer);
    };
  }, [isShow]);
  const handleClick = () => {
    setIsShow(!isShow);
  };

  return (
    <>
      {isShow && (
        <div className={cx("toast", _className)}>
          <div className={cx("toast-icon")}>
            <AiFillCheckCircle />
          </div>
          <div className={cx("toast-body")}>
            <h3 className={cx("title")} />
            <p className={cx("messg")}>{data.message}</p>
          </div>
          <div className={cx("toast-close")} onClick={handleClick}>
            <AiOutlineClose />
          </div>
        </div>
      )}
    </>
  );
};

export default memo(Notification);
