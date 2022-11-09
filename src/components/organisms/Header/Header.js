import PropTypes from 'prop-types'
import Logo from "../../atoms/Logo";
import MenuTrigger from "../../atoms/MenuTrigger";

const Header = (props) => {

    return(
        <div data-testid={ props.testID }
             className={ `Header` }>
            <Logo />
            <MenuTrigger />
        </div>
    )

}

Header.propTypes = {
    testID: PropTypes.string,
}

export default Header