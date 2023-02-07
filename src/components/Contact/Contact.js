import {useState, useEffect} from "react";
import Aos from 'aos';
import 'aos/dist/aos.css'

import styles from './Contact.module.scss'
import {icons} from "../../assests/icons/icons";

const data = [
    {
        id: 1,
        question: 'What can I do to protect our planet?',
        answer: 'Not to make an open fire in nature and to clean up litter; not to pollute open water bodies; to switch to alternative energy sources; to reduce the use of non-renewable resources',
    },
    {
        id: 2,
        question: 'How to save nature ecology?',
        answer: 'Not to make an open fire in nature and to clean up litter; not to pollute open water bodies; to switch to alternative energy sources; to reduce the use of non-renewable resources',
    },
    {
        id: 3,
        question: 'What is nature conservation?',
        answer: 'Not to make an open fire in nature and to clean up litter; not to pollute open water bodies; to switch to alternative energy sources; to reduce the use of non-renewable resources',
    },
]

const Contact = () => {

    useEffect(() => {
        Aos.init({
            duration: 2000
        })
    }, [])

    const [selected, setSelected] = useState(null)

    const toggle = (id) => {
        if (selected === id) {
            return setSelected(null)
        }

        setSelected(id)
    }

    return (
        <section className={styles.contact}>
            <div className={styles.wrapper}>
                <div className={styles.left}>
                    <h2 data-aos='fade-right' className={styles.title}>Ready To Get Started?</h2>
                    <div data-aos='fade-right' className={styles.text}>
                        <p>When pattern is mentioned in interior design, it is easy to asso-ciate it with a geometric patterned wallpaper or colourful prints on interior fabrics.</p>
                    </div>
                    <button data-aos='fade-right' className={styles.button}>Contact us</button>
                </div>

                <div className={styles.right}>
                    {data.map(question => (
                        <div data-aos='fade-up' key={question.id} className={styles.item}>
                            <div className={styles.header} onClick={() => toggle(question.id)}>
                                <span className={styles.headerTitle}>{question.question}</span>
                                <button className={styles.headerButton}>
                                    {selected === question.id
                                        ? <img src={icons.minus} className={styles.headerButtonIcon} alt='Minus'/>
                                        : <img src={icons.plus} className={styles.headerButtonIcon} alt='Plus'/>
                                    }
                                </button>
                            </div>

                            <div className={selected === question.id ? `${styles.content} ${styles.show}` : styles.content}>
                                {question.answer}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Contact;