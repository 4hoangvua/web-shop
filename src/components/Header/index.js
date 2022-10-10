import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { AiOutlineBell } from "react-icons/ai";
import Button from "../Button";
import { Default, MyCart } from "../modals";
import styles from "./Header.module.scss";
import classname from "classnames/bind";
import { useSelector } from "react-redux";
import Item from "./Item";
const cx = classname.bind(styles);
const Header = () => {
  const [isShow, setIsShow] = useState(false);
  const { myCarts } = useSelector((state) => state.gioHang);
  const handleShow = () => {
    setIsShow(!isShow);
  };

  return (
    <div className={cx("c-nav")}>
      <div className={cx("c-logo")}>
        <NavLink to="/">Shop</NavLink>
      </div>
      <div className={cx("c-item")}>
        <Item to="/" title="Home" />
        <Item to="/admin" title="Admin" />
        <Item to="/history" title="History" />
      </div>
      <div className={cx("c-cart")}>
        <Button onClick={handleShow}>
          <AiOutlineBell />
          <span
            style={{ display: myCarts.length > 0 ? "inline-block" : "none" }}
          >
            {myCarts.length}
          </span>
        </Button>
        {isShow && (
          <Default
            isShow={isShow}
            setIsShow={setIsShow}
            title="My Cart"
            content={<MyCart />}
          />
        )}
      </div>
    </div>
  );
};

export default Header;
