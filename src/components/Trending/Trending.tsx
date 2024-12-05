import style from "../Trending/Trending.module.css";

import Carousel from "../Carousel/Carousel";

function Trending() {
  return (
    <div className={style.container}>
      <p className={style.subheading}>-Popular delivery-</p>
      <p className={style.heading}>Trending food</p>
      <Carousel />
    </div>
  );
}

export default Trending;
