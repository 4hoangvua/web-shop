import React, { useRef, useState } from "react";
import images from "../../assets/images";
const Image = ({ src, alt, _classname, ...props }) => {
  const [fallBack, setFallBack] = useState("");
  const isRef = useRef(src);
  const handleError = () => {
    if (src) {
      isRef.current = "";
    }
    setFallBack(images.product.laptop1);
  };

  return (
    <img
      src={isRef.current || fallBack}
      alt={alt}
      {...props}
      className={_classname}
      onError={handleError}
    />
  );
};

export default Image;
