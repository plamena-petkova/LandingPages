import style from "../Features/Features.module.css";
import payment from "../../assets/payment.svg"
import shipping from "../../assets/shipping.svg"
import percent  from "../../assets/percent.svg"
import headset from "../../assets/headset.svg"


function Features() {
    return(
<section className={style.container}>
    <div className={style.divider}></div>
    <div className={style.features}>
        <div className={style.feature}>
            <img src={shipping} alt="shipping" className={style.image}/>
            <div className={style.featureInfo}>
            <h5>Free Shipping</h5>
            <p>Orders over $140</p>
            </div>
        </div>
        <div className={style.feature}>
            <img src={payment} alt="payment" className={style.image} />
            <div className={style.featureInfo}>
            <h5>Quick Payment</h5>
            <p>100% secure payment</p>
            </div>
        </div>
        <div className={style.feature}>
            <img src={percent} alt="percent" className={style.image} />
            <div className={style.featureInfo}>
            <h5>Special Promo</h5>
            <p>Get special promo</p>
            </div>
        </div>
        <div className={style.feature}>
            <img src={headset} alt="headset" className={style.image} />
            <div className={style.featureInfo}>
            <h5>24/7 support</h5>
            <p>ready support</p>
            </div>
        </div>

    </div>

    
    <div className={style.divider}></div>
</section>
    )
}

export default Features;