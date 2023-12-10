import React from "react";
import { Carousel } from "react-responsive-carousel";
const image = [
  "https://www.everythingbranded.com/cdn-cgi/image/width=500,height=500,fit=pad/assets/media/2023/05/04/300782013.jpg",
  "https://www.everythingbranded.com/cdn-cgi/image/width=500,height=500,fit=pad/assets/media/2023/05/04/300782003.jpg",
  "https://www.everythingbranded.com/cdn-cgi/image/width=500,height=500,fit=pad/assets/media/2023/05/04/300782004.jpg",
  "https://www.everythingbranded.com/cdn-cgi/image/width=500,height=500,fit=pad/assets/media/2023/05/04/300782011.jpg",
];

const ProductDetailSlider = () => {
  const onChange = (index, item) => {
    // Handle slide change event
    console.log("Slide changed to:", index);
  };

  const onClickItem = (index, item) => {
    // Handle click on slide event
    console.log("Clicked on slide:", index);
  };

  const onClickThumb = (index, item) => {
    // Handle click on thumbnail event
    console.log("Clicked on thumbnail:", index);
  };

  return (
    <Carousel
      showArrows={true}
      onChange={onChange}
      onClickItem={onClickItem}
      onClickThumb={onClickThumb}
    >
      {image.map((img, index) => (
        <div key={index}>
          <img style={{ borderRadius: "5px" }} src={img} alt="Slide " />
        </div>
      ))}
    </Carousel>
  );
};

export default ProductDetailSlider;
