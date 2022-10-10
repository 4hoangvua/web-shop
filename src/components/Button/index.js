import React from "react";
import classname from "classnames/bind";
import { NavLink } from "react-router-dom";
import styles from "./Button.module.scss";
const cx = classname.bind(styles);
const Button = ({
  href,
  to,
  disable,
  onClick,
  variant = "primary",
  children,
  ...passProps
}) => {
  const _classes = cx("btn", { [variant]: variant, disable });
  const props = { onClick, ...passProps };
  let Comp;
  if (disable) {
    delete props.onClick;
  }
  if (href) {
    Comp = "a";
    props.href = href;
  } else if (to) {
    Comp = NavLink;
    props.to = to;
  } else {
    Comp = "button";
  }

  return (
    <Comp {...props} className={_classes}>
      {/* {icon && <span className={cx("icon")}>{icon}</span>} */}
      {children}
    </Comp>
  );
};

export default Button;
