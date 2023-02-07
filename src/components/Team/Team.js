import {useEffect} from "react";
import Aos from 'aos';
import 'aos/dist/aos.css'

import styles from './Team.module.scss'
import {images} from "../../assests/images/images";
import {icons} from "../../assests/icons/icons";

import {useWindowSize} from "../../hooks/useWindowWidth";

const Team = () => {

    useEffect(() => {
        Aos.init({
            duration: 2000
        })
    }, [])

    const {width} = useWindowSize();

    return (
        <section className={styles.team}>
            <div className={styles.wrapper}>
                <div className={styles.header}>
                    <h2 data-aos='fade-up' className={styles.headerTitle}>Our Top Team</h2>
                    <div data-aos='fade-up' className={styles.headerText}>
                        <p>Learn more about how you can save our planet's nature. </p>
                    </div>
                </div>

                <div data-aos='fade-up' className={styles.cards}>
                    <div className={styles.cardOne}>
                        <img src={width > 500 ? images.team.card_1 : images.team.card_mobile_1}/>
                        <img src={width > 768 ? icons.team.line_1 : icons.team.line_mobile_1} className={styles.cardOneLine}/>
                    </div>
                    <div className={styles.cardTwo}>
                        <img src={width > 500 ? images.team.card_2 : images.team.card_mobile_2}/>
                    </div>
                    <div className={styles.cardThree}>
                        <img src={width > 500 ? images.team.card_3 : images.team.card_mobile_3}/>
                        <img src={width > 768 ? icons.team.line_2 : icons.team.line_mobile_2} className={styles.cardThreeLine}/>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Team;