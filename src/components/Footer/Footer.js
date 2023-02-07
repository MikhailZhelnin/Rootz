import {useEffect} from "react";
import Aos from 'aos';
import 'aos/dist/aos.css'

import {icons} from "../../assests/icons/icons";
import styles from './Footer.module.scss'

const socialLinksData = [
    {
        id: 1,
        icon: icons.social.twitter,
        link: 'https://twitter.com',
    },
    {
        id: 2,
        icon: icons.social.facebook,
        link: 'https://www.facebook.com',
    },
    {
        id: 3,
        icon: icons.social.linkedin,
        link: 'https://www.linkedin.com',
    },
]

const Footer = () => {

    useEffect(() => {
        Aos.init({
            duration: 2000
        })
    }, [])

    return (
        <footer className={styles.footer}>
            <div className={styles.wrapper}>
                <div className={styles.column}>
                    <h2 data-aos='fade-up' className={styles.columnTitle}>Contacts</h2>
                    <span data-aos='fade-up' className={styles.columnText}>2019 Rootz Foundation. All rights reserved</span>
                </div>

                <div className={styles.column}>
                    <h3 data-aos='fade-up' className={`${styles.columnTitle} ${styles.columnTitleLittle}`}>Headquarters</h3>
                    <span data-aos='fade-up' className={styles.columnText}>1234 Taliban</span>
                    <span data-aos='fade-up' className={styles.columnText}>Los Angeles, La 1234567</span>
                    <span data-aos='fade-up' className={styles.columnText}>(123) 456-7890</span>
                </div>

                <div className={styles.column}>
                    <h3 data-aos='fade-up' className={`${styles.columnTitle} ${styles.columnTitleLittle}`}>Social media</h3>
                    <ul data-aos='fade-up' className={styles.columnSocial}>
                        {socialLinksData.map(link => (
                            <li key={link.id} className={styles.columnSocialItem}>
                                <a href={link.link} target='_blank' className={styles.columnSocialItemLink}>
                                    <img src={link.icon}/>
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </footer>
    )
}

export default Footer;