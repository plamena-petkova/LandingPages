import style from "../Footer/Footer.module.css";
import insta from "../../assets/insta.svg";
import facebook from "../../assets/facebook.svg";
import twitter from "../../assets/twitter.svg";
import email from "../../assets/email.svg";
import logo from "../../assets/logoFooter.svg";

function Footer() {
  return (
        <div className={style.footer}>
            <div className={style.footerSection}>
                <div className={style.logo}>
                    <img src={logo} alt="Logo" />
                </div>
                <div className={style.socialIcons}>
                    <div className={style.socialIconsLeft}>
                    <a href="#"><img src={facebook} alt="facebook" /></a> {/* Replace <i>F</i> with proper icons using a library like Font Awesome */}
                    <a href="#"><img src={insta} alt="insta" /></a>
                    </div>
                   <div className={style.socialIconsRight}>
                   <a href="#"><img src={email} alt="email" /></a>
                   <a href="#"><img src={twitter} alt="twitter" /></a>
                   </div>
                   
                </div>
            </div>


            <div className={style.footerSection}>
                <h4>Company</h4>
                <a href="#">Home</a>
                <a href="#">Services</a>
                <a href="#">About Us</a>
                <a href="#">Contact Us</a>
            </div>


            <div className={style.footerSection}>
                <h4>Our Product</h4>
                <a href="#">Support</a>
                <a href="#">Guide</a>
            </div>

            <div className={style.footerSection}>
                <h4>Terms & policies</h4>
                <a href="#">Terms of Service</a>
                <a href="#">Privacy Policy</a>
            </div>


            <div className={style.footerSection}>
                <h4>Contact</h4>
                <div className={style.contactInfo}>(+62) 893912392190</div>
                <div className={style.contactInfo}>agencycr@gmail.com</div>
            </div>
        </div>
    );
}

export default Footer;
