import React, { useState } from "react";
import * as Actions from "../../../Actions";
import styles from "./MyCart.module.scss";
import classnames from "classnames/bind";
import { useDispatch, useSelector } from "react-redux";
import Image from "../../Image";
import Button from "../../Button";
import { makeid } from "../../../functions";
import Notification from "../../Notification";
const cx = classnames.bind(styles);
const MyCart = () => {
  const { myCarts } = useSelector((state) => state.gioHang);
  const [isShow, setIsShow] = useState(false);
  const [isData, setIsData] = useState();
  const dispatch = useDispatch();

  const tinhTongTruocThue = () => {
    return myCarts.reduce((total, item) => {
      return total + item.product.price * item.quantity;
    }, 0);
  };

  const tinhTongThue = () => {
    return myCarts.reduce((total, item) => {
      return total + Number(item.product.tax);
    }, 0);
  };

  const tinhTongTien = () => {
    return tinhTongTruocThue() - tinhTongThue();
  };

  const handleCalcMoney = () => {
    const id = makeid(10);
    const order = {
      id,
      name: makeid(6),
      totalBeforeTax: tinhTongTruocThue(),
      totalTax: tinhTongThue(),
      total: tinhTongTien(),
    };

    const listProduct = myCarts.map((item) => ({
      _idSP: item.product.id,
      quantity: item.quantity,
      price: item.product.price,
    }));
    const lineOrder = {
      id,
      listProduct,
      totalBeforeTax: tinhTongTruocThue(),
      totalTax: tinhTongThue(),
    };

    dispatch({ type: Actions.CREATE_NEW_DON_HANG, data: { order, lineOrder } });
    setIsShow(true);
    setIsData({ type: "success", message: "Successfully !" });
  };

  return (
    <div className={cx("content")}>
      {myCarts.length > 0 ? (
        <>
          {" "}
          <table>
            <thead>
              <tr>
                <th>Hình ảnh</th>
                <th>Tên sản phẩm</th>
                <th>Đơn giá</th>
                <th>Số lượng</th>
                <th>Thành tiền</th>
              </tr>
            </thead>
            <tbody>
              {myCarts.map((item, index) => {
                return (
                  <tr key={index}>
                    <td className={cx("c-img")}>
                      <Image src={item.product.image} />
                    </td>
                    <td>{item.product.name}</td>
                    <td>{item.product.price}</td>
                    <td>{item.quantity}</td>
                    <td>{item.product.price * item.quantity}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          <div className={cx("c-total")}>
            <br />
            <span className={cx("total")}>
              <p>Tổng trước thuế:{tinhTongTruocThue()}</p>
              <p>Tổng thuế:{tinhTongThue()}</p>
              <p>Tổng thành tiền:{tinhTongTien()}</p>
            </span>
            <br />
            <Button onClick={handleCalcMoney}>Thanh Toán</Button>
            <Notification data={isData} isShow={isShow} setIsShow={setIsShow} />
          </div>
        </>
      ) : (
        <p style={{ textAlign: "center", marginTop: 20 }}>No Data</p>
      )}
    </div>
  );
};

export default MyCart;
