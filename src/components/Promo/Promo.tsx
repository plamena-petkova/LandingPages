import style from "../Promo/Promo.module.css";
import foodOnTheTable from "../../assets/foodOnTheTable.svg";
import RedButton from "../RedButton/RedButton";

function Promo() {
  return (
    <section className={style.container}>
      <div className={style.textContainerPromo}>
        <div className="">
          <p className={style.textContainerPromoP}>Our Stars</p>
          <h1 className={style.textContainerPromoHeading}>
            Veggie Food Goes On And Always On
          </h1>
        </div>
  
          <ul className={style.feedbackContainer}>
            <li className={style.listItem}>
              <h2 className={style.feedbackNumbers}>1,500</h2>
              <p>Sold Product</p>
            </li>
            <li className={style.listItem}>
              <h2 className={style.feedbackNumbers}>500</h2>
              <p>Positive Feedback</p>
            </li>
            <li className={style.listItem}>
              <h2 className={style.feedbackNumbers}>400</h2>
              <p>Offical Store</p>
            </li>

          </ul>
          <div className={style.redButtonContainer}>
          <RedButton captions="Get Special Promo &rarr; " />
          </div>
         

      </div>
      <div className={style.pictureContainer}>
        <img src={foodOnTheTable} alt="foodOnTheTable" />
      </div>
    </section>
  );
}

export default Promo;
