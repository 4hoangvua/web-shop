import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Default } from "../../../components/modals";
import Button from "../../../components/Button";
import styles from "./ListOrder.module.scss";
import classnames from "classnames/bind";
import DetailOrder from "../DetailOrder";
import * as Actions from "../../../Actions";
const cx = classnames.bind(styles);
const ListOrder = () => {
  const { order } = useSelector((state) => state.donHang);
  const [isShow, setIsShow] = useState(false);
  const dispatch = useDispatch();

  const handleDetail = (id) => {
    dispatch({ type: Actions.DETAIL_DON_HANG, data: { id } });
    setIsShow(!isShow);
  };
  return (
    <div className={cx("container")}>
      <table>
        <caption>Danh Sách Đơn Hàng</caption>
        {order.length > 0 ? (
          <>
            <thead>
              <tr>
                <th>Id</th>
                <th>Tên</th>
                <th>Tổng trước thuế</th>
                <th>Tổng thuế</th>
                <th>Tổng tiền</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {order.map((item, index) => {
                return (
                  <tr key={index}>
                    <td>{item.id}</td>
                    <td>{item.name}</td>
                    <td>{item.totalBeforeTax}</td>
                    <td>{item.totalTax}</td>
                    <td>{item.total}</td>
                    <td>
                      <Button onClick={() => handleDetail(item.id)}>
                        Detail
                      </Button>
                      {isShow && (
                        <Default
                          isShow={isShow}
                          setIsShow={setIsShow}
                          title="Chi Tiết Đơn Hàng"
                          content={<DetailOrder />}
                        />
                      )}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </>
        ) : (
          <p>Không có đơn hàng nào !!!</p>
        )}
      </table>
    </div>
  );
};

export default ListOrder;
