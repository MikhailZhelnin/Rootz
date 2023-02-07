import {useEffect} from "react";
import Aos from "aos";
import 'aos/dist/aos.css'

import styles from "./MobileMenu.module.scss";

const MobileMenu = () => {

    useEffect(() => {
        Aos.init({
            duration: 2000
        });
    }, [])

    return (
        <div
            data-aos="fade-left"
            data-aos-duration="500"
            className={styles.mobileMenu}
        >
            <ul className={styles.mobileMenuNavigation}>
                <li data-aos="fade-left" data-aos-delay="50" className={styles.mobileMenuNavigationItem}>Home</li>
                <li data-aos="fade-left" data-aos-delay="150" className={styles.mobileMenuNavigationItem}>Our mission</li>
                <li data-aos="fade-left" data-aos-delay="250" className={styles.mobileMenuNavigationItem}>Places</li>
                <li data-aos="fade-left" data-aos-delay="350" className={styles.mobileMenuNavigationItem}>Team</li>
            </ul>
            <button data-aos="fade-left"  className={styles.mobileMenuButton}>Apply</button>
        </div>
    )
}

export default MobileMenu;