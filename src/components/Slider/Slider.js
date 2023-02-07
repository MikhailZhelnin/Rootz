import {useRef, useState, useEffect} from 'react';
import SlickSlider from "react-slick";
import Aos from 'aos';
import 'aos/dist/aos.css'

import SliderItem from "./SliderItem/SliderItem";

import styles from './Slider.module.scss'
import {images} from "../../assests/images/images";
import {icons} from "../../assests/icons/icons";

const data = [
    {
        id: 1,
        title: 'Save water',
        text: 'Taking on the issue of ensuring access to safe water requires worldwide effort.',
        img: images.slider.slide_water_img
    },
    {
        id: 2,
        title: 'Plant trees',
        text: 'Taking on the issue of ensuring access to safe water requires worldwide effort.',
        img: images.slider.slide_trees_img,
        mini_img: images.slider.slide_trees_mini_img
    },
    {
        id: 3,
        title: 'Save energy',
        text: 'Taking on the issue of ensuring access to safe water requires worldwide effort.',
        img: images.slider.slide_energy_img,
        mini_img: images.slider.slide_energy_mini_img,
    },
    {
        id: 4,
        title: 'Avoid plastic',
        text: 'Taking on the issue of ensuring access to safe water requires worldwide effort.',
        img: images.slider.slide_plastic_img,
        mini_img: images.slider.slide_plastic_mini_img,
    },
    {
        id: 5,
        title: 'Choose organic',
        text: 'Taking on the issue of ensuring access to safe water requires worldwide effort.',
        img: images.slider.slide_organic_img,
        mini_img: images.slider.slide_organic_mini_img
    },
]

const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    centerMode: true,
    arrows: false,
    variableWidth: true,
    touchMove: false,
    mobileFirst: true,
    responsive: [{
        breakpoint: 1024,
        settings: {
            slidesToShow: 3,
            slidesToScroll: 1
        },
    },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            }
        },
    ]
}

const Slider = () => {

    useEffect(() => {
        Aos.init({
            duration: 2000
        })
    }, [])

    const sliderRef = useRef();

    const [currentIndex, setCurrentIndex] = useState(0);

    const goToPrev = () => {
        sliderRef.current.slickPrev();
    }

    const goToNext = () => {
        sliderRef.current.slickNext();
    }

    return (
        <div className={styles.slider}>
            <SlickSlider
                {...settings}
                ref={sliderRef}
                beforeChange={(currentSlide, nextSlide) => {
                    setCurrentIndex(nextSlide);
                }}>
                {data.map(slide => (
                    <SliderItem key={slide.id} slide={slide} currentIndex={currentIndex}/>
                ))}
            </SlickSlider>

            <div data-aos="fade-up" className={styles.sliderNavigation}>
                <button className={styles.sliderNavigationBtn} onClick={goToPrev}>
                    <img src={icons.arrow_left}/>
                </button>
                <div>
                    <span className={styles.sliderNavigationNumberCurrent}>{currentIndex + 1}</span>
                    <span className={styles.sliderNavigationNumberAmount}> / {data.length}</span>
                </div>
                <button className={styles.sliderNavigationBtn} onClick={goToNext}>
                    <img src={icons.arrow_right}/>
                </button>
            </div>
        </div>
    )
}

export default Slider;