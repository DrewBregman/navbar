import IconsOne from "./IconsOne";
import IconsTwo from "./IconsTwo";
import Logo from "./Logo";
import Searchbar from "./Searchbar";
import "./Navbar.css";

const Navbar = () => {
    return (
        <div className="Navbar">
            <Navbar bg='light'>
                <IconsOne />
                <IconsTwo />
                <Logo />
                <Searchbar />
            </Navbar>
        </div>
    )
}

export default Navbar