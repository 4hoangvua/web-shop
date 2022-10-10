import React, { useEffect, useRef, useState } from "react";
import * as Actions from "../../Actions";
import Button from "../../components/Button";
import styles from "./Admin.module.scss";
import classname from "classnames/bind";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { object, string } from "yup";
import { useDispatch } from "react-redux";
import ShowError from "../../components/ShowError";
import Notification from "../../components/Notification";
const cx = classname.bind(styles);
const Admin = () => {
  const [isImage, setIsImage] = useState();
  const [isUpLoad, setIsUpLoad] = useState();
  const [isShow, setIsShow] = useState(false);
  const [isData, setisData] = useState();
  const dispatch = useDispatch();

  const schema = object({
    name: string()
      .required("Name not empty !")
      .matches(
        /^[a-zA-Z0-9_-]{3,16}$/,
        "Name include number and over 3 letter"
      ),
    image: string(),
    price: string()
      .required("Price not empty !")

      .matches(/^[1-9]\d*(\.\d+)?$/, "Only digit."),
    tax: string()
      .required("Tax not empty !")

      .matches(/^[0-9]+$/, "Only digit."),
  });
  const {
    register,
    handleSubmit,
    setValue,
    reset,
    watch,
    formState: { errors },
  } = useForm({ mode: "onTouched", resolver: yupResolver(schema) });

  const watchFields = watch(["price"]);

  useEffect(() => {
    return () => {
      isImage && URL.revokeObjectURL(isImage.preview);
    };
  }, [isImage]);

  const onSubmit = (value) => {
    if (isUpLoad) {
      const id = Math.floor(Math.random() * 100);
      dispatch({
        type: Actions.CREATE_NEW_SAN_PHAM,
        data: { product: { ...value, id, image: isUpLoad } },
      });
      reset({ name: "", price: 0, tax: 0 });
      setValue("image", "");
      setisData({ type: "success", message: "Successfully !" });
    } else {
      setisData({ type: "error", message: "Error Image !" });
    }
    setIsShow(true);
  };
  const handleChangeImage = (e) => {
    const file = e.target.files[0];

    if (file) {
      file.preview = URL.createObjectURL(file);
      setIsImage(file);
    } else {
      setIsImage("");
    }
  };
  const handleLoad = () => {
    let reader = new FileReader();
    reader.readAsDataURL(isImage);
    reader.onload = (e) => {
      const { result } = e.target;
      setIsUpLoad(result);
      setIsImage("");
    };
  };
  return (
    <div className={cx("container")}>
      <h3>Update Product</h3>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="name">Tên:</label>
        <input
          {...register("name")}
          type="text"
          placeholder="Enter name product"
        />
        {errors.name && <ShowError>{errors.name?.message}</ShowError>}
        <label htmlFor="image">Link Ảnh:</label>
        <input
          {...register("image")}
          onChange={handleChangeImage}
          type="file"
          accept="image/png, image/gif, image/jpeg"
        />
        {isImage && (
          <>
            <img
              src={isImage.preview}
              style={{ width: 250, height: 300, objectFit: "cover" }}
              alt="Ảnh"
            />
            <br />
            <div className={cx("up-load")} onClick={handleLoad}>
              Up Load
            </div>
          </>
        )}

        {errors.image && <ShowError>{errors.image?.message}</ShowError>}
        <br />
        <label htmlFor="price">Đơn Giá:</label>
        <input {...register("price")} type="text" placeholder="Enter price" />
        {errors.price && <ShowError>{errors.price?.message}</ShowError>}
        <label htmlFor="tax">Tiền Thuế:</label>
        <input
          {...register("tax")}
          type="text"
          placeholder="Enter tax product"
        />
        {errors.tax && <ShowError>{errors.tax?.message}</ShowError>}
        <Button type="submit">Submit</Button>
      </form>
      <Notification data={isData} isShow={isShow} setIsShow={setIsShow} />
    </div>
  );
};

export default Admin;
