import { BsPeopleCircle, BsPencilSquare, BsEnvelopeFill, BsEnvelopeOpenFill, BsCaretDownFill, BsBellFill } from "react-icons/bs";
import "./Navbar.css";

//adding a create new post icon, messages icon, notifications icon, and drop down menu to view account
const IconsTwo = () => {
    return (
        <div className="IconsTwo">
            <h3>
                <BsPeopleCircle /> Profile Name
            </h3>
            <>
                <BsPencilSquare />
            </>
            <>
                <BsEnvelopeFill />
                <BsEnvelopeOpenFill />
            </>
            <>
                <BsBellFill />
            </>
            <>
                <BsCaretDownFill />
            </>
        </div>
    )
}

export default IconsTwo