import {useState, useEffect} from "react";
import Aos from 'aos';
import 'aos/dist/aos.css'

import styles from './Book.module.scss'
import {icons} from "../../assests/icons/icons";

const Book = () => {

    useEffect(() => {
        Aos.init({
            duration: 2000
        })
    }, [])

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    const submitForm = (e) => {
        e.preventDefault();
        console.log(name, email);
        setName('');
        setEmail('');
    }

    return (
        <section className={styles.book}>
            <div className={styles.wrapper}>
                <div className={styles.content}>
                    <div className={styles.left}>
                        <h2 data-aos='fade-right' className={styles.title}>Get Started Today!</h2>
                        <div data-aos='fade-right' className={styles.text}>
                            <p>Learn more about how you can save our planet's nature. From smart consumption to
                                switching to renewable energy, each of us can do our part to save the planet. </p>
                        </div>
                    </div>

                    <div className={styles.right}>
                        <form data-aos="flip-right" onSubmit={submitForm} className={styles.form}>
                            <span className={styles.formTitle}>Log In</span>
                            <input
                                type="text"
                                placeholder='Name'
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                className={styles.formInput}
                            />
                            <input
                                type="text"
                                placeholder='Email'
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className={styles.formInput}
                            />
                            <button type='submit' className={styles.formButton}>Book a demo</button>
                            <img src={icons.book.leaf_1} alt='Leaf 1' className={styles.formLeafOne}/>
                            <img src={icons.book.leaf_2} alt='Leaf 2' className={styles.formLeafTwo}/>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Book;