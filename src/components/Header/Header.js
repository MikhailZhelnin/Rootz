import {useEffect, useState} from "react";

import MobileMenu from "./MobileMenu/MobileMenu";

import styles from './Header.module.scss'
import {icons} from "../../assests/icons/icons";

const Header = () => {

    const [opened, setOpened] = useState(false);

    useEffect(() => {
        if (opened) {
            if (typeof window != 'undefined' && window.document) {
                document.body.style.overflow = 'hidden';
            }
        } else {
            document.body.style.overflow = 'unset';
        }
    }, [opened])

    return (
        <>
            <header className={!opened ? `${styles.header}` : `${styles.header} ${styles.headerFixed}`}>
                <div className={styles.content}>
                    <img src={icons.logo} alt='Logo'/>

                    <ul className={styles.navigation}>
                        <li className={styles.navigationItem}>Home</li>
                        <li className={styles.navigationItem}>Our mission</li>
                        <li className={styles.navigationItem}>Places</li>
                        <li className={styles.navigationItem}>Team</li>
                    </ul>

                    <button className={styles.button}>Apply</button>

                    <div className={styles.hamburgerMenu} onClick={() => setOpened(!opened)}>
                        <span className={!opened ? `${styles.hamburgerMenuBar}` : `${styles.hamburgerMenuBar} ${styles.hamburgerMenuBarClose}`}></span>
                        <span className={!opened ? `${styles.hamburgerMenuBar}` : `${styles.hamburgerMenuBar} ${styles.hamburgerMenuBarClose}`}></span>
                        <span className={!opened ? `${styles.hamburgerMenuBar}` : `${styles.hamburgerMenuBar} ${styles.hamburgerMenuBarClose}`}></span>
                    </div>
                </div>
            </header>
            {opened && <MobileMenu/>}

        </>

    )
}

export default Header;