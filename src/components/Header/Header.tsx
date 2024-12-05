
import styles from './Header.module.css'
import logo from "../../assets/logo.svg"
import cart from "../../assets/cart.svg"
import RedButton from '../RedButton/RedButton'

const Header: React.FC = () => {
    
    return(
        <section className={styles.container}>
            <div>
                <img src={logo} alt="logo" />
            </div>
          
                <nav className={styles.navigation}>
                    <ul><button className={styles.navButtons}>Home</button></ul>
                    <ul><button className={styles.navButtons}>Services</button></ul>
                    <ul><button className={styles.navButtons}>About Us</button></ul>
                    <ul><button className={styles.navButtons}>Contact Us</button></ul>
                </nav>

                <div className={styles.actionButtons}>
                    <ul><button className={styles.actionBtn}><img src={cart} alt="cart"></img></button></ul>
                    <ul><RedButton captions='Sign Up &rarr;' /></ul>
                </div>
     
        </section>
    )
}

export default Header;

