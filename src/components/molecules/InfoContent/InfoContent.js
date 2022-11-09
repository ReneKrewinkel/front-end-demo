import PropTypes from 'prop-types'
import Heading from "../../atoms/Heading";
import Paragraph from "../../atoms/Paragraph";
import Button from "../../atoms/Button";

const InfoContent = (props) => {

    return(
        <div data-testid={ props.testID }
             className={ `InfoContent` }>
            <div className="content-left">
                <Heading text={"team"} type={"H2"} />
                <Paragraph />
                <Button text={"jobs"} type={"colored"}/>
            </div>
            <div className="content-right">
                <Heading text={"projects"} type={"H2"} />
                <Paragraph />
                <Button text={"projects"} type={"colored"}/>
            </div>

        </div>
    )

}


InfoContent.propTypes = {
    testID: PropTypes.string,
}

export default InfoContent