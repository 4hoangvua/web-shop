import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import styles from "./DetailOrder.module.scss";
import classnames from "classnames/bind";
import Item from "./Item";
const cx = classnames.bind(styles);
const DetailOrder = ({ id }) => {
  const { detailOrder } = useSelector((state) => state.dongDonHang);
  useEffect(() => {}, []);
  return (
    <div className={cx("container")}>
      <div className={cx("c-list")}>
        <Item item={detailOrder} />;
      </div>
    </div>
  );
};

export default DetailOrder;
