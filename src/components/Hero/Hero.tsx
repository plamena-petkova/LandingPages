import style from "../Hero/Hero.module.css";
import preheading from "../../assets/preheading.svg";
import heroPicture from "../../assets/heroPicture.svg";
import foodService from "../../assets/foodService.svg";
import RedButton from "../RedButton/RedButton";

const Hero: React.FC = () => {
  return (
    <section className={style.container}>
      <div className={style.leftPart}>
        <img src={preheading} alt="preheading" />
        <div className={style.containerInfo}>
          <h1 className={style.heading}>
            Quickest <span className={style.redText}>Food Delivery</span> in
            Town
          </h1>
          <h4 className={style.subheading}>
            We will deliver food within 30 minutes in ypur town, if we would
            fail we will give the food for free.
          </h4>
          <div className={style.buttonContainerPicture}>
            <div className={style.buttonContainer}>
              <RedButton captions="Order your food" />
              <button className={style.buttonHowTo}>How to order</button>
            </div>
        
            <img className={style.image} src={foodService} alt="foodService" />
      
           
          </div>
        </div>
      </div>

      <div className={style.rightPart}>
        <img src={heroPicture} alt="hero-pic" />
      </div>
    </section>
  );
};

export default Hero;
