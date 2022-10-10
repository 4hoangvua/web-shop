import classnames from "classnames/bind";
import styles from "./Default.module.scss";
import {
  AiFillFacebook,
  AiFillTwitterSquare,
  AiFillYoutube,
  AiFillInstagram,
} from "react-icons/ai";
import Header from "../../Header";
const cx = classnames.bind(styles);

function DefaultLayout({ children }) {
  return (
    <div className={cx("container")}>
      <Header />
      <div className={cx("c-content")}>{children}</div>
      <div className={cx("c-footer")}>
        <div className={cx("footer-top")}>
          <div className={cx("conceptial")}>
            <div className={cx("title")}>
              <span>Shop</span> CONCEPTIAL
            </div>
            <div className={cx("content")}>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Obcaecati doloremque rem quae.
            </div>
            <div className={cx("icon")}>
              <a
                href="https://www.facebook.com/dahoang.tran.33"
                target="_blank"
              >
                <AiFillFacebook />
              </a>
              <a href="#">
                <AiFillTwitterSquare />
              </a>
              <a href="#">
                <AiFillYoutube />
              </a>
              <a href="#">
                <AiFillInstagram />
              </a>
            </div>
          </div>
          <div className={cx("product")}>
            <h3>Product</h3>
            <a href="#">anshin1</a>
            <a href="#">anshin1</a>
            <a href="#">anshin1</a>
            <a href="#">anshin1</a>
            <a href="#">anshin1</a>
          </div>
          <div className={cx("useful-link")}>
            <h3>Useful Link</h3>
            <a href="#">anshin1</a>
            <a href="#">anshin1</a>
            <a href="#">anshin1</a>
            <a href="#">anshin1</a>
            <a href="#">anshin1</a>
          </div>
          <div className={cx("address")}>
            <h3>Address</h3>
            <a href="#">anshin1</a>
            <a href="#">anshin1</a>
            <a href="#">anshin1</a>
            <a href="#">anshin1</a>
            <a href="#">anshin1</a>
          </div>
        </div>
        <div className={cx("footer-bottom")}></div>
      </div>
    </div>
  );
}

export default DefaultLayout;
