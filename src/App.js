import Header from "./components/Header/Header";
import Banner from "./components/Banner/Banner";
import Team from "./components/Team/Team";
import Book from "./components/Book/Book";
import Contact from "./components/Contact/Contact";
import Slider from "./components/Slider/Slider";
import Footer from "./components/Footer/Footer";

function App() {
    return (
        <div>
            <Header/>

            <main>
                <Banner/>
                <Team/>
                <Book/>
                <Contact/>
                <Slider/>
            </main>

            <Footer/>
        </div>
    );
}

export default App;
