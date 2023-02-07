import {useEffect} from "react";
import Aos from "aos";
import 'aos/dist/aos.css'

import styles from "./SliderItem.module.scss";
import {icons} from "../../../assests/icons/icons";

import {useWindowSize} from "../../../hooks/useWindowWidth";

const SliderItem = ({slide, currentIndex}) => {

    useEffect(() => {
        Aos.init({
            duration: 2000
        })
    }, [])

    const {width} = useWindowSize();

    return (
        <div data-aos="zoom-in-up" className={styles.sliderItem}>
            {currentIndex === slide.id - 1
                ? <img src={width > 500 ? icons.slider.slide_bg : icons.slider.slide_mobile_bg}/>
                : <img src={slide.img}/>
            }
            {currentIndex === slide.id - 1 &&
                <img
                    src={slide.mini_img !== undefined ? slide.mini_img : slide.img}
                    className={styles.sliderImage}
                />
            }
            <div className={styles.sliderContent}>
                <h3 className={currentIndex !== slide.id - 1 ? `${styles.sliderTitle}` : `${styles.sliderTitle} ${styles.sliderTitleActive}`}>
                    {slide.title}
                </h3>
                {currentIndex === slide.id - 1 &&
                    <div className={styles.sliderText}>
                        <p>{slide.text}</p>
                    </div>}
            </div>
        </div>
    )
}

export default SliderItem;