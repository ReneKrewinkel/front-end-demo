import PropTypes from 'prop-types'
import HeroImage from "../../atoms/HeroImage";
import Heading from "../../atoms/Heading";
import Paragraph from "../../atoms/Paragraph";
import Button from "../../atoms/Button";

const HeroContent = (props) => {

    return(
        <div data-testid={ props.testID }
             className={ `HeroContent` }>

            <div className="image">
                <HeroImage />
            </div>

            <div className="content">
                <Heading text={"contact us"} type={"H2"} color={"white"}/>
                <Paragraph type={"white"}/>
                <div className="buttonbar">
                    <Button type={"closed"} text={"start coding"} />
                    <Button type={"open"} text={"contact"} />
                </div>
            </div>

        </div>
    )

}


HeroContent.propTypes = {
    testID: PropTypes.string,
}

export default HeroContent