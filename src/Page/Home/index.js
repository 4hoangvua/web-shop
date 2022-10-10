import React, { useEffect } from "react";
import classnames from "classnames/bind";
import styles from "./Home.module.scss";
import Item from "./Item";
import { useSelector } from "react-redux";

const cx = classnames.bind(styles);
const Home = () => {
  const { products } = useSelector((state) => state.sanPham);
  return (
    <div className={cx("container")}>
      <h1>Shop</h1>
      <div className={cx("c-content")}>
        <div className={cx("content")}>
          {products.map((product, index) => {
            return <Item key={index} product={product} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Home;
