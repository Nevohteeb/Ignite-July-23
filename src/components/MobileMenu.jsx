import { Link } from "react-router-dom";
import { X } from 'react-bootstrap-icons';

const MobileMenu = ({ closeMethod }) => {
    return (
        <>
            <button id="close-nav-menu" onClick={closeMethod}>
                <X />
            </button>
            <ul id='mobile-menu'>
                <li>
                    <Link to="/" onClick={closeMethod}>Home</Link>
                </li>
                <li>
                    <Link to="/cdd" onClick={closeMethod}>Creative Digital Design</Link>
                </li>
                <li>
                    <Link to="/wux" onClick={closeMethod}>Web/Ux</Link>
                </li>
            </ul>
        </>
    )
}

export default MobileMenu