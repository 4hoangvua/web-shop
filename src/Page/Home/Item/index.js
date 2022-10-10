import React, { useRef, useState } from "react";
import Image from "../../../components/Image";
import Button from "../../../components/Button";
import styles from "./Item.module.scss";
import classnames from "classnames/bind";
import * as Actions from "../../../Actions";
import { useDispatch, useSelector } from "react-redux";
import Notification from "../../../components/Notification";

const cx = classnames.bind(styles);
const Item = ({ product }) => {
  const [number, setNumber] = useState(1);
  const [isShow, setIsShow] = useState(false);
  const [isData, setIsData] = useState();
  const isRef = useRef();
  const dispatch = useDispatch();
  const handleIncrease = () => {
    setNumber((preNumber) => preNumber + 1);
  };
  const handleDecrease = () => {
    setNumber((preNumber) => preNumber - 1);
  };
  const handleAddCart = () => {
    dispatch({ type: Actions.ADD_CART, data: { product, quantity: number } });
    setIsData({ type: "success", message: "Successfully !" });
    setIsShow(true);
    setNumber(1);
  };

  const handleChange = (e) => {
    const re = /^[1-9\b]+$/;
    const { value } = e.target;
    if (re.test(value)) {
      setNumber(Number(value));
      isRef.current = value;
    } else if (value === "") {
      setNumber(value);
    }
  };
  const handleReset = (e) => {
    const { value } = e.target;
    if (!value) setNumber(isRef.current);
  };
  return (
    <div className={cx("c-item")}>
      <div className={cx("item")}>
        <Image src={product.image} alt={product.name} />
        <div className={cx("item-content")}>
          <h1>{product.name}</h1>
          <p>Price: ${product.price}</p>
          <Button disable={number <= 1 ? true : false} onClick={handleDecrease}>
            -
          </Button>
          <input
            onBlur={handleReset}
            onChange={handleChange}
            value={number}
            type="text"
          />
          <Button onClick={handleIncrease}>+</Button>
          <br />
          <br />
          <Button onClick={handleAddCart}>Add cart</Button>
        </div>
      </div>
      <Notification data={isData} isShow={isShow} setIsShow={setIsShow} />
    </div>
  );
};

export default Item;
