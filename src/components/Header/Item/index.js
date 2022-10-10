import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import classname from "classnames/bind";
import styles from "./Item.module.scss";
const cx = classname.bind(styles);
const Item = ({ to, title }) => {
  let location = useLocation();
  const { pathname } = location;
  return (
    <NavLink
      className={cx("nav-item", { active: pathname === to ? true : false })}
      to={to}
    >
      {title}
    </NavLink>
  );
};

export default Item;
