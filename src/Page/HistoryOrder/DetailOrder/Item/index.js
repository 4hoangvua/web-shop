import React from "react";
import styles from "./Item.module.scss";
import classname from "classnames/bind";
const cx = classname.bind(styles);
const Item = ({ item }) => {
  return (
    <div className={cx("c-item")}>
      <div className={cx("item")}>
        <div className={cx("title")}>
          <table>
            <thead>
              <tr>
                <th>ID sản phẩm</th>
                <th>Số lượng</th>
                <th>Đơn giá</th>
              </tr>
            </thead>
            <tbody>
              {item.listProduct.map((item, index) => {
                return (
                  <tr key={index}>
                    <td>{item._idSP}</td>
                    <td>{item.quantity}</td>
                    <td>{item.price}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        <div className={cx("content")}>
          <p>Tổng tiền trước thuế:{item.totalBeforeTax}</p>
          <p>Tổng tiền thuế:{item.totalTax}</p>
        </div>
      </div>
    </div>
  );
};

export default Item;
