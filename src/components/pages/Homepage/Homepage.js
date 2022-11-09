import PropTypes from 'prop-types'
import Header from "../../organisms/Header";
import Hero from "../../organisms/Hero";
import AboutSection from "../../organisms/AboutSection";
import InfoSection from "../../organisms/InfoSection";
import Footer from "../../organisms/Footer";

const Homepage = (props) => {

    return(
        <div data-testid={ props.testID }
             className={`Homepage` }>
            <Header />
            <Hero />
            <AboutSection />
            <InfoSection />
            <Footer />
        </div>
    )

}

Homepage.propTypes = {
    testID: PropTypes.string,
}

export default Homepage