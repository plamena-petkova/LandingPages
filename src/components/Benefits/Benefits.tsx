import style from "../Benefits/Benefits.module.css";
import table from "../../assets/tableWithFood.svg";

function Benefits() {
  return (
    <section className={style.container}>
      <div className={style.pictureContainer}>
        <img src={table} alt="tableWithFood" />
      </div>
      <div className={style.textContainerBenefits}>
        <div className="">
          <p className={style.textContainerBenefitsP}>Our Benefits</p>
          <h1 className={style.textContainerBenefitsHeading}>
            The More Healthy Food The Better
          </h1>
        </div>
        <div className="">
          <ul>
            <li className={style.listItem}>
              <div className={style.check}></div>
              <p>Be alive with veggie food</p>
            </li>

            <li className={style.listItem}>
              <div className={style.check}></div>
              <p>It's The Place To Be</p>
            </li>
            <li className={style.listItem}>
              <div className={style.check}></div>
              <p>Non stop veggie food</p>
            </li>
            <li className={style.listItem}>
              <div className={style.check}></div>
              <p>The Best silk Dish in Town</p>
            </li>
            <li className={style.listItem}>
              <div className={style.check}></div>
              <p>Truffles, egg and pumpkin spice</p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Benefits;
