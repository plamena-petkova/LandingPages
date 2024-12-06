import style from "../EmailForm/Email.module.css"
import location from "../../assets/location.svg"

function EmailForm() {


    return(
        <div className={style.container}>
            <div className={style.imageContainer}>
                <img src={location} alt="location" />
            </div>
            <div className={style.textContainer}>
                <h1 className={style.heading}>Get more discount if you order from us</h1>
                <p className={style.subheading}>Join with us then you must have get a discount and get promo from us to you , enjoy and happy to order.</p>
                <div className={style.inputContainer}>
                <input type="text" className={style.emailInput} placeholder="Your Email Address"/>
                <button className={style.blackButton}>Get</button>
                </div>
          
            </div>
        </div>
    )
}

export default EmailForm;