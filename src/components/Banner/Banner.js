import {useState, useEffect} from "react";
import Aos from 'aos';
import 'aos/dist/aos.css'

import {icons} from "../../assests/icons/icons";
import styles from './Banner.module.scss';
import {useWindowSize} from "../../hooks/useWindowWidth";

const Banner = () => {

    useEffect(() => {
        Aos.init({
            duration: 2000
        })
    }, [])

    const {width} = useWindowSize();

    const [search, setSearch] = useState('');

    const submitForm = (e) => {
        e.preventDefault();
        console.log(search);
        setSearch('');
    }

    return (
        <div className={styles.banner}>
            <div className={styles.wrapper}>
                <div data-aos='fade-right' className={styles.left}>
                    <img src={icons.banner.headline} alt='Headline' className={styles.headline}/>
                    <div className={styles.text}>
                        <p>The scale of the challenges facing our planet can seem daunting, but we can all do
                            something.</p>
                    </div>
                    <form className={styles.search} onSubmit={submitForm}>
                        <img src={icons.banner.location} alt='Location' className={styles.searchIcon}/>
                        <input
                            type='text'
                            placeholder='Find the place to help'
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            className={styles.searchInput}
                        />
                        <button type='submit' className={styles.searchButton}>
                            Search
                        </button>
                    </form>
                </div>

                <div data-aos='fade-left'  className={styles.right}>
                    <img src={width > 600 ? icons.banner.parrot : icons.banner.parrot_mobile} alt='Parrot' className={styles.parrotIcon}/>
                </div>
            </div>
        </div>
    )
}

export default Banner;